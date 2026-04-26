import Navbar from "@/components/layout/Navbar";
import { db } from "@/lib/db";
import { format } from "date-fns";
import { ArrowLeft, Clock, MapPin, Users, Info, ShieldCheck, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MatchDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const match = await db.match.findUnique({
    where: { id },
    include: {
      sport: true,
      creator: true,
      participants: true,
    }
  });

  if (!match) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        
        {/* Back Button */}
        <Link 
          href="/dashboard"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors self-start"
        >
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-start">
                <div className="flex w-full justify-between items-start mb-6">
                  <span className="inline-flex items-center rounded-full bg-brand/20 px-3 py-1 text-sm font-semibold text-brand">
                    {match.sport.name} • {match.sport.category}
                  </span>
                  <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
                
                <h1 className="text-4xl font-bold mb-6 text-white">{match.title}</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                    <div className="p-3 bg-brand/20 rounded-xl text-brand shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-400">Date & Time</h3>
                      <p className="font-semibold text-white mt-1">
                        {format(match.scheduledTime, 'EEEE, MMM d, yyyy')}
                      </p>
                      <p className="text-sm text-slate-300">
                        {format(match.scheduledTime, 'h:mm a')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-400">Location</h3>
                      <p className="font-semibold text-white mt-1">{match.venueName}</p>
                      <p className="text-sm text-slate-300">{match.venueType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Info size={20} className="text-brand" /> About this Game
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Join us for a friendly match of {match.sport.name}. We are looking for players to have a good time and stay active. Please bring your own equipment if possible. Skill level is casual to intermediate. 
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            
            {/* Join Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Players</h3>
                <span className="px-3 py-1 bg-black/40 rounded-full text-sm font-medium text-slate-300">
                  {match.participants.length} / {match.maxPlayers}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-brand" style={{ width: `${(match.participants.length / match.maxPlayers) * 100}%` }} />
              </div>

              <button className="w-full py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-lg transition-all shadow-[0_0_20px_-5px_var(--brand)] hover:scale-[1.02] duration-200 mb-4">
                Request to Join
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={14} />
                <span>Your request will be sent to the host</span>
              </div>
            </div>

            {/* Host Info */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Hosted By</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold overflow-hidden border border-white/10">
                  {match.creator.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{match.creator.name}</p>
                  <p className="text-sm text-slate-400">Avg. Rating: 4.8</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
