const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Eksik alan' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.users.create({  // <-- users
      data: { email, password_hash: hashedPassword }, // password_hash ile eşleştir
    });
    res.status(201).json({ id: user.id, email: user.email });
  } catch (err) {
    if (err.code === 'P2002') return res.status(400).json({ error: 'Email zaten kayıtlı' });
    console.error(err);  // gerçek hatayı konsola bas
    res.status(500).json({ error: 'Sunucu hatası' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Eksik alan' });

  const user = await prisma.users.findUnique({ where: { email } }); // <-- users
  if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });

  const match = await bcrypt.compare(password, user.password_hash); // <-- password_hash
  if (!match) return res.status(401).json({ error: 'Şifre yanlış' });

  res.json({ id: user.id, email: user.email });
};
