const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated');
const prisma = new PrismaClient();

const adminAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token eksik veya hatalı' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Admin veritabanında mevcut mu kontrol et
    const admin = await prisma.admin.findUnique({ where: { id: decoded.id } });
    if (!admin) return res.status(401).json({ error: 'Yetkili admin bulunamadı' });

    req.admin = admin; // route içinde admin bilgisi kullanılabilir
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Geçersiz token', details: err.message });
  }
};

module.exports = { adminAuth };
