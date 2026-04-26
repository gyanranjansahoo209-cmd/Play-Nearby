import Navbar from "@/components/layout/Navbar";
import { MapPin, Activity, Trophy, Calendar, Settings } from "lucide-react";
import { db } from "@/lib/db";
import Link from "next/link";


import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      sports: {
        include: {
          sport: true
        }
      }
    }
  });

  if (!user) {
    redirect('/login');
  }

  const userSports = user.sports;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
        
        {/* Profile Header */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-brand/40 to-brand-hover/20 opacity-50" />
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6 mt-12">
            <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-background flex items-center justify-center overflow-hidden shrink-0 shadow-xl">
              {user.profileImageUrl ? (
                <img src={user.profileImageUrl} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-brand flex items-center justify-center text-4xl font-bold text-white uppercase">
                  {user.name.charAt(0)}
                </div>
              )}
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-slate-500" />
                  <span>{user.address || "Location not set"} (Radius: {user.privacyRadius / 1000}km)</span>
                </div>

                <div className="flex items-center gap-1">
                  <Activity size={16} className="text-brand" />
                  <span className={user.isAvailableNow ? 'text-green-400' : 'text-slate-400'}>
                    {user.isAvailableNow ? 'Available Now' : 'Not Available'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                href="/settings"
                id="settings-link"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-[var(--foreground)]"
                title="Settings"
              >
                <Settings size={20} />
              </Link>
              <Link 
                href="/profile/edit"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand hover:bg-brand-hover transition-colors text-white font-medium"
              >
                <Activity size={18} /> Edit Profile
              </Link>
            </div>
          </div>

          <div className="relative z-10 mt-8">
            <p className="text-slate-300 text-lg leading-relaxed">{user.bio}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Sports & Skill Levels */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand/20 rounded-lg text-brand"><Trophy size={20} /></div>
              <h2 className="text-xl font-bold">My Sports</h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {userSports.map((us: any) => (
                <div key={us.sportId} className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5">
                  <span className="font-medium">{us.sport.name}</span>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full text-slate-300">{us.skillLevel}</span>
                </div>
              ))}
              {userSports.length === 0 && (
                <p className="text-slate-500 italic">No sports added yet.</p>
              )}
            </div>
          </div>

          {/* Availability Details */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand/20 rounded-lg text-brand"><Calendar size={20} /></div>
              <h2 className="text-xl font-bold">Availability</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Preferred Days</h3>
                <div className="flex flex-wrap gap-2">
                  {(user.availability ? JSON.parse(user.availability).days : []).map((day: string) => (
                    <span key={day} className="px-3 py-1 bg-black/20 border border-white/5 rounded-lg text-sm">{day}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Preferred Times</h3>
                <div className="flex flex-wrap gap-2">
                  {(user.availability ? JSON.parse(user.availability).times : []).map((time: string) => (
                    <span key={time} className="px-3 py-1 bg-black/20 border border-white/5 rounded-lg text-sm">{time}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Preferred Venues</h3>
                <div className="flex flex-wrap gap-2">
                  {(user.playingLocations ? JSON.parse(user.playingLocations) : []).map((loc: string) => (
                    <span key={loc} className="px-3 py-1 bg-black/20 border border-white/5 rounded-lg text-sm text-brand">{loc}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
