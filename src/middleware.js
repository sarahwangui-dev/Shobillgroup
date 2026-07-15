import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { verifyAccessToken } from './app/(auth)/actions';

const portalRoutes = [
  '/dashboard',
  '/admin/',
  '/admin/properties',
  '/admin/property-owners'
];

export function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('shobill-access');
  const path = request.nextUrl.pathname;
  const isAuthorized = !!token && verifyAccessToken(token['value']);
  const isPortalRoute = portalRoutes.includes(path);

  if (!isAuthorized && isPortalRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
