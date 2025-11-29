"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const tutorial = {
  title: "Tutorial Buat Group DreamSTORE",
  description:
    "Panduan singkat untuk membuat group transaksi di DreamSTORE / Telegram agar komunikasi jual beli akun jadi lebih rapi dan aman.",
  steps: [
    {
      text: "Buka bot @storeDREAM_bot di Telegram, lalu pilih menu untuk membuat group / ruang transaksi (jika tersedia).",
      image: "/tutorial/group/step-1.png",
      height: 25,
    },
    {
      text: "Buat group baru di Telegram bersama pembeli / penjual yang terlibat, lalu undang akun bot / admin DreamSTORE jika diperlukan.",
      image: "/tutorial/group/step-2.png",
      height: 28,
    },
    {
      text: 'Atur nama group dengan jelas, misalnya: "Transaksi Akun ML - Penjual A x Pembeli B".',
      image: "/tutorial/group/step-3.png",
      height: 28,
    },
    {
      text: "Kirim FORMAT DreamSTORE di dalam group agar semua data akun, harga, dan syarat transaksi tercatat dengan rapi.",
      image: "/tutorial/group/step-4.png",
      height: 28,
    },
    {
      text: "Gunakan group ini untuk update progress pembayaran, pengiriman data akun, dan konfirmasi akhir setelah akun berhasil dipindahkan.",
      image: "/tutorial/group/step-5.png",
      height: 28,
    },
    {
      text: "Setelah transaksi selesai dan semua pihak setuju, kamu bisa menyimpan riwayat chat lalu menutup / membisukan group.",
      image: "/tutorial/group/step-6.png",
      height: 24,
    },
  ],
};

export default function TutorialGroupPage() {
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
              Tutorial Buat Group DreamSTORE
            </span>
          </div>
        </header>

        {/* Hero / title */}
        <section className="rounded-2xl border border-yellow-400/40 bg-gradient-to-br from-[#1b1b25] via-[#181821] to-[#101015] p-[1px] shadow-lg shadow-yellow-500/30">
          <div className="space-y-2 rounded-2xl bg-[#10101A]/95 px-4 py-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Group transaksi yang rapi
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
                <div
                  className={`h-${step.height} w-full overflow-hidden rounded-xl border-2 border-yellow-400/70 bg-gradient-to-r from-[#24243a] via-[#2b2b45] to-[#181821] shadow-md shadow-yellow-500/40 `}
                >
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="h-full w-full object-cover"
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
            Catatan: Gunakan group hanya untuk kebutuhan transaksi dan
            komunikasi penting. Jika ada hal mencurigakan, segera hubungi admin
            DreamSTORE.
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
