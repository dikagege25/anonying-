"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import step1Image from "@/asset/tutor_posting_1.jpeg";
import stepImage2 from "@/asset/tutor_posting_2.jpeg";
import stepImage3 from "@/asset/tutor_posting_3.jpeg";
import stepImage4 from "@/asset/tutorial_posting_4.jpeg";
import stepImage5 from "@/asset/tutorial_posting_5.jpeg";
const tutorial = {
  title: "Tutorial Posting DreamSTORE",
  description:
    "Ikuti langkah-langkah berikut untuk membuat postingan jual beli akun game di DreamSTORE dengan rapi dan mudah dipahami calon pembeli.",
  steps: [
    {
      text: "Searching  bot @storeDREAM_bot di aplikasi telegram.",
      image: step1Image.src,
      height: 15,
    },
    {
      text: "Kemudian start bot tersebut untuk memunculkan opsi untuk layanan.",
      image: stepImage2.src,
      height: 20,
    },
    {
      text: `Pilih tombol paling atas .`,
      image: stepImage3.src,
      height: 30,
    },
    {
      text: "Pilih tujuan mu jual / beli .",
      image: stepImage4.src,
      height: 20,
    },
    {
      text: "Copy FORMAT dengan tap tombol Copy FORMAT.",
      image: stepImage5.src,
      height: 50,
    },
  ],
};

export default function TutorialPostingPage() {
  return (
    <main className="min-h-screen bg-[#050510] bg-gradient-to-b from-[#050510] via-[#050510] to-[#050018] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-md flex-col gap-5 px-4 pb-8 pt-4">
        {/* Top bar mobile-friendly */}
        <header className="flex items-center gap-3">
          <Link
            href="/"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-[#181821] text-sm font-semibold text-muted-foreground shadow-sm transition-all duration-150 hover:border-yellow-400 hover:bg-[#202032] hover:text-yellow-300 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.97]"
          >
            ←
          </Link>
          <div className="flex flex-col">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Tutorial
            </span>
            <span className="text-xs text-muted-foreground">
              Tutorial Posting DreamSTORE
            </span>
          </div>
        </header>

        {/* Hero / title */}
        <section className="rounded-2xl border border-yellow-400/40 bg-gradient-to-br from-[#1b1b25] via-[#181821] to-[#101015] p-[1px] shadow-lg shadow-yellow-500/30">
          <div className="space-y-2 rounded-2xl bg-[#10101A]/95 px-4 py-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Langkah cepat & aman
            </p>
            <h1 className="text-lg font-bold tracking-tight text-yellow-100">
              {tutorial.title}
            </h1>
            <p className="text-[0.75rem] leading-relaxed text-muted-foreground">
              {tutorial.description}
            </p>
          </div>
        </section>

        {/* Step list */}
        <section className="space-y-3 rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-[#10101a] via-[#0b0b18] to-[#050510] p-5 shadow-[0_0_32px_rgba(234,179,8,0.2)]">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Langkah-langkah
          </h2>
          <ol className="space-y-3 text-xs text-foreground">
            {tutorial.steps.map((step, index) => (
              <li
                key={index}
                className="space-y-2 rounded-2xl border border-yellow-500/10 bg-black/30 p-3 shadow-md shadow-yellow-500/10"
              >
                {/* Wide but short image / screenshot */}
                <div
                  className={`h-${step.height} w-full overflow-hidden rounded-xl border-2 border-yellow-400/70 bg-gradient-to-r from-[#24243a] via-[#2b2b45] to-[#181821] shadow-md shadow-yellow-500/40`}
                >
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="h-full w-full object-cover "
                    />
                  ) : (
                    <div className="h-full w-full opacity-40" />
                  )}
                </div>

                <div className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[0.65rem] font-bold text-black">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-[0.75rem] leading-relaxed">
                    {step.text}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Extra info + CTA */}
        <section className="mt-auto space-y-3 rounded-2xl border border-yellow-500/25 bg-gradient-to-r from-[#151521] via-[#211b33] to-[#151521] p-4 shadow-[0_0_24px_rgba(234,179,8,0.2)]">
          <p className="text-[0.7rem] leading-relaxed text-muted-foreground">
            Catatan: Ini hanya contoh awal tutorial posting. Silakan sesuaikan
            teks, langkah, dan link sesuai SOP resmi DreamSTORE agar user HP
            mudah mengikuti.
          </p>
          <Button
            asChild
            size="sm"
            className="w-full rounded-xl border border-yellow-400/80 bg-yellow-400 text-xs font-semibold text-black shadow-md transition-all duration-150 hover:bg-yellow-300 hover:border-yellow-200 hover:shadow-yellow-300/60 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
          >
            <Link href="/">Kembali ke beranda</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
