// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === '/login' || pathname === '/register';
  const isVerifyPage = pathname === '/verify';
  const isDashboardPage = pathname.startsWith('/dashboard');
//1. when user is authenticated and tries to access auth pages, redirect to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  //2. when user is not authenticated and tries to access protected pages, redirect to register

  if (!token && (isDashboardPage || isVerifyPage)) {
    return NextResponse.redirect(new URL('/register', request.url));
  }


  return NextResponse.next();
}

export const config = {

  matcher: ['/dashboard/:path*', '/login', '/register', '/verify'],
};