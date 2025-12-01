import Link from "next/link";
import { ArrowLeft, ShieldCheck, MessageCircleMore } from "lucide-react";

export default function ArtiReffulPage() {
  const istilah = [
    {
      title: "Kepercayaan (Untuk penjual)",
      body: "Dengan anda menjual akun dengan status reff maka akan mempermudah orang untuk mempercayai anda .",
    },
    {
      title: "Mengantisipasi HACKBACK",
      body: "Dengan anda membeli akun dengan status reff maka akan mengantisipasi terjadi nya HACKBACK terhadap akun yang ingin anda beli.",
    },
    {
      title: "Keamanan untuk semua ",
      body: "Dengan anda transaksi reff maka akan menjadi aman karena memiliki prosedur tertentu.",
    },
  ];

  const tips = [
    "Minta seller share minimal 3-5 bukti refful terbaru (≤3 bulan).",
    "Cek apakah username buyer di refful sama dengan yang tercantum di Telegram.",
    "Selalu sandingkan refful dengan sesi video call / screenshare sebelum transfer.",
    "Laporkan refful palsu ke admin DreamSTORE agar akun penipu bisa di-blacklist.",
  ];

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
              Edukasi JB DreamSTORE
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
              Apa Itu Arti Refful?
            </h1>
            <p className="text-sm text-yellow-100/80">
              Panduan memahami bukti referensi transaksi supaya kamu lebih aman
              saat jual-beli akun di komunitas.
            </p>
          </div>
        </header>

        <section className="space-y-4 rounded-3xl border border-yellow-400/20 bg-[#05050b]/90 p-5">
          <h2 className="text-lg font-semibold text-yellow-200">
            Definisi Singkat
          </h2>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-white">
              ARTI REFF / NOREFF
            </span>{" "}
            — <span className="font-semibold">REFF / REFFUL / REFFPLAYER</span>{" "}
            pada dasarnya sama, yaitu sistem jual-beli dengan garansi (rekber).
            Garansi yang kami pegang adalah{" "}
            <span className="font-semibold text-white">
              identitas PENJUAL
            </span>{" "}
            sebagai jaminan keamanan akun yang dijual. Semakin lengkap refful,
            semakin besar kepercayaan bahwa akunmu aman.
          </p>
          <div className="space-y-3 rounded-2xl border border-yellow-400/30 bg-[#101021]/80 p-4 text-sm text-yellow-50/90">
            <div>
              <p className="font-semibold uppercase tracking-[0.35em] text-yellow-200">
                ❓ Syarat REFF
              </p>
             
             </div> 

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-1">
            
              <ul className="mt-3 list-disc space-y-1 pl-4 text-[0.8rem] text-muted-foreground">
                <li>Memiliki salah satu identitas pribadi CONTOH : (KTP / KK / SIM / DLL ).</li>
                <li>
                  Share lokasi untuk memastikan bahwa itu benar identitas milik anda.
                </li>
                <li>Foto selfie ktp + memegang salah satu identitas.</li>
                <li>Siap video call apabila diperlukan .</li>
                
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
            Keuntungan REFF
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {istilah.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-4"
              >
                <h4 className="text-sm font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-[0.75rem] text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-3xl border border-yellow-400/20 bg-[#05050b]/95 p-5">
          <div className="flex items-center gap-3 text-yellow-200">
            <MessageCircleMore className="h-5 w-5" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                Butuh bantuan admin?
              </p>
              <p className="text-[0.75rem] text-yellow-100/80">
                Kirim refful ke admin DreamSTORE untuk diverifikasi sebelum
                transaksi besar.
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link
              href="https://t.me/storeDREAM_bot"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-yellow-400/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200 transition hover:border-yellow-200"
            >
              Kirim via Bot
            </Link>
            <Link
              href="https://t.me/dreamSTORE_cs"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-yellow-200"
            >
              Chat Admin
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
