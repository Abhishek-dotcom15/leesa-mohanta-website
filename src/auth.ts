import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { supabaseAuth, supabaseAdmin } from './lib/supabase';
import { z } from 'zod';

const providers: any[] = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      const parsed = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(credentials);

      if (!parsed.success) return null;

      const { email, password } = parsed.data;

      const { data, error } = await supabaseAuth.auth.signInWithPassword({
        email: email.toLowerCase(),
        password,
      });

      if (error) {
        // Surface email-not-confirmed as a specific signal the UI can detect
        if (error.message === 'Email not confirmed') {
          throw new Error('EmailNotConfirmed');
        }
        return null;
      }

      return {
        id: data.user.id,
        email: data.user.email ?? null,
        name: data.user.user_metadata?.name ?? null,
      };
    }
  }),
];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers,
  callbacks: {
    // Preserve the middleware's authorized callback from authConfig
    authorized: authConfig.callbacks.authorized,

    // Sync Google sign-ins into Supabase so they appear in the dashboard
    async signIn({ user, account }) {
      if (account?.provider === 'google' && user.email) {
        await supabaseAdmin.auth.admin.createUser({
          email: user.email,
          email_confirm: true,
          user_metadata: {
            name: user.name,
            avatar_url: user.image,
            provider: 'google',
          },
        }).catch(() => {
          // User likely already exists — update last_sign_in instead
          supabaseAdmin.auth.admin
            .listUsers()
            .then(({ data }) => {
              const existing = data.users.find(u => u.email === user.email);
              if (existing) {
                // Supabase updates last_sign_in_at automatically on signInWithPassword,
                // but for OAuth we record it manually via user metadata update
                supabaseAdmin.auth.admin.updateUserById(existing.id, {
                  user_metadata: { last_google_login: new Date().toISOString() },
                });
              }
            });
        });
      }
      return true;
    },
  },
});
