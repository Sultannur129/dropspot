const { PrismaClient } = require('../generated');
const prisma = new PrismaClient();

// Aktif drop listesi
exports.getDrops = async (req, res) => {
  try {
    const drops = await prisma.drop.findMany();
    res.json(drops);
  } catch (err) {
    res.status(500).json({ error: 'Drop listesi alınamadı', details: err.message });
  }
};

// Waitlist’e katıl
exports.joinWaitlist = async (req, res) => {
  const userId = req.body.userId;
  const dropId = parseInt(req.params.id);

  const dropExists = await prisma.drop.findUnique({ where: { id: dropId } });
if (!dropExists) {
  return res.status(400).json({ error: 'Drop bulunamadı' });
}


  try {
    const entry = await prisma.waitlist.create({
      data: { user_id: userId, drop_id: dropId },
    });
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Waitlist’e katılamadı', details: err.message });
  }
};

// Waitlist’ten ayrıl
exports.leaveWaitlist = async (req, res) => {
  const userId = req.body.userId;
  const dropId = parseInt(req.params.id);

  try {
    const deleted = await prisma.waitlist.deleteMany({
      where: { user_id: userId, drop_id: dropId },
    });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: 'Waitlist’ten ayrılamadı', details: err.message });
  }
};

// Claim süreci
exports.claimDrop = async (req, res) => {
  const userId = req.body.userId;
  const dropId = parseInt(req.params.id);

  try {
    // Waitlist kontrolü
    const entry = await prisma.waitlist.findFirst({
      where: { user_id: userId, drop_id: dropId },
    });
    if (!entry) return res.status(400).json({ error: 'Waitlist’te değilsiniz' });

    // Claim kontrolü
    let claim = await prisma.claim.findFirst({
      where: { user_id: userId, drop_id: dropId },
    });

    if (!claim) {
      const claimCode = Math.random().toString(36).substring(2, 10).toUpperCase();
      claim = await prisma.claim.create({
        data: { user_id: userId, drop_id: dropId, claim_code: claimCode },
      });
    }

    res.json(claim);
  } catch (err) {
    res.status(500).json({ error: 'Claim yapılamadı', details: err.message });
  }
};
