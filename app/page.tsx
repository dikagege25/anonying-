import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Verified, Sparkles } from "lucide-react";

const games = [
  {
    slug: "ml-stock",
    title: "Tutorial POSTING",
    publisher: "Moonton",
    highlighted: true,
  },
  {
    slug: "ml-titip",
    title: "Mobile Legends Titip Jual",
    publisher: "Moonton",
  },
  {
    slug: "ff-stock",
    title: "Free Fire Stock",
    publisher: "Garena",
  },
  {
    slug: "ff-titip",
    title: "Free Fire Titip Jual",
    publisher: "Garena",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101015] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 pb-10 pt-4">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-xs font-bold text-black shadow-lg">
              DS
            </div>
            <span className="text-sm font-semibold tracking-wide">
              DreamSTORE
            </span>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-border/40 bg-[#181821] px-3 py-2 text-xs text-muted-foreground">
              <span className="text-base">🔍</span>
              <span className="flex-1 truncate text-[0.75rem]">
                Cari game...
              </span>
            </div>
            <Button
              size="icon-sm"
              variant="secondary"
              className="rounded-xl border border-border/50 bg-[#181821] shadow-sm transition-all duration-150 hover:border-yellow-400 hover:bg-[#202032] hover:shadow-yellow-500/30 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.97]"
            >
              <span className="flex flex-col gap-0.5">
                <span className="h-[2px] w-3 rounded-full bg-foreground" />
                <span className="h-[2px] w-3 rounded-full bg-foreground" />
                <span className="h-[2px] w-3 rounded-full bg-foreground" />
              </span>
            </Button>
          </div>
        </header>

        {/* Hero banner */}
        <section className="overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-tr from-[#1b1b25] via-[#24243a] to-[#151521] shadow-xl">
          <div className="flex flex-col gap-4 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xs font-bold text-yellow-300">
                DS
              </div>
              <div className="space-y-1">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-yellow-300">
                  Forum Knowledge
                </p>
                <h1 className="text-2xl font-extrabold tracking-[0.12em] text-foreground">
                  JUAL & BELI
                </h1>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-9 flex-shrink-0 rounded-lg bg-gradient-to-br from-slate-300 via-slate-100 to-slate-300"
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 text-[0.65rem] text-foreground">
              {[
                "Jasa POSTING ",
                "REKBER ON 24 JAM",
                "Jasa pengamanan",
                "Sistem REFF/NOREF",
              ].map((label) => (
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
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.25em]">
            Tutorial
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {games.map((game) => {
              const card = (
                <Card
                  key={game.slug}
                  className={`relative h-full overflow-hidden bg-gradient-to-br from-[#1b1b25] via-[#181821] to-[#101015] p-[1px] shadow-lg shadow-yellow-500/10 transition-all duration-150 ${
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
                      {game.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {game.publisher}
                    </p>
                  </CardContent>
                </Card>
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

              return card;
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
