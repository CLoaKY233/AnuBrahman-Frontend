import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COMING_SOON_PATHS = ['/newsletter', '/team', '/about'];

// CHANGED: Function name is now 'proxy'
export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (
    req.method === 'GET' &&
    COMING_SOON_PATHS.some(
      (path) => url.pathname === path || url.pathname.startsWith(`${path}/`)
    ) &&
    url.pathname !== '/coming-soon'
  ) {
    url.pathname = '/coming-soon';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
