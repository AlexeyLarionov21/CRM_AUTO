import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const nonce = Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('base64');

  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: http:;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob:;
    font-src 'self' data:;
    connect-src 'self' https://api.your-backend.tld ws:;
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim();

  const res = NextResponse.next();
  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('x-nonce', nonce);
  return res;
}
