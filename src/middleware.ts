import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/lib/auth';

// 1. Specify public routes. Everything else is protected.
const publicRoutes = ['/login', '/register'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = req.cookies.get('session')?.value;
  const session = cookie ? await decrypt(cookie).catch(() => null) : null;

  console.log(`[Middleware Log] Path: ${path}, Public: ${isPublicRoute}, Session: ${!!session}`);

  // 2. Always open auth first on the root path.
  if (path === '/') {
    return session
      ? NextResponse.redirect(new URL('/dashboard', req.nextUrl))
      : NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // 4. Redirect to /login if the user is not authenticated and it's NOT a public route
  if (!isPublicRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated and trying to access a public route (like login)
  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
