// Direct SQLite migration using Prisma's client
const { PrismaClient } = require('./src/generated/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Try to add darkMode column
    await prisma.$executeRawUnsafe(`ALTER TABLE "User" ADD COLUMN "darkMode" INTEGER NOT NULL DEFAULT 1`);
    console.log('✅ Added darkMode column to User table');
  } catch (err) {
    if (err.message && err.message.includes('duplicate column')) {
      console.log('ℹ️  darkMode column already exists');
    } else {
      console.error('❌ Migration error:', err.message);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main();
