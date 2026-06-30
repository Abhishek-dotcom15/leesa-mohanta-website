import React, { useState, useEffect } from "react";
import { MessageSquare, Send, Clock } from "lucide-react";

export interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

interface CommentSectionProps {
  journalId: string;
  defaultComments?: Comment[];
}

export default function CommentSection({ journalId, defaultComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem(`comments-${journalId}`);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        setComments(defaultComments || []);
      }
    } else {
      setComments(defaultComments || []);
    }
  }, [journalId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`comments-${journalId}`, JSON.stringify(updated));
    setName("");
    setText("");
  };

  if (!isMounted) return null;

  return (
    <div className="mt-16 border-t border-[#3a2010]/60 pt-12 max-w-4xl mx-auto font-body text-white relative z-20">
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-5 h-5 text-[#c8a030]" />
        <h4 className="font-display text-lg md:text-xl tracking-wider text-white">
          Thoughts &amp; Reflections ({comments.length})
        </h4>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-10 bg-[#1e1208]/40 border border-[#3a2010] p-6 rounded-sm">
        <h5 className="font-display text-xs tracking-widest text-[#c8a030] uppercase mb-2">
          Leave a comment
        </h5>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-[#1e1208] border border-[#3a2010] focus:border-[#c8a030]/50 focus:ring-1 focus:ring-[#c8a030]/50 outline-none text-white px-4 py-3 placeholder-white/20 text-sm font-light transition-all rounded-sm"
            />
          </div>
          <div>
            <textarea
              required
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts on this writing..."
              className="w-full bg-[#1e1208] border border-[#3a2010] focus:border-[#c8a030]/50 focus:ring-1 focus:ring-[#c8a030]/50 outline-none text-white px-4 py-3 placeholder-white/20 text-sm font-light transition-all rounded-sm resize-none"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 border border-[#c8a030] text-[#c8a030] hover:bg-[#c8a030] hover:text-[#110a04] px-6 py-2.5 transition-all duration-300 font-franklin text-xs tracking-wider uppercase rounded-sm cursor-pointer"
          >
            <span>Post Comment</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-white/40 font-cormorant italic text-base">
            No comments yet. Be the first to share your thoughts.
          </p>
        ) : (
          comments.map((comment) => {
            const initials = comment.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);
            return (
              <div
                key={comment.id}
                className="flex gap-4 p-5 bg-[#1e1208]/20 border border-[#3a2010]/30 rounded-sm animate-fade-in"
              >
                {/* Initials Avatar */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c8a030]/10 border border-[#c8a030]/30 flex items-center justify-center">
                  <span className="text-[#c8a030] text-xs font-semibold uppercase">
                    {initials || "?"}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-grow space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-white font-medium text-sm">{comment.name}</span>
                    <span className="text-white/40 text-xs font-light flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#c8a030]" />
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-white/80 font-cormorant text-base md:text-lg leading-relaxed whitespace-pre-line font-light">
                    {comment.text}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
