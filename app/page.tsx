import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Verified,
  Sparkles,
  Users,
  ShoppingBag,
  BadgeDollarSign,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactTelegramDreamstore from "@/components/contact-telegram-dreamstore";

const games = [
  {
    slug: "ml-stock",
    title: "Cara POSTING Di GROUP JB",
    publisher: "DreamSTORE",
    highlighted: true,
  },
  {
    slug: "group-guide",
    title: "Cara membuat Group (MC) ?",
    publisher: "DreamSTORE",
    highlighted: true,
  },
  {
    slug: "sell-guide",
    title: "Bagaimana Cara JUAL Akun?",
    publisher: "DreamSTORE",
    highlighted: true,
  },
  {
    slug: "buy-guide",
    title: "Bagaimana Cara Beli Akun?",
    publisher: "DreamSTORE",
    highlighted: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101015] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 pb-10 pt-4">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/70 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-emerald-500/30 text-xs font-bold text-emerald-300 shadow-lg shadow-emerald-500/40">
              <Verified className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <p className="text-[0.8rem] font-semibold tracking-wide">
                Dream<span className="text-yellow-300">STORE</span>
              </p>
              <p className="text-[0.65rem] text-muted-foreground">
                Forum Jual-beli
              </p>
            </div>
          </div>
          <ContactTelegramDreamstore />
        </header>

        {/* Hero banner */}
        <section className="overflow-hidden rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-[#1b1b25] via-[#181821] to-[#101015] p-[1px] shadow-lg shadow-yellow-500/30">
          <div className="flex flex-col gap-2rounded-3xl bg-[#10101A]/95 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xs font-bold text-yellow-300">
                DS
              </div>
              <div className="space-">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-yellow-300">
                  Forum Knowledge
                </p>
                <h1 className="text-2xl font-extrabold tracking-[0.12em] text-foreground">
                  JUAL & BELI
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[0.65rem] text-foreground">
              {["Posting ", "Aman", "REKBER", "24/7"].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl bg-black/35 px-3 py-2 text-[0.65rem]"
                >
                  <span className="max-w-[8rem] truncate font-semibold">
                    {label}
                  </span>
                  <span className="ml-2 rounded-full bg-emerald-500 px-2 py-0.5 text-[0.6rem] font-medium text-black">
                    <Verified />
                  </span>
                </div>
              ))}
            </div>

            <p className="pt-1 text-center text-[0.6rem] text-muted-foreground">
              Pastikan selalu transaksi melalui kontak resmi store kamu.
            </p>
          </div>
        </section>

        {/* Games grid */}
        <section className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Tutorial
          </p>

          <div className="grid grid-cols-2 gap-3">
            {games.map((game) => {
              const card = (
                <div key={game.title} className="card-glow relative h-full">
                  <div className="glow-ring" />
                  <Card
                    key={game.slug}
                    className={`relative z-10 h-full overflow-hidden bg-gradient-to-br from-[#1b1b25] via-[#181821] to-[#101015] p-[1px] shadow-lg shadow-yellow-500/10 transition-all duration-150 ${
                      game.highlighted
                        ? "border border-yellow-400 hover:border-yellow-300 hover:shadow-yellow-400/40"
                        : "border border-border/50 hover:border-yellow-500/60 hover:shadow-yellow-500/30"
                    }`}
                  >
                    <CardContent className="h-full rounded-2xl bg-[#10101A] px-4 pb-4 pt-3">
                      <h3 className="flex items-center gap-1.5 text-sm font-semibold text-yellow-300">
                        {game.slug === "ml-stock" && (
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400/20">
                            <Sparkles className="h-3 w-3" />
                          </span>
                        )}
                        {game.slug === "group-guide" && (
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400/20">
                            <Users className="h-3 w-3" />
                          </span>
                        )}
                        {game.slug === "sell-guide" && (
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400/20">
                            <BadgeDollarSign className="h-3 w-3" />
                          </span>
                        )}
                        {game.slug === "buy-guide" && (
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400/20">
                            <ShoppingBag className="h-3 w-3" />
                          </span>
                        )}
                        {game.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {game.publisher}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );

              // Jadikan card pertama sebagai Get Started (klik ke /users/preview)
              if (game.slug === "ml-stock") {
                return (
                  <Link
                    key={game.slug}
                    href="/tutorial/posting"
                    className="block h-full transform transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
                  >
                    {card}
                  </Link>
                );
              }

              if (game.slug === "group-guide") {
                return (
                  <Link
                    key={game.slug}
                    href="/tutorial/group"
                    className="block h-full transform transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
                  >
                    {card}
                  </Link>
                );
              }

              if (game.slug === "buy-guide") {
                return (
                  <Link
                    key={game.slug}
                    href="/tutorial/beli"
                    className="block h-full transform transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
                  >
                    {card}
                  </Link>
                );
              }

              if (game.slug === "sell-guide") {
                return (
                  <Link
                    key={game.slug}
                    href="/tutorial/jual"
                    className="block h-full transform transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
                  >
                    {card}
                  </Link>
                );
              }

              return card;
            })}
          </div>
        </section>

        {/* JB dictionary accordion */}
        <section className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
            FAQ
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-yellow-400/40 bg-gradient-to-br from-[#11111a] via-[#151526] to-[#050510] p-[1px] shadow-[0_0_28px_rgba(234,179,8,0.25)]">
            <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)] opacity-70" />
            <div className="relative rounded-2xl bg-[#050510]/90 p-3">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="rekber-arti">
                  <AccordionTrigger className="text-xs text-foreground">
                    ✅{" "}
                    <span className="ml-1 font-semibold">
                      Arti Rekber / Rekening bersama
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 text-[0.75rem] leading-relaxed text-muted-foreground">
                    <p>
                      <span className="italic">Rekber</span> ={" "}
                      <span className="font-semibold">JASA PENENGAH.</span>
                    </p>
                    <p>
                      <span className="font-semibold">-&gt; Artinya :</span>{" "}
                      Transaksi yang menggunakan jasa penengah / pihak ketiga.
                    </p>
                    <p>
                      <span className="font-semibold">-&gt; Tujuan ?</span>{" "}
                      -&gt; Agar kedua pihak tidak mengalami penipuan dari pihak
                      SELLER / BUYER itu sendiri.
                    </p>
                    <p>
                      <span className="font-semibold">
                        -&gt; Apa yang terjadi bila buyer / seller menolak untuk
                        rekber??
                      </span>
                    </p>
                    <p>
                      -&gt; Itu artinya pihak yang tidak mau diajak rekber
                      mempunyai indikasi{" "}
                      <span className="font-semibold">PENIPUAN</span>.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rekber">
                  <AccordionTrigger className="text-xs text-foreground">
                    Apa itu <span className="ml-1 font-semibold">Rekber</span>?
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.75rem] leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Rekber
                    </span>{" "}
                    (rekening bersama) adalah sistem penengah: pembeli bayar ke
                    pihak ketiga dulu, lalu penjual kirim akun. Setelah aman,
                    uang baru diteruskan ke penjual.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="titip-jual">
                  <AccordionTrigger className="text-xs text-foreground">
                    Apa itu{" "}
                    <span className="ml-1 font-semibold">Titip Jual</span>?
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.75rem] leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Titip Jual
                    </span>{" "}
                    artinya kamu menitipkan akun ke pihak DreamSTORE / admin
                    untuk dibantu dipasarkan dan diurus proses jual belinya.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
