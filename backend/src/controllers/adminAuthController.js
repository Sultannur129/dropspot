const { PrismaClient } = require('../generated');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Eğer şifre hash’li saklanıyorsa

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) return res.status(401).json({ error: 'Email veya şifre yanlış' });

    // Şifre hash ile karşılaştırma
    const isPasswordValid = await bcrypt.compare(password, admin.password_hash);
    if (!isPasswordValid) return res.status(401).json({ error: 'Email veya şifre yanlış' });

    // JWT token üretimi
    const token = jwt.sign(
      { id: admin.id, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: '12h' } // token geçerlilik süresi
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Giriş yapılamadı', details: err.message });
  }
};
