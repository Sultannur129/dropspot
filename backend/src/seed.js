// src/seed.js
const { PrismaClient } = require('./generated');
const prisma = new PrismaClient();

async function main() {
  const drop = await prisma.drop.create({
    data: {
      title: 'Limited Edition Sneakers',
      description: 'Cool sneakers',
      drop_time: new Date(Date.now() + 24 * 60 * 60 * 1000), // yarına ayarladık
      claim_window: 10
    },
  });
  console.log('Seed drop created:', drop);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
