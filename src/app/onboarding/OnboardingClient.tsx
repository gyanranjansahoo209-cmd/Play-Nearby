"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Trophy, MapPin, User, Activity } from "lucide-react";
import { useRouter } from "next/navigation";

const SPORTS = [
  "Tennis", "Basketball", "Football", "Badminton", 
  "Chess", "Table Tennis", "Volleyball", "Running"
];

const SKILL_LEVELS = ["Beginner", "Intermediate", "Advanced", "Pro"];

export default function OnboardingClient() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    displayName: "",
    bio: "",
    interests: [] as string[],
    skillLevel: 0, // 0 to 3
    radius: 5,
  });

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleComplete = () => {
    const finalData = {
      ...formData,
      skillLevel: SKILL_LEVELS[formData.skillLevel]
    };
    console.log("Profile Completed:", finalData);
    // In a real app, send to database here
    router.push("/dashboard");
  };

  const toggleInterest = (sport: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(sport)
        ? prev.interests.filter(i => i !== sport)
        : [...prev.interests, sport]
    }));
  };

  const isStepValid = () => {
    if (step === 1) return formData.displayName.trim().length > 2;
    if (step === 2) return formData.interests.length > 0;
    return true;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4 sm:px-6">
      {/* Header & Progress */}
      <div className="w-full max-w-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-foreground">Setup Profile</h1>
          <span className="text-sm text-slate-400 font-medium">Step {step} of {totalSteps}</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand"
            initial={{ width: `${(1 / totalSteps) * 100}%` }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Form Area */}
      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 relative overflow-hidden min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait" custom={1}>
          
          {/* STEP 1: Profile */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6 text-brand">
                <div className="p-2 bg-brand/20 rounded-xl"><User size={24} /></div>
                <h2 className="text-xl font-semibold text-foreground">Who are you?</h2>
              </div>
              
              <div className="space-y-5 flex-1">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Display Name</label>
                  <input 
                    type="text" 
                    value={formData.displayName}
                    onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Short Bio (Optional)</label>
                  <textarea 
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    placeholder="Tell others a bit about your play style..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Interests */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6 text-brand">
                <div className="p-2 bg-brand/20 rounded-xl"><Activity size={24} /></div>
                <h2 className="text-xl font-semibold text-foreground">What do you play?</h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {SPORTS.map(sport => {
                  const isSelected = formData.interests.includes(sport);
                  return (
                    <button
                      key={sport}
                      onClick={() => toggleInterest(sport)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                        ${isSelected 
                          ? 'bg-brand border-brand text-white shadow-[0_0_15px_-3px_var(--brand)]' 
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                        }
                      `}
                    >
                      {sport}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-sm text-slate-400">Select at least one sport to continue.</p>
            </motion.div>
          )}

          {/* STEP 3: Skill Level */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6 text-brand">
                <div className="p-2 bg-brand/20 rounded-xl"><Trophy size={24} /></div>
                <h2 className="text-xl font-semibold text-foreground">What's your skill level?</h2>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-brand mb-2">{SKILL_LEVELS[formData.skillLevel]}</h3>
                  <p className="text-slate-400">Be honest so we can match you perfectly.</p>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="3" 
                  step="1"
                  value={formData.skillLevel}
                  onChange={(e) => setFormData({...formData, skillLevel: parseInt(e.target.value)})}
                  className="w-full accent-brand bg-white/10 h-2 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-4 text-xs font-medium text-slate-500">
                  <span>Beginner</span>
                  <span>Pro</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Location Radius */}
          {step === 4 && (
            <motion.div
              key="step4"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6 text-brand">
                <div className="p-2 bg-brand/20 rounded-xl"><MapPin size={24} /></div>
                <h2 className="text-xl font-semibold text-foreground">Discovery Radius</h2>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-brand mb-2">{formData.radius} <span className="text-xl">miles</span></h3>
                  <p className="text-slate-400">How far are you willing to travel for a game?</p>
                </div>
                
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  step="1"
                  value={formData.radius}
                  onChange={(e) => setFormData({...formData, radius: parseInt(e.target.value)})}
                  className="w-full accent-brand bg-white/10 h-2 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-4 text-xs font-medium text-slate-500">
                  <span>1 mile</span>
                  <span>50 miles</span>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center z-10 bg-inherit">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-300 font-medium hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={18} /> Back
          </button>
          
          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center gap-2 px-6 py-2 rounded-xl bg-brand text-white font-medium hover:bg-brand-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <ArrowRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleComplete}
              className="flex items-center gap-2 px-6 py-2 rounded-xl bg-brand text-white font-medium hover:bg-brand-hover transition-all duration-200 shadow-[0_0_20px_-5px_var(--brand)]"
            >
              Complete <Check size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
