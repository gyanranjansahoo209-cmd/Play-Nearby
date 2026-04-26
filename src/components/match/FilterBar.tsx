'use client';

import { Filter, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FilterBar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') || '');

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (search) params.set('query', search);
      else params.delete('query');
      router.push(`?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, router, searchParams]);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 rounded-2xl backdrop-blur-md">
        <div className="flex-1 flex items-center gap-3 px-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search sports, locations, or players..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-gray-500 py-2 outline-none"
          />
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`p-3 rounded-xl transition-all ${isFilterOpen ? 'bg-brand text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
        >
          <Filter className="w-5 h-5" />
        </button>
      </div>

      {/* Expandable Filters */}
      <motion.div
        initial={false}
        animate={{ height: isFilterOpen ? 'auto' : 0, opacity: isFilterOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Game Category */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Game Category</h4>
            <div className="flex flex-wrap gap-2">
              {['Indoor', 'Outdoor', 'Racquet', 'Board', 'Team'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => updateFilter('category', cat)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${searchParams.get('category') === cat ? 'bg-brand text-white' : 'bg-white/5 border border-white/10 text-gray-300 hover:border-brand/50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Level */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Skill Level</h4>
            <div className="flex flex-wrap gap-2">
              {['Beginner', 'Intermediate', 'Advanced', 'Pro'].map(skill => (
                <button 
                  key={skill} 
                  onClick={() => updateFilter('skill', skill)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${searchParams.get('skill') === skill ? 'bg-brand text-white' : 'bg-white/5 border border-white/10 text-gray-300 hover:border-brand/50'}`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Availability</h4>
            <div className="flex flex-wrap gap-2">
              {['Morning', 'Afternoon', 'Evening', 'Weekends'].map(time => (
                <button 
                  key={time} 
                  className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-gray-300 hover:border-brand/50 transition-colors"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
