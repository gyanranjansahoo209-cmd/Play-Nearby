'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';

interface WelcomeAnimationProps {
  onComplete?: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export default function WelcomeAnimation({ 
  onComplete, 
  autoClose = true,
  autoCloseDelay = 4000 
}: WelcomeAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!autoClose) return;
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, autoCloseDelay);

    return () => clearTimeout(timer);
  }, [autoClose, autoCloseDelay, onComplete]);

  const handleClose = () => {
    setIsVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div className="relative w-full max-w-lg">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-blue-600/20 blur-2xl rounded-3xl" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-brand/20">
                
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} className="text-slate-400 hover:text-white" />
                </motion.button>

                {/* Location Icon with animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex justify-center mb-6"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-brand/40 blur-xl rounded-full w-20 h-20 animate-pulse" />
                    <div className="relative bg-gradient-to-br from-brand to-blue-600 p-5 rounded-2xl shadow-lg shadow-brand/30">
                      <MapPin size={40} className="text-white" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center mb-4"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <span>Welcome to </span>
                    <span className="bg-gradient-to-r from-brand via-blue-400 to-brand bg-clip-text text-transparent">
                      Play Nearby
                    </span>
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center text-slate-400 mb-8 text-lg"
                >
                  Find local sports partners and join exciting games in your area
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-3 mb-8"
                >
                  {[
                    '🎯 Find matches near you',
                    '👥 Connect with local players',
                    '⚡ Join games instantly'
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <button
                    onClick={handleClose}
                    className="flex-1 py-3 px-6 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold transition-all duration-200 shadow-lg shadow-brand/20 hover:shadow-brand/40 active:scale-95"
                  >
                    Let&apos;s Go
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white font-semibold transition-all duration-200"
                  >
                    Learn More
                  </button>
                </motion.div>

                {/* Skip text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-center text-sm text-slate-500 mt-6"
                >
                  This popup will close automatically in a few seconds
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
