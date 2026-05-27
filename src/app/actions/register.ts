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
    const { data: newUser, error } = await supabaseAdmin.auth.admin.createUser({
      email: email.toLowerCase(),
      password,
      email_confirm: false, // Supabase sends a verification email
    });

    if (error) {
      if (error.message.toLowerCase().includes("already registered") ||
          error.message.toLowerCase().includes("already exists") ||
          error.message.toLowerCase().includes("already been registered")) {
        return { success: false, error: "An account with this email already exists." };
      }
      throw error;
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
    const { error } = await supabaseAuth.auth.resend({
      type: "signup",
      email: email.toLowerCase(),
    });
    if (error) throw error;
    return { success: true };
  } catch {
    return { success: false };
  }
}
