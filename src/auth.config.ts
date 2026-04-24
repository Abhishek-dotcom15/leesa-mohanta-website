import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtected = nextUrl.pathname.startsWith('/journal') || nextUrl.pathname.startsWith('/resources/view');
      
      if (isProtected) {
        if (isLoggedIn) return true;
        return false; // Redirect to unauthenticated page (/login)
      } else if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/journal', nextUrl));
      }
      return true;
    },
  },
  secret: process.env.AUTH_SECRET || "secret123456789012345678901234567890",
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
