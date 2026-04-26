import { db } from "@/lib/db";
export const dynamic = 'force-dynamic';

import { Sport } from "@/types/schema";
import Navbar from "@/components/layout/Navbar";
import FilterBar from "@/components/match/FilterBar";
import MatchCard from "@/components/match/MatchCard";
import PlayerCard from "@/components/match/PlayerCard";
import { Activity, Users, Plus } from "lucide-react";
import CreateMatchModal from "@/components/match/CreateMatchModal";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

interface DashboardProps {
  searchParams: Promise<{
    query?: string;
    category?: string;
    skill?: string;
    tab?: string;
  }>;
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  const { query, category, skill, tab = 'matches' } = await searchParams;
  const activeTab = tab as 'matches' | 'players';

  // Fetch Sports for the filter bar
  const sports = await db.sport.findMany();
  const sportNames = sports.reduce((acc: Record<string, string>, sport) => {
    acc[sport.id] = sport.name;
    return acc;
  }, {} as Record<string, string>);

  // Fetch Matches
  const matches = await db.match.findMany({
    where: {
      AND: [
        query ? {
          OR: [
            { title: { contains: query } },
            { venueName: { contains: query } },
            { sport: { name: { contains: query } } }
          ]
        } : {},
        category ? { sport: { category } } : {},
      ]
    },
    include: {
      sport: true,
      participants: true,
    },
    orderBy: { scheduledTime: 'asc' }
  });

  // Fetch Players (Excluding self, showing all others)
  const players = await db.user.findMany({
    where: {
      AND: [
        { id: { not: session.user.id } },
        query ? {
          OR: [
            { name: { contains: query } },
            { bio: { contains: query } },
            { address: { contains: query } }
          ]
        } : {},
        skill ? { sports: { some: { skillLevel: skill } } } : {},
      ]
    },
    include: {
      sports: true,
    }
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Find Partners & Games</h1>
            <p className="text-slate-400 text-sm">Discover matches happening around you or find local players.</p>
          </div>
          <CreateMatchModal sports={sports as any} />
        </div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Tabs */}
        <div className="flex gap-4 border-b border-white/10 pb-4">
          <a 
            href="?tab=matches"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'matches' ? 'bg-brand/20 text-brand' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <Activity size={18} /> Open Matches
          </a>
          <a 
            href="?tab=players"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'players' ? 'bg-brand/20 text-brand' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <Users size={18} /> Local Players
          </a>
        </div>

        {/* Content Grid */}
        {activeTab === 'matches' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match: any) => (
              <MatchCard 
                key={match.id} 
                match={{
                  ...match,
                  participantCount: match.participants.length
                }} 
                sportName={match.sport.name} 
              />
            ))}
            {matches.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-400">
                <p>No matches found with current filters.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((user: any) => (
              <PlayerCard 
                key={user.id} 
                user={{
                  ...user,
                  location: { latitude: user.latitude, longitude: user.longitude, address: user.address || undefined },
                  availability: user.availability ? JSON.parse(user.availability) : { days: [], times: [] },
                  playingLocations: user.playingLocations ? JSON.parse(user.playingLocations) : [],
                }} 
                userSports={user.sports}
                sportNames={sportNames}
              />
            ))}
            {players.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-400">
                <p>No players found with current filters.</p>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}
