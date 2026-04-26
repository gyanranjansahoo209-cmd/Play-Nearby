'use client';

import { useState } from 'react';
import { Plus, X, Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { postGame } from '@/app/actions/match';
import { Sport } from '@/types/schema';

interface CreateMatchModalProps {
  sports: Sport[];
}

export default function CreateMatchModal({ sports }: CreateMatchModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title') as string,
      sportId: formData.get('sportId') as string,
      scheduledTime: new Date(formData.get('date') as string),
      venueName: formData.get('venueName') as string,
      venueType: formData.get('venueType') as string,
      maxPlayers: parseInt(formData.get('maxPlayers') as string),
      latitude: 37.7749, // Mocking location for now
      longitude: -122.4194,
      address: formData.get('venueName') as string, // Simplification
    };

    try {
      const result = await postGame(data);
      if (result.success) {
        setIsOpen(false);
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert('Failed to post game');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-[0_0_20px_-5px_var(--brand)] hover:scale-105 duration-200"
      >
        <Plus size={18} />
        <span>Post a Game</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-blue-500" />
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Post New Game</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/5 text-slate-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Game Title</label>
                  <div className="relative">
                    <Trophy className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                    <input 
                      required
                      name="title"
                      placeholder="e.g., Casual Saturday Badminton"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Sport</label>
                    <select 
                      required
                      name="sportId"
                      className="w-full bg-slate-800 border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-brand outline-none transition-all"
                    >
                      {sports.map(sport => (
                        <option key={sport.id} value={sport.id}>{sport.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Max Players</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                      <input 
                        required
                        type="number"
                        name="maxPlayers"
                        defaultValue={2}
                        min={2}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-brand outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Date & Time</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                      <input 
                        required
                        type="datetime-local"
                        name="date"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-brand outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Venue Type</label>
                    <select 
                      name="venueType"
                      className="w-full bg-slate-800 border border-white/10 rounded-xl py-2.5 px-4 text-white focus:ring-2 focus:ring-brand outline-none transition-all"
                    >
                      <option value="Society clubhouse">Society Clubhouse</option>
                      <option value="Local ground">Local Ground</option>
                      <option value="Home">Private/Home</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Venue Name / Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                    <input 
                      required
                      name="venueName"
                      placeholder="e.g., Central Park Courts"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-brand outline-none transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand hover:bg-brand-hover text-white py-4 rounded-xl font-bold shadow-[0_0_30px_-5px_var(--brand)] transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    'Post Game'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
