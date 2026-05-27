"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

// Inner component that uses useSearchParams — must be inside <Suspense>
function VerifiedContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const errorParam = searchParams.get("error");
    const errorDesc = searchParams.get("error_description");

    if (errorParam) {
      setStatus("error");
      setMessage(
        errorDesc
          ? decodeURIComponent(errorDesc.replace(/\+/g, " "))
          : "Email verification failed. The link may have expired — please request a new one."
      );
      return;
    }

    // Check hash fragment (implicit flow: #access_token=...&type=signup)
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const hashParams = new URLSearchParams(hash.replace(/^#/, ""));
    const hashError = hashParams.get("error");
    const hashErrorDesc = hashParams.get("error_description");

    if (hashError) {
      setStatus("error");
      setMessage(
        hashErrorDesc
          ? decodeURIComponent(hashErrorDesc.replace(/\+/g, " "))
          : "Email verification failed. The link may have expired."
      );
      return;
    }

    // Success — either hash type=signup or just a clean landing after verification
    setStatus("success");
    setMessage("Your email has been verified successfully!");
    const timer = setTimeout(() => {
      router.push("/login?verified=true");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router, searchParams]);

  return (
    <div className="relative z-10 w-full max-w-[420px] px-6 py-12 mx-auto text-center">
      <Link
        href="/"
        className="inline-block font-display text-[22px] text-white tracking-[0.2em] hover:text-[#c8a030] transition-colors duration-300 mb-10"
      >
        LEESA MOHANTY
      </Link>

      <div className="bg-[#0d0803]/90 backdrop-blur-2xl border border-white/10 rounded-[24px] p-10 shadow-2xl">
        {status === "loading" && (
          <>
            <Loader2 className="w-12 h-12 text-[#c8a030] mx-auto mb-5 animate-spin" />
            <h2 className="font-cormorant text-[30px] text-white mb-2">Verifying…</h2>
            <p className="text-white/50 text-[13px] font-light">Please wait a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle2 className="w-14 h-14 text-[#c8a030] mx-auto mb-5" />
            <h2 className="font-cormorant text-[32px] text-white mb-3">Email Verified!</h2>
            <p className="text-white/50 text-[13px] font-light leading-relaxed mb-6">
              {message}
              <br />
              <span className="text-white/30">Redirecting you to sign in…</span>
            </p>
            <Link
              href="/login?verified=true"
              className="inline-flex items-center justify-center gap-2 bg-[#c8a030] text-white py-3 px-8 rounded-xl text-sm font-medium hover:bg-[#c89830] transition-all w-full"
            >
              Sign In Now
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <XCircle className="w-14 h-14 text-red-400 mx-auto mb-5" />
            <h2 className="font-cormorant text-[32px] text-white mb-3">Verification Failed</h2>
            <p className="text-white/50 text-[13px] font-light leading-relaxed mb-6">
              {message}
            </p>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 bg-[#c8a030] text-white py-3 px-8 rounded-xl text-sm font-medium hover:bg-[#c89830] transition-all w-full"
            >
              Back to Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// Outer page — wraps inner in Suspense (required by Next.js for useSearchParams)
export default function EmailVerifiedPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden font-body text-white">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[0%] left-[-10%] w-[600px] h-[600px] bg-[#c8a030]/10 rounded-full blur-[150px] animate-pulse mix-blend-screen"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#c8a030]/5 rounded-full blur-[150px] animate-pulse mix-blend-screen"
          style={{ animationDuration: "15s" }}
        />
      </div>

      <Suspense
        fallback={
          <div className="relative z-10 flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 text-[#c8a030] animate-spin" />
            <p className="text-white/40 text-sm">Verifying your email…</p>
          </div>
        }
      >
        <VerifiedContent />
      </Suspense>
    </main>
  );
}
