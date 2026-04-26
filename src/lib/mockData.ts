import { User, Sport, Match, UserSport } from '../types/schema';

// Mock Sports
export const MOCK_SPORTS: Sport[] = [
  { id: '1', name: 'Chess', category: 'Indoor' },
  { id: '2', name: 'Carrom', category: 'Indoor' },
  { id: '3', name: 'Cards', category: 'Indoor' },
  { id: '4', name: 'Badminton', category: 'Racquet' },
  { id: '5', name: 'Table Tennis', category: 'Indoor' },
  { id: '6', name: 'Tennis', category: 'Racquet' },
];

// Mock Users
export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    bio: 'Avid chess player looking for weekend matches.',
    location: { latitude: 37.7749, longitude: -122.4194, address: 'Downtown' },
    isAvailableNow: true,
    availability: { days: ['Saturday', 'Sunday'], times: ['Morning', 'Afternoon'] },
    playingLocations: ['Society clubhouse', 'Local ground'],
    privacyRadius: 1000,
    createdAt: new Date(),
  },
  {
    id: 'u2',
    name: 'Sam Smith',
    email: 'sam@example.com',
    bio: 'Casual badminton player.',
    location: { latitude: 37.7849, longitude: -122.4094, address: 'Westside' },
    isAvailableNow: false,
    availability: { days: ['Monday', 'Wednesday', 'Friday'], times: ['Evening'] },
    playingLocations: ['Local ground'],
    privacyRadius: 2000,
    createdAt: new Date(),
  },
  {
    id: 'u3',
    name: 'Priya Patel',
    email: 'priya@example.com',
    bio: 'Love playing Carrom and Cards with neighbors.',
    location: { latitude: 37.7700, longitude: -122.4200, address: 'North Park' },
    isAvailableNow: true,
    availability: { days: ['Friday', 'Saturday'], times: ['Evening'] },
    playingLocations: ['Home', 'Society clubhouse'],
    privacyRadius: 500,
    createdAt: new Date(),
  }
];

export const MOCK_USER_SPORTS: UserSport[] = [
  { userId: 'u1', sportId: '1', skillLevel: 'Advanced' }, // Alex - Chess
  { userId: 'u2', sportId: '4', skillLevel: 'Intermediate' }, // Sam - Badminton
  { userId: 'u3', sportId: '2', skillLevel: 'Beginner' }, // Priya - Carrom
  { userId: 'u3', sportId: '3', skillLevel: 'Intermediate' }, // Priya - Cards
];

// Mock Matches
export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    creatorId: 'u1',
    sportId: '1', // Chess
    title: 'Weekend Morning Chess',
    location: { latitude: 37.7700, longitude: -122.4100, address: 'Society Clubhouse A' },
    venueName: 'Society Clubhouse A',
    venueType: 'Society clubhouse',
    scheduledTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Tomorrow
    maxPlayers: 2,
    status: 'Open',
    createdAt: new Date(),
  },
  {
    id: 'm2',
    creatorId: 'u2',
    sportId: '4', // Badminton
    title: 'Evening Doubles Badminton',
    location: { latitude: 37.7800, longitude: -122.4200, address: 'Community Sports Center' },
    venueName: 'Community Sports Center',
    venueType: 'Local ground',
    scheduledTime: new Date(new Date().getTime() + 48 * 60 * 60 * 1000),
    maxPlayers: 4,
    status: 'Open',
    createdAt: new Date(),
  },
];
