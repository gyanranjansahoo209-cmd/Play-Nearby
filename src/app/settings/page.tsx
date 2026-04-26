import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
import Navbar from '@/components/layout/Navbar';
import PasswordChangeForm from '@/components/settings/PasswordChangeForm';
import DarkModeToggle from '@/components/settings/DarkModeToggle';
import DeleteAccountButton from '@/components/settings/DeleteAccountButton';
import { Settings, Lock, Palette, Shield, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Settings — Play Nearby',
  description: 'Manage your account settings, appearance, and security preferences.',
};

export default async function SettingsPage() {
  const session = await getSession();
  if (!session) redirect('/login');

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { name: true, email: true, darkMode: true, createdAt: true },
  });

  if (!user) redirect('/login');

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">

        {/* Page Header */}
        <div>
          <Link
            href="/profile"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-4"
          >
            <ArrowLeft size={15} /> Back to Profile
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand/15 rounded-2xl text-brand">
              <Settings size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-[var(--muted)] text-sm mt-0.5">Manage your account and preferences</p>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <section className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-md overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--border)]">
            <div className="p-1.5 bg-brand/15 rounded-lg text-brand"><User size={16} /></div>
            <h2 className="font-semibold">Account</h2>
          </div>
          <div className="px-6 py-5 space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--muted)]">Name</span>
              <span className="text-sm font-medium">{user.name}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--muted)]">Email</span>
              <span className="text-sm font-medium">{user.email}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[var(--muted)]">Member since</span>
              <span className="text-sm font-medium">
                {new Date(user.createdAt).toLocaleDateString('en-US', {
                  month: 'long', year: 'numeric'
                })}
              </span>
            </div>
            <div className="pt-2">
              <Link
                href="/profile/edit"
                className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand-hover font-medium transition-colors"
              >
                Edit profile info →
              </Link>
            </div>
          </div>
        </section>

        {/* Appearance */}
        <section className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-md overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--border)]">
            <div className="p-1.5 bg-indigo-500/15 rounded-lg text-indigo-400"><Palette size={16} /></div>
            <h2 className="font-semibold">Appearance</h2>
          </div>
          <div className="px-6 py-5">
            <DarkModeToggle initialDarkMode={user.darkMode} />
          </div>
        </section>

        {/* Security */}
        <section className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-md overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--border)]">
            <div className="p-1.5 bg-green-500/15 rounded-lg text-green-400"><Lock size={16} /></div>
            <h2 className="font-semibold">Security</h2>
          </div>
          <div className="px-6 py-5">
            <PasswordChangeForm />
          </div>
        </section>

        {/* Danger Zone */}
        <section className="rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-md overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-red-500/20">
            <div className="p-1.5 bg-red-500/15 rounded-lg text-red-400"><Shield size={16} /></div>
            <h2 className="font-semibold text-red-400">Danger Zone</h2>
          </div>
          <div className="px-6 py-5 space-y-3">
            <p className="text-sm text-[var(--muted)]">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <DeleteAccountButton />
          </div>
        </section>

      </main>
    </div>
  );
}
