'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Bell, X, Check, UserCircle, MapPin, Dumbbell } from 'lucide-react';
import { respondToPlayRequest } from '@/app/actions/match';

interface PlayRequest {
  id: string;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    profileImageUrl: string | null;
    address: string | null;
    sports: { sport: { name: string } }[];
  };
}

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [requests, setRequests] = useState<PlayRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [responding, setResponding] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<NodeJS.Timeout | null>(null);

  const fetchNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/notifications', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setRequests(data.requests || []);
      }
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch on mount + poll every 30s
  useEffect(() => {
    fetchNotifications();
    pollRef.current = setInterval(fetchNotifications, 30000);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [fetchNotifications]);

  // Also fetch when dropdown opens
  useEffect(() => {
    if (open) fetchNotifications();
  }, [open, fetchNotifications]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  async function handleRespond(requestId: string, action: 'accept' | 'reject') {
    setResponding(requestId);
    try {
      await respondToPlayRequest(requestId, action);
      setRequests(prev => prev.filter(r => r.id !== requestId));
    } catch {
      // silent fail
    } finally {
      setResponding(null);
    }
  }

  function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        id="notification-bell"
        onClick={() => setOpen(o => !o)}
        className="relative text-slate-300 hover:text-white transition-colors"
        aria-label="Notifications"
      >
        <Bell size={20} />
        {requests.length > 0 && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-white animate-pulse">
            {requests.length > 9 ? '9+' : requests.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-10 w-80 rounded-2xl border border-white/10 bg-[var(--surface)] shadow-2xl shadow-black/50 z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Bell size={16} className="text-brand" />
              <span className="font-semibold text-sm">Play Requests</span>
              {requests.length > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-brand/20 text-brand rounded-full">
                  {requests.length}
                </span>
              )}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Content */}
          <div className="max-h-96 overflow-y-auto">
            {loading && requests.length === 0 ? (
              <div className="py-8 text-center text-slate-400 text-sm">Loading...</div>
            ) : requests.length === 0 ? (
              <div className="py-10 flex flex-col items-center gap-2 text-slate-400">
                <Bell size={28} className="opacity-30" />
                <p className="text-sm">No pending requests</p>
              </div>
            ) : (
              <div className="divide-y divide-white/5">
                {requests.map(req => (
                  <div key={req.id} className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-start gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center shrink-0 overflow-hidden">
                        {req.sender.profileImageUrl ? (
                          <img src={req.sender.profileImageUrl} alt={req.sender.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-brand font-bold text-sm uppercase">
                            {req.sender.name.charAt(0)}
                          </span>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-tight">
                          {req.sender.name}
                          <span className="font-normal text-slate-400"> wants to play with you</span>
                        </p>

                        <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-400">
                          {req.sender.sports.length > 0 && (
                            <span className="flex items-center gap-1">
                              <Dumbbell size={10} />
                              {req.sender.sports[0].sport.name}
                            </span>
                          )}
                          {req.sender.address && (
                            <span className="flex items-center gap-1">
                              <MapPin size={10} />
                              {req.sender.address}
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-[11px] text-slate-500">{timeAgo(req.createdAt)}</p>

                        {/* Accept / Reject */}
                        <div className="mt-2 flex gap-2">
                          <button
                            id={`accept-request-${req.id}`}
                            disabled={responding === req.id}
                            onClick={() => handleRespond(req.id, 'accept')}
                            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-green-500/15 text-green-400 hover:bg-green-500/25 border border-green-500/20 text-xs font-medium transition-colors disabled:opacity-50"
                          >
                            <Check size={12} />
                            {responding === req.id ? '...' : 'Accept'}
                          </button>
                          <button
                            id={`reject-request-${req.id}`}
                            disabled={responding === req.id}
                            onClick={() => handleRespond(req.id, 'reject')}
                            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 text-xs font-medium transition-colors disabled:opacity-50"
                          >
                            <X size={12} />
                            Decline
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {requests.length > 0 && (
            <div className="px-4 py-2 border-t border-white/5 text-center">
              <button
                onClick={fetchNotifications}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Refresh
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
