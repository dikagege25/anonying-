"use client";

import Link from "next/link";
import { MessageCircle, Users } from "lucide-react";

const quickLinks = [
  {
    title: "Bot Posting DreamSTORE",
    tag: "Bot",
    description:
      "Submit listing, cek status iklan, dan dapatkan notifikasi approval otomatis.",
    href: "https://t.me/storeDREAM_bot",
    badge: "24/7 aktif",
    icon: MessageCircle,
  },
  {
    title: "Group JB Official",
    tag: "Group",
    description:
      "Gabung ke komunitas jual-beli terpercaya, pantau update stok & flash sale.",
    href: "https://t.me/jubel_ml",
    badge: "30K member",
    icon: Users,
  },
];

export default function HubungkanAkses() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-yellow-400/40 bg-gradient-to-br from-[#151522] via-[#0f0f18] to-[#05050b] p-[1px] shadow-[0_0_28px_rgba(234,179,8,0.12)]">
      <div className="rounded-3xl bg-[#05050b]/95 px-5 py-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300">
            Hubungkan Akses
          </p>
          <span className="text-[0.7rem] text-muted-foreground">
            Klik untuk langsung menuju layanan resmi DreamSTORE.
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {quickLinks.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="card-glow group relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/0 to-white/8 p-4 transition hover:border-yellow-300/80 hover:from-white/15"
            >
              <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.35em]">
                <span className="text-yellow-300">{card.tag}</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.55rem] text-white">
                  {card.badge}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-yellow-300/40 bg-yellow-300/10 text-yellow-200">
                  <card.icon className="h-4 w-4" />
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-[0.72rem] text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-yellow-200 transition group-hover:text-white">
                Buka Akses →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
