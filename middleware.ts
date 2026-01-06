import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/portal/') && !pathname.includes('/login')) {
    const sessionToken = request.cookies.get('auth-token')?.value;
    if (!sessionToken) {
      return NextResponse.redirect(new URL('/portal/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/portal/:path*',
};
