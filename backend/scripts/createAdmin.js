// scripts/createAdmin.js
const { PrismaClient } = require('../src/generated');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.admin.create({
    data: {
      email: 'admin@example.com',
      password_hash: hashedPassword,
    },
  });
  console.log('Admin oluşturuldu:', admin);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
