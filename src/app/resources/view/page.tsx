"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, Lock, ShieldAlert } from "lucide-react";
import Link from "next/link";

function ViewerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filePath = searchParams.get("file");
  const [isPdf, setIsPdf] = useState(false);
  const [isUnsupported, setIsUnsupported] = useState(false);

  useEffect(() => {
    if (!filePath) {
      router.push("/resources");
      return;
    }

    const extension = filePath.split('.').pop()?.toLowerCase();
    if (extension === "pdf") {
      setIsPdf(true);
    } else if (["ppt", "pptx", "doc", "docx"].includes(extension || "")) {
      setIsUnsupported(true);
    }
  }, [filePath, router]);

  if (!filePath) return null;

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-white overflow-hidden">
      {/* Header */}
      <header className="flex-none flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0a]">
        <div className="flex items-center gap-4">
          <Link href="/resources" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-5 h-5 text-white/70" />
          </Link>
          <div>
            <h1 className="font-display text-sm tracking-wider uppercase text-white/90">
              Secure Document Viewer
            </h1>
            <p className="font-body text-xs text-white/50 mt-1 truncate max-w-xs md:max-w-md">
              {filePath.split('/').pop()}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff4d33]/10 border border-[#ff4d33]/20">
          <Lock className="w-3.5 h-3.5 text-[#ff4d33]" />
          <span className="text-[10px] uppercase tracking-wider font-franklin text-[#ff4d33]">Protected</span>
        </div>
      </header>

      {/* Viewer Area */}
      <main className="flex-1 relative w-full h-full bg-[#111] overflow-hidden flex items-center justify-center">
        {isPdf ? (
          <div className="relative w-full h-full">
            {/* Overlay to prevent right click / interaction with the iframe wrapper */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" 
              onContextMenu={(e) => e.preventDefault()}
            ></div>
            <iframe
              src={`/resources/${filePath}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full border-none"
              title="Secure PDF Viewer"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ) : isUnsupported ? (
          <div className="max-w-md p-8 text-center bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl">
            <ShieldAlert className="w-12 h-12 text-[#ff4d33] mx-auto mb-4" />
            <h2 className="font-cormorant text-3xl mb-3">Format Not Supported</h2>
            <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              For security reasons, we do not allow native downloading of PowerPoint or Word documents. 
              Native browsers cannot preview these formats securely without exposing the source file.
            </p>
            <p className="text-[#ff4d33]/80 font-medium text-xs uppercase tracking-widest p-4 bg-[#ff4d33]/10 rounded-lg">
              Please ask the administrator to upload a PDF version of this document.
            </p>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={`/resources/${filePath}`} 
              alt="Secure Image Preview" 
              className="max-w-full max-h-full object-contain select-none pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default function SecureViewerPage() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-white font-display">Loading Secure Viewer...</div>}>
      <ViewerContent />
    </Suspense>
  );
}
