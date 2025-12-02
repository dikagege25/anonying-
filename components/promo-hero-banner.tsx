"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const promoEvents = [
  {
    title: "Gratis POSTING ",
    description:
      "Posting CARI / JUAL akun gratis hanya di DREAMSTORE.",
    cta: "Ikuti event ",
    href: "https://t.me/storeDREAM_bot",
    detail: "Recomended",
    badge: "Hot Deal",
  },
  {
    title: "Terpercaya ",
    description:
      "Memberikan kamu pengalaman untuk jualbeli online dengan budget pelajar !.",
    cta: "Titip Sekarang",
    href: "https://t.me/storeDREAM_bot",
    detail: "Setiap Jumat",
    badge: "Limited",
  },
  {
    title: "Group OPEN 24/7",
    description:
      "Group selalu terbuka untuk public sampai kapan pun",
    cta: "Gabung sekarang",
    href: "https://t.me/dream_store_2",
    detail: "24 Juni",
    badge: "Aman terpercaya",
  },
];

export default function PromoHeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % promoEvents.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden rounded-[24px] border border-yellow-400/40 bg-gradient-to-br from-[#191b2c] via-[#141528] to-[#090913] p-[1px] shadow-[0_0_28px_rgba(234,179,8,0.15)]">
      <div className="rounded-[22px] bg-[#05050b]/95 px-4 py-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-yellow-200">
              Event & Promo
            </p>
            
            
          </div>
         
        </div>

        <div className="relative mt-3 h-[170px] overflow-hidden">
          {promoEvents.map((promo, index) => {
            const isActive = index === activeIndex;
            return (
              <Link
                key={promo.title}
                href={promo.href}
                target="_blank"
                rel="noreferrer"
                className={`card-glow absolute inset-0 flex flex-col gap-3 rounded-[20px] border border-yellow-300/35 bg-gradient-to-br from-yellow-500/12 via-yellow-400/5 to-transparent p-4 text-left shadow-[0_0_24px_rgba(234,179,8,0.18)] transition-all duration-500 ${
                  isActive
                    ? "pointer-events-auto opacity-100 translate-x-0"
                    : "pointer-events-none opacity-0 translate-x-6"
                }`}
              >
                <div className="flex items-center justify-between text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-yellow-100">
                  <span>{promo.badge}</span>
                  <span className="text-white/70">{promo.detail}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">{promo.title}</h3>
                  <p className="text-[0.85rem] text-yellow-50/90">{promo.description}</p>
                </div>
                <span className="inline-flex items-center justify-center rounded-full border border-yellow-200/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-yellow-100 transition group-hover:bg-yellow-300/10">
                  {promo.cta}
                </span>
              </Link>
            );
          })}

          <div className="absolute bottom-3 right-5 flex gap-1">
            {promoEvents.map((_, index) => (
              <span
                key={index}
                className={`h-1 w-8 rounded-full transition ${
                  index === activeIndex
                    ? "bg-yellow-300"
                    : "bg-yellow-300/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
