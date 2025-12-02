import Link from "next/link";
import { ArrowLeft, MessageSquare, ShieldCheck, Bot } from "lucide-react";

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

export default function SystemJualBeliPage() {
  return (
    <main className="min-h-screen bg-[#101015] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 pb-12 pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-200 transition hover:text-yellow-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Blog
        </Link>

        <header className="space-y-3 rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-[#1b1b25] via-[#181821] to-[#05050b] p-[1px] shadow-[0_0_32px_rgba(234,179,8,0.15)]">
          <div className="rounded-3xl bg-[#05050b]/95 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-yellow-200">
              Sistem DreamSTORE
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
              
            </h1>
            <p className="text-sm text-yellow-100/80">
              Pada dasar nya dreamstore hanya sebuah forum jual_beli , bukan yang menjual akun .    
            </p>
          </div>
        </header>

        <section className="space-y-3 rounded-3xl border border-yellow-400/30 bg-[#0b0b18]/95 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-200">
            Peran & Tanggung Jawab
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10 p-4"
              >
                <role.icon className="h-5 w-5 text-yellow-200" />
                <h4 className="mt-2 text-sm font-semibold text-white">
                  {role.title}
                </h4>
                <p className="mt-2 text-[0.75rem] text-muted-foreground">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-yellow-400/20 bg-[#05050b]/95 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-300">
            Kenapa Harus Ikut Sistem?
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Semua percakapan tercatat—mudah audit bila ada laporan.</li>
            <li>
              Dana aman karena ditahan admin sampai akun benar-benar berpindah.
            </li>
            <li>
              Identitas penjual sudah divalidasi, meminimalkan resiko penipuan.
            </li>
            <li>
              Akses support lebih cepat karena admin punya data transaksi
              lengkap.
            </li>
          </ul>
        </section>

        <section className="rounded-3xl border border-yellow-400/30 bg-[#101021]/90 p-5 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200">
            Siap Ikut Sistem Resmi?
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="https://t.me/storeDREAM_bot"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-yellow-400/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200 transition hover:border-yellow-200"
            >
              Mulai via Bot
            </Link>
            <Link
              href="https://t.me/dream_store_2"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-yellow-200"
            >
              Join Group JB
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
