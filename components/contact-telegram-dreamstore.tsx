"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

export function ContactTelegramDreamstore() {
  return (
    <div className="flex items-center justify-end gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="relative flex items-center gap-2 rounded-full border border-yellow-400/60 bg-gradient-to-r from-[#1b1b25] via-[#181821] to-[#101015] px-3 py-2 text-xs text-yellow-200 shadow-md shadow-yellow-500/30 transition-all hover:border-yellow-300 hover:shadow-yellow-400/50 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]">
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.25),_transparent_55%)] opacity-60 blur-[6px] pointer-events-none" />
            <span className="relative text-base">📨</span>
            <span className="relative truncate text-[0.75rem] text-left">
              Contact Telegram
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8}>
          <DropdownMenuLabel>Contact Telegram</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a
              href="https://t.me/storeDREAM_bot"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-xs"
            >
              Bot Posting:{" "}
              <span className="font-semibold">@storeDREAM_bot</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="https://t.me/dreamSTORE_cs"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-xs"
            >
              CS / Admin:{" "}
              <span className="font-semibold">@dreamSTORE_cs</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Sheet>
        <SheetTrigger asChild>
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
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Contact & Support</SheetTitle>
            <SheetDescription>
              Pilih salah satu opsi di bawah untuk terhubung dengan tim
              DreamSTORE via Telegram.
            </SheetDescription>
          </SheetHeader>
          <div className="space-y-2 text-[0.8rem]">
            <Link
              href="https://t.me/storeDREAM_bot"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-yellow-400/60 bg-[#151521] px-3 py-2 shadow-md shadow-yellow-500/30 transition hover:border-yellow-300 hover:shadow-yellow-400/50"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-yellow-300">
                Bot Posting
              </p>
              <p className="text-xs">
                @storeDREAM_bot{" "}
                <span className="text-muted-foreground">
                  — buat / cek postingan jual beli akun.
                </span>
              </p>
            </Link>
            <Link
              href="https://t.me/dreamSTORE_cs"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-yellow-400/40 bg-[#151521] px-3 py-2 shadow-md shadow-yellow-500/20 transition hover:border-yellow-300 hover:shadow-yellow-400/40"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-yellow-300">
                CS / Admin
              </p>
              <p className="text-xs">
                @dreamSTORE_cs{" "}
                <span className="text-muted-foreground">
                  — bantuan kendala transaksi & laporan penipuan.
                </span>
              </p>
            </Link>
          </div>
          <SheetFooter>
            <p className="text-[0.65rem] text-muted-foreground">
              Selalu cek ulang username & link sebelum menghubungi, dan jangan
              kirim data sensitif di luar format resmi.
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ContactTelegramDreamstore;
