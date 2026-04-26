export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';
export type MatchStatus = 'Open' | 'Full' | 'Completed' | 'Cancelled';
export type ParticipantStatus = 'Pending' | 'Accepted' | 'Declined';
export type PlayingLocationType = 'Home' | 'Society clubhouse' | 'Local ground';

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface Availability {
  days: string[]; // e.g., ['Monday', 'Wednesday', 'Saturday']
  times: string[]; // e.g., ['Morning', 'Evening']
}

export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  profileImageUrl?: string;
  location: Location;
  isAvailableNow: boolean;
  availability: Availability;
  playingLocations: PlayingLocationType[];
  privacyRadius: number; // in meters
  createdAt: Date;
}

export interface Sport {
  id: string;
  name: string;
  category: 'Indoor' | 'Outdoor' | 'Racquet' | 'Team' | 'Board';
  iconUrl?: string;
}

export interface UserSport {
  userId: string;
  sportId: string;
  skillLevel: SkillLevel;
  yearsExperience?: number;
}

export interface Match {
  id: string;
  creatorId: string;
  sportId: string;
  title: string;
  location: Location;
  venueName?: string;
  venueType: PlayingLocationType;
  scheduledTime: Date;
  maxPlayers: number;
  status: MatchStatus;
  createdAt: Date;
}

export interface MatchParticipant {
  matchId: string;
  userId: string;
  status: ParticipantStatus;
}
