'use client';

import { MapPin, Clock, Users, Check } from 'lucide-react';
import { format } from 'date-fns';
import { joinMatch } from '@/app/actions/match';
import { useState } from 'react';

interface MatchCardProps {
  match: any; // Using any for simplified Prisma type
  sportName: string;
}

export default function MatchCard({ match, sportName }: MatchCardProps) {
  const [isJoining, setIsJoining] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleJoin = async () => {
    setIsJoining(true);
    try {
      const result = await joinMatch(match.id);
      if (result.success) {
        setJoined(true);
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert('An error occurred');
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-brand/20 px-2.5 py-0.5 text-xs font-medium text-brand">
            {sportName}
          </span>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            {match.status}
          </span>
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-brand transition-colors">
          {match.title}
        </h3>
        
        <div className="mb-6 space-y-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-slate-400" />
            <span>{format(new Date(match.scheduledTime), 'MMM d, yyyy • h:mm a')}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-slate-400" />
            <span className="truncate">{match.venueName || match.address || 'Location TBA'} ({match.venueType})</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-slate-400" />
            <span>{match.participantCount || 0} / {match.maxPlayers} Players</span>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 mt-auto">
        <button 
          onClick={handleJoin}
          disabled={isJoining || joined || match.status !== 'Open'}
          className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            joined 
            ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30' 
            : 'bg-white/10 text-white hover:bg-brand hover:shadow-[0_0_20px_-5px_var(--brand)] border border-white/5'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isJoining ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : joined ? (
            <><Check size={18} /> Joined</>
          ) : (
            'Join Match'
          )}
        </button>
      </div>
    </div>
  );
}
