"use client";

import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { Lock, Mail, ArrowRight, Eye, EyeOff, CheckCircle2, MailCheck, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { registerUser, resendVerificationEmail } from "@/app/actions/register";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [unconfirmedEmail, setUnconfirmedEmail] = useState("");
  const [resending, setResending] = useState(false);

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Load saved email on mount + show verified toast if redirected from /auth/verified
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
    if (searchParams.get("verified") === "true") {
      toast.success("Email verified! You can now sign in.", { duration: 5000 });
    }
  }, [searchParams]);

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    if (isLogin) {
      try {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false
        });

        if (result?.error) {
          // NextAuth wraps our thrown Error — check the code/error string
          if (result.error.includes("EmailNotConfirmed") || result.code === "EmailNotConfirmed") {
            setUnconfirmedEmail(email);
          } else {
            toast.error("Invalid email or password.");
          }
          setIsLoading(false);
        } else {
          toast.success("Welcome back! Redirecting...");
          setTimeout(() => {
            router.push("/journal");
            router.refresh();
          }, 800);
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
        setIsLoading(false);
      }
    } else {
      try {
        const result = await registerUser({ email, password });

        if (!result.success) {
          toast.error(result.error || "Registration failed.");
          setIsLoading(false);
        } else {
          // Email verification required — don't auto-login
          setVerificationSent(true);
          setIsLoading(false);
        }
      } catch {
        toast.error("Registration failed. Please try again.");
        setIsLoading(false);
      }
    }
  };

  const handleResendVerification = async (emailAddr: string) => {
    setResending(true);
    const result = await resendVerificationEmail(emailAddr);
    setResending(false);
    if (result.success) {
      toast.success("Verification email resent! Check your inbox.");
    } else {
      toast.error("Could not resend email. Please try again.");
    }
  };

  const handleSocialLogin = async (provider: "google") => {
    setIsLoading(true);
    await signIn(provider, { callbackUrl: "/journal" });
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden font-body text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[0%] left-[-10%] w-[600px] h-[600px] bg-[#c8a030]/10 rounded-full blur-[150px] animate-pulse mix-blend-screen" style={{ animationDuration: "10s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#c8a030]/5 rounded-full blur-[150px] animate-pulse mix-blend-screen" style={{ animationDuration: "15s" }}></div>
      </div>

      {/* Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 w-full max-w-[420px] px-6 py-12 mx-auto">

        {/* ── Email verification sent screen ── */}
        {verificationSent && (
          <div className="text-center animate-fade-in-up">
            <Link href="/" className="inline-block font-display text-[22px] text-white tracking-[0.2em] hover:text-[#c8a030] transition-colors duration-300 mb-8 block">
              LEESA MOHANTY
            </Link>
            <div className="bg-[#0d0803]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] p-8 shadow-2xl">
              <MailCheck className="w-12 h-12 text-[#c8a030] mx-auto mb-4" />
              <h2 className="font-cormorant text-[32px] text-white mb-3">Check Your Email</h2>
              <p className="text-white/50 text-[13px] font-light leading-relaxed mb-6">
                We sent a verification link to <span className="text-[#c8a030]">{email}</span>.<br />
                Click the link in your email to activate your account, then come back to sign in.
              </p>
              <button onClick={() => handleResendVerification(email)} disabled={resending}
                className="text-[11px] uppercase tracking-wider text-white/40 hover:text-white/70 transition-colors flex items-center gap-2 mx-auto disabled:opacity-50">
                <RefreshCw className={`w-3 h-3 ${resending ? "animate-spin" : ""}`} />
                {resending ? "Sending..." : "Resend verification email"}
              </button>
              <button onClick={() => { setVerificationSent(false); setIsLogin(true); }}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-[#c8a030] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#c89830] transition-all">
                Go to Sign In <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ── Email not confirmed banner ── */}
        {unconfirmedEmail && !verificationSent && (
          <div className="mb-6 animate-fade-in-up">
            <div className="bg-amber-900/30 border border-amber-500/30 rounded-2xl p-5 text-center">
              <MailCheck className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-amber-200 text-[13px] font-light leading-relaxed mb-3">
                Your email <span className="font-medium">{unconfirmedEmail}</span> hasn't been verified yet.
                Please check your inbox and click the verification link.
              </p>
              <button onClick={() => handleResendVerification(unconfirmedEmail)} disabled={resending}
                className="text-[11px] uppercase tracking-wider text-amber-400/70 hover:text-amber-300 transition-colors flex items-center gap-2 mx-auto disabled:opacity-50">
                <RefreshCw className={`w-3 h-3 ${resending ? "animate-spin" : ""}`} />
                {resending ? "Sending..." : "Resend verification email"}
              </button>
            </div>
          </div>
        )}

        {!verificationSent && (<>
        <div className="text-center mb-8 animate-fade-in-up">
          <Link href="/" className="inline-block font-display text-[22px] text-white tracking-[0.2em] hover:text-[#c8a030] transition-colors duration-300">
            LEESA MOHANTY
          </Link>
          <h1 className="mt-8 font-cormorant text-[42px] leading-none text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="mt-3 text-white/50 font-light tracking-wide text-[13px]">
            {isLogin
              ? "Enter your credentials to access exclusive content."
              : "Sign up to unlock journals and private resources."}
          </p>
        </div>

        <div className="bg-[#0d0803]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] p-8 shadow-2xl animate-scale-in relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
          
          {/* Progress loader bar */}
          {isLoading && (
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10">
              <div className="h-full bg-[#c8a030] animate-expand-line origin-left"></div>
            </div>
          )}

          {/* Toggle Tab */}
          <div className="flex bg-white/5 p-1 rounded-xl mb-8 border border-white/5">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all duration-300 ${
                isLogin ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/70"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all duration-300 ${
                !isLogin ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/70"
              }`}
            >
              Sign Up
            </button>
          </div>
          
          <form onSubmit={handleCredentialsSubmit} className="space-y-5">
            
            {/* Email */}
            <div className="space-y-2">
              <label className="text-[11px] font-franklin uppercase tracking-[0.15em] text-white/50 pl-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-white/30" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  placeholder="name@example.com"
                  className="w-full bg-[#1e1208] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c8a030]/50 focus:ring-1 focus:ring-[#c8a030]/50 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pl-1">
                <label className="text-[11px] font-franklin uppercase tracking-[0.15em] text-white/50">Password</label>
                {isLogin && (
                  <button type="button" className="text-[11px] font-medium text-[#c8a030] hover:text-[#ff6b52] transition-colors">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-white/30" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  placeholder="••••••••"
                  className="w-full bg-[#1e1208] border border-white/10 rounded-xl py-3.5 pl-11 pr-11 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c8a030]/50 focus:ring-1 focus:ring-[#c8a030]/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            {isLogin && (
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-all ${
                    rememberMe ? "bg-[#c8a030] border-[#c8a030]" : "bg-[#1e1208] border-white/20 hover:border-white/40"
                  }`}
                >
                  {rememberMe && <CheckCircle2 className="w-3 h-3 text-white" />}
                </button>
                <span className="text-[12px] text-white/60 cursor-pointer select-none" onClick={() => setRememberMe(!rememberMe)}>
                  Remember my email
                </span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex items-center justify-center gap-2 bg-[#c8a030] text-white py-3.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-[#c89830] hover:shadow-[0_0_20px_rgba(200,160,48,0.3)] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              <span>{isLogin ? "Sign In" : "Create Account"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink-0 mx-4 text-[10px] uppercase tracking-widest text-white/30 font-franklin">Or continue with</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* Social Buttons — Google only */}
          <button
            onClick={() => handleSocialLogin("google")}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-[#1e1208] border border-white/10 text-white py-3 px-4 rounded-xl text-sm transition-all duration-300 hover:border-white/25 hover:bg-[#281808] disabled:opacity-50"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span>Continue with Google</span>
          </button>

        </div>

        {/* Footer info */}
        <p className="mt-8 text-center text-[11px] text-white/30 font-light px-4">
          By continuing, you agree to our Terms of Service and Privacy Policy. Secure authentication provided.
        </p>
        </>)} {/* end !verificationSent */}
      </div>
    </main>
  );
}
