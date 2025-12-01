import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#101015] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-4 pb-12 pt-6">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-yellow-300/70 hover:bg-white/10"
            aria-label="Kembali ke halaman utama"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
        </div>

        <header className="space-y-2 rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-[#1b1b25] via-[#181821] to-[#101015] p-[1px] shadow-lg shadow-yellow-500/30">
          <div className="rounded-3xl bg-[#050510]/90 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
              Blog DreamSTORE
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
              Barisan Artikel & Insight Komunitas
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Rangkuman tips, SOP internal, dan best practice jual beli yang
              bisa kamu jadikan referensi sebelum turun ke lapangan.
            </p>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold uppercase tracking-[0.3em] text-yellow-300">
              Barisan Blog
            </span>
            <span className="text-muted-foreground">
              {blogPosts.length} tulisan pilihan
            </span>
          </div>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <Link
                key={post.title}
                href={post.href}
                className="blog-card card-glow relative block rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-5 transition hover:border-yellow-300/80 hover:from-white/10"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl border border-yellow-300/40 bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-200">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="space-y-2">
                    <span className="inline-flex rounded-full border border-yellow-300/30 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-yellow-300">
                      {post.tag}
                    </span>
                    <h2 className="text-xl font-semibold text-white">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="text-[0.75rem] font-semibold text-yellow-200">
                      Baca selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
