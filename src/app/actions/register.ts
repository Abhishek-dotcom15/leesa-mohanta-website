"use server";

import { supabaseAdmin, supabaseAuth } from "@/lib/supabase";
import { z } from "zod";

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com","guerrillamail.com","tempmail.com","yopmail.com",
  "throwaway.email","temp-mail.org","fakeinbox.com","trashmail.com",
  "dispostable.com","mailnesia.com","maildrop.cc","discard.email",
  "sharklasers.com","grr.la","spam4.me","bigstring.com",
  "trashmail.at","trashmail.io","trashmail.me","trashmail.net",
  "trashmail.xyz","throwam.com","fakeemail.net","tempinbox.com",
  "mailnull.com","spamgourmet.com","binkmail.com","bob.email",
  "getairmail.com","filzmail.com","spamgourmet.net","spamgourmet.org",
  "10minutemail.com","10minutemail.net","guerrillamail.info",
  "guerrillamail.biz","guerrillamail.de","guerrillamail.net",
  "guerrillamail.org","mintemail.com","mt2009.com","mt2014.com",
  "tempsky.com","tempr.email","jetable.fr.nf","tempemail.net",
]);

const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function registerUser(data: z.infer<typeof registerSchema>) {
  const validated = registerSchema.safeParse(data);

  if (!validated.success) {
    return { success: false, error: validated.error.issues[0]?.message || "Invalid input." };
  }

  const { email, password } = validated.data;
  const domain = email.split("@")[1]?.toLowerCase();

  if (!domain) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { success: false, error: "Disposable or temporary email addresses are not allowed. Please use a real email." };
  }

  try {
    // Determine the site URL — use env var so it works in both dev and production
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    // Use the anon client's signUp so we can pass emailRedirectTo.
    // This ensures the verification link in the email redirects back to our
    // /auth/verified page instead of whatever is set in the Supabase dashboard.
    const { data: signUpData, error } = await supabaseAuth.auth.signUp({
      email: email.toLowerCase(),
      password,
      options: {
        emailRedirectTo: `${siteUrl}/auth/verified`,
      },
    });

    if (error) {
      if (
        error.message.toLowerCase().includes("already registered") ||
        error.message.toLowerCase().includes("already exists") ||
        error.message.toLowerCase().includes("user already registered")
      ) {
        return { success: false, error: "An account with this email already exists." };
      }
      throw error;
    }

    // Supabase returns an empty `identities` array for already-registered emails
    // (it silently "succeeds" to prevent email enumeration, but we can detect it).
    if (
      signUpData.user &&
      signUpData.user.identities &&
      signUpData.user.identities.length === 0
    ) {
      return { success: false, error: "An account with this email already exists." };
    }

    return {
      success: true,
      needsVerification: true,
      message: `We've sent a verification link to ${email}. Please check your inbox and verify your email before logging in.`,
    };
  } catch (error: any) {
    console.error("Registration error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function resendVerificationEmail(email: string) {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const { error } = await supabaseAuth.auth.resend({
      type: "signup",
      email: email.toLowerCase(),
      options: {
        emailRedirectTo: `${siteUrl}/auth/verified`,
      },
    });
    if (error) throw error;
    return { success: true };
  } catch {
    return { success: false };
  }
}
