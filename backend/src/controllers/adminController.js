const { PrismaClient } = require('../generated');
const prisma = new PrismaClient();

// Yeni drop oluştur
exports.createDrop = async (req, res) => {
  try {
    const { title, description, drop_time, claim_window } = req.body;

    // Idempotency: aynı title ve drop_time ile tekrar eklenmesin
    const existing = await prisma.drop.findFirst({
      where: { title, drop_time },
    });
    if (existing) {
      return res.status(409).json({ error: 'Bu drop zaten mevcut' });
    }

    const drop = await prisma.drop.create({
      data: { title, description, drop_time, claim_window }
    });
    res.status(201).json(drop);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Drop oluşturulamadı', details: err.message });
  }
};

// Mevcut drop güncelle
exports.updateDrop = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const drop = await prisma.drop.update({
      where: { id: parseInt(id) },
      data
    });
    res.json(drop);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Drop güncellenemedi', details: err.message });
  }
};

// Drop sil
exports.deleteDrop = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.drop.delete({ where: { id: parseInt(id) } });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Drop silinemedi', details: err.message });
  }
};

// Drop listesini getir
exports.listDrops = async (req, res) => {
  try {
    const drops = await prisma.drop.findMany();
    res.json(drops);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Drop listesi alınamadı', details: err.message });
  }
};
