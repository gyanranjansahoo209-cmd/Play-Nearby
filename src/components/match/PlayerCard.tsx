'use client';
import { User, UserSport } from '@/types/schema';
import { MapPin, Activity, Check } from 'lucide-react';
import { sendPlayRequest } from '@/app/actions/match';
import { useState } from 'react';

interface PlayerCardProps {
  user: User;
  userSports: UserSport[];
  sportNames: Record<string, string>;
}

export default function PlayerCard({ user, userSports, sportNames }: PlayerCardProps) {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSendRequest = async () => {
    setIsSending(true);
    try {
      const result = await sendPlayRequest(user.id);
      if (result.success) {
        setSent(true);
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert('Failed to send request');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-blue-500 text-lg font-bold text-white shadow-lg">
            {user.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{user.name}</h3>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <MapPin size={12} />
              <span>{user.location.address || 'Nearby'}</span>
            </div>
          </div>
        </div>
        {user.isAvailableNow && (
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        )}
      </div>

      <p className="text-sm text-slate-300 mb-6 line-clamp-2">
        {user.bio || 'Ready to play!'}
      </p>

      <div className="mt-auto">
        <div className="mb-2 text-xs font-medium text-slate-400 flex items-center gap-1">
          <Activity size={14} /> Plays:
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {userSports.map((us) => (
            <span key={us.sportId} className="inline-flex items-center rounded-lg bg-white/10 px-2 py-1 text-xs font-medium text-slate-200">
              {sportNames[us.sportId]} • <span className="text-brand ml-1">{us.skillLevel}</span>
            </span>
          ))}
        </div>

        <button 
          onClick={handleSendRequest}
          disabled={isSending || sent}
          className={`w-full rounded-xl py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            sent 
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
            : 'bg-white/10 hover:bg-brand hover:shadow-[0_0_20px_-5px_var(--brand)]'
          }`}
        >
          {isSending ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : sent ? (
            <><Check size={16} /> Request Sent</>
          ) : (
            'Send Play Request'
          )}
        </button>
      </div>
    </div>
  );
}
