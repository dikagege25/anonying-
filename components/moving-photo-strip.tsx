"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export default function MovingPhotoStrip() {
  const loopedCards = [...blogPosts, ...blogPosts];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-[#1b1b25] via-[#181821] to-[#101015] p-[1px] shadow-lg shadow-yellow-500/30">
      <div className="relative rounded-3xl bg-[#050510]/95 px-5 py-5">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Terpopuler
            </p>
            <span className="text-[0.65rem] text-muted-foreground">
              Update terbaru
            </span>
          </div>

          <div className="mt-4 overflow-hidden">
            <div className="moving-card-track">
              {loopedCards.map((post, index) => (
                <Link
                  key={`${post.title}-${index}`}
                  href={post.href}
                  aria-label={`Buka halaman blog ${post.title}`}
                  className="card-glow group relative flex w-56 flex-shrink-0 flex-col gap-3 rounded-3xl border border-yellow-300/30 bg-gradient-to-br from-yellow-500/5 via-yellow-400/0 to-yellow-500/10 p-4 shadow-[0_0_24px_rgba(234,179,8,0.08)] transition hover:border-yellow-200/70 hover:from-yellow-400/15 hover:to-yellow-500/15"
                >
                  <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-300/10 via-transparent to-yellow-200/5 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative space-y-1">
                    <span className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-yellow-300">
                      {post.tag}
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      {post.title}
                    </h3>
                    <p className="text-[0.68rem] text-yellow-50/80">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="relative text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-yellow-200">
                    Baca →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Link
              href="/blog"
              className="rounded-full border border-yellow-300/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300 transition hover:border-yellow-200 hover:text-yellow-100"
            >
              Lihat Semua Blog
            </Link>
          </div>
        </div>

      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#101015] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#101015] to-transparent"
      />

      <style jsx>{`
        @keyframes slow-pan {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .moving-card-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: slow-pan 26s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
