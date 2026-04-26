'use client';

import { useState, useTransition } from 'react';
import { registerAction } from '@/app/actions/auth';
import Link from 'next/link';
import { Activity, Mail, Lock, User, ArrowRight, AlertCircle, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import WelcomeAnimation from '@/components/WelcomeAnimation';

export default function RegisterPage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await registerAction(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <>
      <WelcomeAnimation 
        onComplete={() => setShowWelcome(false)}
        autoClose={true}
        autoCloseDelay={5000}
      />
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <Link href="/" className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand to-blue-600 flex items-center justify-center shadow-xl shadow-brand/20 mb-6 active:scale-95 transition-transform">
            <Activity size={32} className="text-white" />
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-400">Join the largest local sports community</p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-400 mb-2 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand transition-colors" />
                <input 
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-400 mb-2 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand transition-colors" />
                <input 
                  required
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-400 mb-2 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand transition-colors" />
                <input 
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium"
              >
                <AlertCircle size={18} />
                {error}
              </motion.div>
            )}

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-500 leading-normal">
                By registering, you agree to our Terms of Service and Privacy Policy. Your data is encrypted and protected.
              </p>
            </div>

            <button 
              type="submit"
              disabled={isPending}
              className="w-full bg-brand hover:bg-brand-hover text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brand/20 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              {isPending ? (
                <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Create Account <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-slate-500 text-sm">
              Already have an account? <Link href="/login" className="text-brand font-bold hover:text-brand-hover">Sign In</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
}
