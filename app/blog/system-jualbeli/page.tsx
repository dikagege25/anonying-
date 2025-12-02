import Link from "next/link";
import {
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
  Bot,
  Sparkles,
  Zap,
  Handshake,
} from "lucide-react";

const roles = [
  {
    title: "Hanya pihak POSTING ",
    description:
      "Dream STORE hanya pihak POSTING tidak ada hubungan tertentu dengan penjual.",
    icon: Bot,
  },
  {
    title: "Jika beli = REKBER",
    description:
      "Diwajib kan untuk semua member dreamSTORE untuk menggunakan jasa rekber .",
    icon: ShieldCheck,
  },
  {
    title: "Buyer & Seller",
    description:
      "Sepakati dengan keputusan 2 pihak ,jangan hanya dari 1 pihak.",
    icon: MessageSquare,
  },
];

const badges = [
  { label: "Status", value: "Forum Terverifikasi" },
  { label: "Metode", value: "Full Rekber" },
  { label: "Proses", value: "Pencatatan Transparan" },
];

const steps = [
  {
    title: "Mulai dari Bot",
    description: "Kirim detail listing ke bot resmi untuk membuat tiket otomatis.",
    icon: Bot,
    stat: "< 2 menit",
  },
  {
    title: "Verifikasi & Rekber",
    description: "Admin mengecek data penjual lalu menahan dana sampai akun berpindah.",
    icon: ShieldCheck,
    stat: "100% proteksi",
  },
  {
    title: "Selesai dengan Aman",
    description: "Fund dilepas ketika kedua pihak setuju, percakapan tetap tersimpan.",
    icon: Handshake,
    stat: "Peace of mind",
  },
];

const faqs = [
  {
    question: "Kenapa harus lewat sistem?",
    answer:
      "Semua transaksi terdokumentasi sehingga jika ada dispute, admin bisa langsung menelusuri kronologinya.",
  },
  {
    question: "Apakah admin ikut campur harga?",
    answer:
      "Tidak. DreamSTORE hanya memfasilitasi tempat bertemu dan memastikan proses tukar akun berjalan aman.",
  },
  {
    question: "Bagaimana bila ada kecurigaan penipuan?",
    answer:
      "Laporkan lewat tiket yang sama, tim support bisa membekukan dana sementara investigasi berlangsung.",
  },
];

export default function SystemJualBeliPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0b16] via-[#15162a] to-[#070710] text-foreground page-enter">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-4 pb-16 pt-10 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex w-fit items-center gap-2 rounded-2xl border border-yellow-200/50 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-100 shadow-[0_0_25px_rgba(234,179,8,0.25)] transition hover:border-yellow-200 hover:bg-yellow-400/15 section-animate"
          data-animate-delay="0"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Blog
        </Link>

        <header
          className="space-y-4 rounded-[28px] border border-yellow-300/40 bg-gradient-to-br from-[#1f1f33] via-[#1b1d38] to-[#10121f] p-[1px] shadow-[0_0_32px_rgba(234,179,8,0.3)] section-animate pulse-border"
          data-animate-delay="1"
        >
          <div className="rounded-[26px] bg-gradient-to-br from-[#0b0c1a]/95 via-[#0b0d1e]/90 to-[#0a0a16]/92 px-6 py-6">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-yellow-200">
              <Sparkles className="h-4 w-4 floating-icon" />
              Sistem DreamSTORE
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white">
              Sistem jual beli yang transparan dan ramah komunitas.
            </h1>
            <p className="mt-3 text-base text-slate-200">
              Pada dasarnya DreamSTORE hanyalah forum jual beli. Kami tidak menjual akun, tetapi
              memastikan proses pertukaran antara buyer & seller berlangsung terang benderang.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="rounded-2xl border border-yellow-200/40 bg-gradient-to-b from-yellow-200/20 via-transparent to-transparent px-4 py-3 text-center text-sm font-semibold text-yellow-100"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.4em] text-yellow-100/80">
                    {badge.label}
                  </p>
                  <p className="mt-1 text-base text-white">{badge.value}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section
          className="space-y-3 rounded-3xl border border-yellow-200/20 bg-gradient-to-br from-[#13142a]/90 via-[#0f1022]/85 to-[#0b0b18]/90 p-6 shadow-[0_0_45px_rgba(0,0,0,0.45)] section-animate"
          data-animate-delay="2"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
            <Zap className="h-4 w-4 floating-icon" />
            Peran & Tanggung Jawab
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/15 via-white/0 to-white/8 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-yellow-300/60"
              >
                <role.icon className="h-5 w-5 text-yellow-200 floating-icon" />
                <h4 className="mt-2 text-sm font-semibold text-white">{role.title}</h4>
                <p className="mt-2 text-[0.8rem] text-slate-200">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="space-y-4 rounded-3xl border border-yellow-200/25 bg-gradient-to-br from-[#0d0e22]/95 via-[#0a0b1a]/90 to-[#05050f]/90 p-6 section-animate"
          data-animate-delay="3"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
            Alur singkat
          </p>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4 shadow transition hover:-translate-y-0.5 hover:border-yellow-300/50 sm:flex-row sm:items-center"
              >
                <div className="flex flex-1 items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-200">
                    <step.icon className="h-5 w-5 floating-icon" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200/80">
                      Langkah {index + 1}
                    </p>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-slate-200">{step.description}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-yellow-200/40 bg-white/10 px-4 py-2 text-center text-sm font-semibold text-yellow-100">
                  {step.stat}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-3xl border border-yellow-200/25 bg-gradient-to-br from-[#101122]/90 via-[#0c0d1d]/90 to-[#090912]/92 p-6 section-animate"
          data-animate-delay="4"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-300">
            Kenapa Harus Ikut Sistem?
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>Semua percakapan tercatat—mudah audit bila ada laporan.</li>
            <li>Dana aman karena ditahan admin sampai akun benar-benar berpindah.</li>
            <li>Identitas penjual divalidasi sehingga resiko penipuan turun drastis.</li>
            <li>Support cepat, karena admin memegang data dan bukti transaksi.</li>
          </ul>
        </section>

        <section
          className="space-y-3 rounded-3xl border border-yellow-200/25 bg-gradient-to-br from-[#0c0c1f]/90 via-[#070713]/88 to-[#04040a]/90 p-6 section-animate"
          data-animate-delay="5"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
            <MessageSquare className="h-4 w-4 floating-icon" />
            Tanya Jawab Singkat
          </p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
                  {faq.question}
                  <span className="text-yellow-200 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm text-slate-200">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="rounded-3xl border border-yellow-200/40 bg-gradient-to-r from-yellow-400/35 via-yellow-400/15 to-transparent p-6 text-sm text-yellow-100 shadow-[0_0_35px_rgba(234,179,8,0.35)] section-animate"
          data-animate-delay="6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200/90">
            Siap ikut sistem resmi?
          </p>
          <p className="mt-2 text-base font-semibold text-white">
            Mulai percakapan langsung dari platform resmi agar admin bisa membantu sejak awal.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="https://t.me/storeDREAM_bot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-yellow-200/50 bg-[#0b0b18]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-100 transition hover:-translate-y-0.5 hover:bg-yellow-400/15"
            >
              Mulai via Bot
            </Link>
            <Link
              href="https://t.me/dream_store_2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Join Group JB
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
