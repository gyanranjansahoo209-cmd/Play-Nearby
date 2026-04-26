const { PrismaClient } = require('../src/generated/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.matchParticipant.deleteMany();
  await prisma.match.deleteMany();
  await prisma.userSport.deleteMany();
  await prisma.user.deleteMany();
  await prisma.sport.deleteMany();

  // Create Sports
  const chess = await prisma.sport.create({ data: { name: 'Chess', category: 'Indoor' } });
  const carrom = await prisma.sport.create({ data: { name: 'Carrom', category: 'Indoor' } });
  const cards = await prisma.sport.create({ data: { name: 'Cards', category: 'Indoor' } });
  const badminton = await prisma.sport.create({ data: { name: 'Badminton', category: 'Racquet' } });
  const tt = await prisma.sport.create({ data: { name: 'Table Tennis', category: 'Indoor' } });
  const tennis = await prisma.sport.create({ data: { name: 'Tennis', category: 'Racquet' } });

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: 'Alex Johnson',
      email: 'alex@example.com',
      password: 'password123',
      bio: 'Avid chess player looking for weekend matches.',
      latitude: 37.7749,
      longitude: -122.4194,
      address: 'Downtown',
      isAvailableNow: true,
      availability: JSON.stringify({ days: ['Saturday', 'Sunday'], times: ['Morning', 'Afternoon'] }),
      playingLocations: JSON.stringify(['Society clubhouse', 'Local ground']),
    }
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Sam Smith',
      email: 'sam@example.com',
      password: 'password123',
      bio: 'Casual badminton player.',
      latitude: 37.7849,
      longitude: -122.4094,
      address: 'Westside',
      isAvailableNow: false,
      availability: JSON.stringify({ days: ['Monday', 'Wednesday', 'Friday'], times: ['Evening'] }),
      playingLocations: JSON.stringify(['Local ground']),
    }
  });

  // User Sports
  await prisma.userSport.create({ data: { userId: user1.id, sportId: chess.id, skillLevel: 'Advanced' } });
  await prisma.userSport.create({ data: { userId: user2.id, sportId: badminton.id, skillLevel: 'Intermediate' } });

  // Create Matches
  await prisma.match.create({
    data: {
      creatorId: user1.id,
      sportId: chess.id,
      title: 'Weekend Morning Chess',
      latitude: 37.7700,
      longitude: -122.4100,
      venueName: 'Society Clubhouse A',
      venueType: 'Society clubhouse',
      scheduledTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      maxPlayers: 2,
      status: 'Open',
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
