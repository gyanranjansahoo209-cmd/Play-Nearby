import Link from 'next/link';
import Image from 'next/image';
import { Activity, User as UserIcon } from 'lucide-react';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { logoutAction } from '@/app/actions/auth';
import NotificationBell from './NotificationBell';

export default async function Navbar() {
  const session = await getSession();
  
  let userProfile = null;
  if (session?.user?.id) {
    userProfile = await db.user.findUnique({
      where: { id: session.user.id },
      select: { profileImageUrl: true }
    });
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform duration-300">
            <img src="/logo_generated.png" alt="Play Nearby Logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">Play Nearby</span>
        </Link>
        
        <div className="flex items-center gap-5">
          {session ? (
            <>
              <form action={logoutAction} className="flex items-center">
                <button
                  type="submit"
                  id="sign-out-btn"
                  className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  Sign Out
                </button>
              </form>
              
              <div className="h-4 w-px bg-[var(--border)]" />

              {/* Live notification bell */}
              <NotificationBell />

              {/* Profile + Settings */}
              <div className="flex items-center gap-2">
                <Link
                  href="/profile"
                  id="profile-link"
                  className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white/10 text-[var(--muted)] hover:bg-white/20 hover:text-[var(--foreground)] transition-colors"
                  title={session.user.name}
                >
                  {userProfile?.profileImageUrl ? (
                    <Image src={userProfile.profileImageUrl} alt="Profile" width={32} height={32} className="h-full w-full object-cover" />
                  ) : (
                    <UserIcon size={18} />
                  )}
                </Link>
              </div>
            </>
          ) : (
            <Link
              href="/login"
              className="px-4 py-1.5 rounded-lg bg-brand text-white text-xs font-bold hover:bg-brand-hover transition-all shadow-lg shadow-brand/20"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
