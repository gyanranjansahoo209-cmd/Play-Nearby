'use client';

import { useState, useTransition } from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';
import { deleteAccountAction } from '@/app/actions/user';

export default function DeleteAccountButton() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const CONFIRM_PHRASE = 'DELETE MY ACCOUNT';

  function handleDelete() {
    startTransition(async () => {
      const result = await deleteAccountAction();
      if (result?.error) setError(result.error);
    });
  }

  if (!showConfirm) {
    return (
      <button
        id="delete-account-btn"
        onClick={() => setShowConfirm(true)}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 text-sm font-semibold transition-all"
      >
        <Trash2 size={15} />
        Delete My Account
      </button>
    );
  }

  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-red-500/20 rounded-xl text-red-400 shrink-0">
          <AlertTriangle size={18} />
        </div>
        <div>
          <p className="font-semibold text-red-400 text-sm">This action is permanent and cannot be undone.</p>
          <p className="text-xs text-[var(--muted)] mt-1">
            All your data — profile, matches, play requests — will be permanently deleted.
          </p>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-[var(--muted)]">
          Type <span className="font-mono font-bold text-red-400">{CONFIRM_PHRASE}</span> to confirm
        </label>
        <input
          type="text"
          value={confirmText}
          onChange={e => setConfirmText(e.target.value)}
          placeholder={CONFIRM_PHRASE}
          className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-red-500/30 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-red-500 transition-colors text-sm font-mono"
        />
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <div className="flex gap-3">
        <button
          id="confirm-delete-btn"
          disabled={confirmText !== CONFIRM_PHRASE || pending}
          onClick={handleDelete}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Trash2 size={15} />
          {pending ? 'Deleting...' : 'Permanently Delete'}
        </button>
        <button
          onClick={() => { setShowConfirm(false); setConfirmText(''); setError(null); }}
          className="px-5 py-2.5 rounded-xl border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5 text-sm font-medium transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
