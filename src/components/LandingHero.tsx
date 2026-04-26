'use client';

import { ArrowRight, Activity, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import WelcomeAnimation from '@/components/WelcomeAnimation';

export default function LandingHero() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <>
      <WelcomeAnimation onComplete={() => setShowAnimation(false)} />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col flex-1 items-center bg-background min-h-screen overflow-hidden relative selection:bg-brand/30 selection:text-brand">
        
        {/* Background gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-center px-6 py-24 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand mb-8 backdrop-blur-sm">
            <Activity size={16} />
            <span>Platform MVP Alpha</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Find Your Next <br />
            <span className="text-brand">Game.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Connect with local players, join pickup games, and discover new sports partners in your area. Stop waiting, start playing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/register"
              className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-brand text-white font-semibold hover:bg-brand-hover transition-all duration-200 shadow-[0_0_40px_-10px_var(--brand)] hover:shadow-[0_0_60px_-15px_var(--brand)] hover:-translate-y-1"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all duration-200"
            >
              Browse Matches
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-4xl text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-transform hover:-translate-y-1 duration-300 hover:bg-white/10">
              <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Local Discovery</h3>
              <p className="text-slate-400">Find matches happening right in your neighborhood using our geolocation matching.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-transform hover:-translate-y-1 duration-300 hover:bg-white/10">
              <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Skill-based Matching</h3>
              <p className="text-slate-400">Play with people at your level. From beginners to pros, find the perfect match.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-transform hover:-translate-y-1 duration-300 hover:bg-white/10">
              <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-4">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Real-time Status</h3>
              <p className="text-slate-400">Broadcast your availability instantly. See who is ready to play right now.</p>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}
