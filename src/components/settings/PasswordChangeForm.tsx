'use client';

import { useState, useTransition } from 'react';
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import { changePasswordAction } from '@/app/actions/user';

export default function PasswordChangeForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await changePasswordAction(formData);
      setResult(res ?? { success: true });
      if (res?.success) {
        (e.target as HTMLFormElement).reset();
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Current Password */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[var(--muted)]">Current Password</label>
        <div className="relative">
          <input
            type={showCurrent ? 'text' : 'password'}
            name="currentPassword"
            required
            placeholder="Enter current password"
            className="w-full px-4 py-3 pr-11 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-brand transition-colors text-sm"
          />
          <button
            type="button"
            onClick={() => setShowCurrent(s => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[var(--muted)]">New Password</label>
        <div className="relative">
          <input
            type={showNew ? 'text' : 'password'}
            name="newPassword"
            required
            minLength={8}
            placeholder="Min. 8 characters"
            className="w-full px-4 py-3 pr-11 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-brand transition-colors text-sm"
          />
          <button
            type="button"
            onClick={() => setShowNew(s => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[var(--muted)]">Confirm New Password</label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            name="confirmPassword"
            required
            placeholder="Repeat new password"
            className="w-full px-4 py-3 pr-11 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-brand transition-colors text-sm"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(s => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Feedback */}
      {result && (
        <div className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
          result.success
            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
            : 'bg-red-500/10 border border-red-500/20 text-red-400'
        }`}>
          {result.success ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {result.success ? 'Password changed successfully!' : result.error}
        </div>
      )}

      <button
        id="change-password-btn"
        type="submit"
        disabled={pending}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold transition-colors disabled:opacity-60"
      >
        <Lock size={15} />
        {pending ? 'Saving...' : 'Change Password'}
      </button>
    </form>
  );
}
