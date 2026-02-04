// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
// git token from cookies because the middleware not read the local storage
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;
// select the paths which need authentication
  const isAuthPage = pathname === '/login' || pathname === '/register';
  const isDashboardPage = pathname.startsWith('/dashboard');

  // when user is logged in and tries to access login or register page
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
// when user is not logged in and tries to access dashboard page
  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL('/register', request.url));
  }

  return NextResponse.next();
}
// specify the paths where the middleware should run

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};