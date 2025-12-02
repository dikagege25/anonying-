import { Verified } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactTelegramDreamstore from "@/components/contact-telegram-dreamstore";
import MovingPhotoStrip from "@/components/moving-photo-strip";
import HubungkanAkses from "@/components/hubungkan-akses";
import PromoHeroBanner from "@/components/promo-hero-banner";
import SponsorMarquee from "@/components/sponsor-marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0b16] via-[#15162a] to-[#070710] text-foreground page-enter">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 pb-10 pt-4">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-3 rounded-3xl border border-yellow-200/30 bg-gradient-to-br from-[#191a33]/90 via-[#16162c]/90 to-[#0c0d1d]/95 px-4 py-3 section-animate pulse-border">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/70 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-emerald-500/30 text-xs font-bold text-emerald-300 shadow-lg shadow-emerald-500/40 float-soft">
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

        <div className="section-animate" data-animate-delay="1">
          <div className="rounded-[28px] border border-yellow-200/40 bg-gradient-to-br from-[#1f1f33]/90 via-[#15162a]/90 to-[#0b0b16]/95 p-[1px]">
            <div className="rounded-[26px] bg-gradient-to-br from-[#0c0d1f]/95 via-[#090a16]/95 to-[#07070e]/95 p-4 sm:p-6">
              <PromoHeroBanner />
            </div>
          </div>
        </div>

        <div className="section-animate" data-animate-delay="2">
          <div className="rounded-[28px] border border-yellow-200/35 bg-gradient-to-br from-[#1b1c32]/85 via-[#13152a]/90 to-[#0a0b16]/95 p-[1px]">
            <div className="rounded-[26px] bg-[#080a18]/90 p-4 sm:p-5">
              <SponsorMarquee />
            </div>
          </div>
        </div>

        <div className="section-animate" data-animate-delay="3">
          <div className="rounded-[28px] border border-yellow-200/35 bg-gradient-to-br from-[#191a31]/90 via-[#111228]/90 to-[#090a16]/95 p-[1px]">
            <div className="rounded-[26px] bg-gradient-to-br from-[#090a18]/95 via-[#080812]/95 to-[#05050c]/95 p-4 sm:p-6">
              <MovingPhotoStrip />
            </div>
          </div>
        </div>

        <div className="section-animate" data-animate-delay="4">
          <div className="rounded-[28px] border border-yellow-200/35 bg-gradient-to-br from-[#1c1c34]/90 via-[#14142a]/90 to-[#080816]/95 p-[1px]">
            <div className="rounded-[26px] bg-[#070713]/95 p-4 sm:p-6">
              <HubungkanAkses />
            </div>
          </div>
        </div>

        {/* JB dictionary accordion */}
        <section className="space-y-2 section-animate" data-animate-delay="5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
            FAQ
          </p>
          <div className="relative overflow-hidden rounded-[28px] border border-yellow-200/40 bg-gradient-to-br from-[#1f1f33] via-[#14142a] to-[#070712] p-[1px] shadow-[0_0_32px_rgba(234,179,8,0.25)]">
            <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.35),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.2),_transparent_65%)] opacity-70" />
            <div className="relative rounded-[26px] bg-gradient-to-br from-[#050510]/95 via-[#070712]/95 to-[#05050b]/95 p-4">
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
