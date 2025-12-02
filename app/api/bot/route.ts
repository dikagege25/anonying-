import { NextResponse } from "next/server";
import { Telegraf } from "telegraf";

import { blogPosts } from "@/lib/blog-posts";

export const runtime = "nodejs";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dreamstr.vercel.app";

if (!BOT_TOKEN) {
  throw new Error("Missing TELEGRAM_BOT_TOKEN environment variable.");
}

const promoEvents = [
  {
    title: "Flash Event • DreamSTORE Drop",
    description:
      "Diskon jasa rekber & boost iklan sampai 50% khusus 48 jam ke depan.",
    detail: "17-19 Juni",
    href: `${SITE_URL}`,
  },
  {
    title: "Promo Titip Jual",
    description:
      "Gratis biaya listing + banner highlight untuk 20 seller pertama tiap Jumat.",
    detail: "Setiap Jumat",
    href: `${SITE_URL}`,
  },
  {
    title: "Community Giveaway",
    description:
      "Share testimoni transaksi aman dan menangkan saldo rekber + merch eksklusif.",
    detail: "24 Juni",
    href: `${SITE_URL}/blog/system-jualbeli`,
  },
];

const quickLinks = [
  {
    label: "Bot Listing DreamSTORE",
    description: "Submit akun & lacak status langsung dari Telegram bot.",
    url: "https://t.me/storeDREAM_bot",
  },
  {
    label: "Group JB Official",
    description: "Pantau stok terbaru & promo komunitas.",
    url: "https://t.me/dream_store_2",
  },
  {
    label: "Admin / CS",
    description: "Hubungi admin bila ada dispute atau laporan penipuan.",
    url: "https://t.me/dreamSTORE_cs",
  },
];

declare global {
  // eslint-disable-next-line no-var
  var __dreamBotRegistered : boolean;
}

const bot = new Telegraf(BOT_TOKEN);

const blogKeyboard = {
  inline_keyboard: blogPosts.map((post) => [
    {
      text: post.title,
      url: `${SITE_URL}${post.href}`,
    },
  ]),
};

const accessKeyboard = {
  inline_keyboard: quickLinks.map((link) => [
    {
      text: link.label,
      url: link.url,
    },
  ]),
};

function formatBlogMessage() {
  return blogPosts
    .map(
      (post, index) =>
        `${index + 1}. ${post.title}\n${post.excerpt}\n${SITE_URL}${post.href}`
    )
    .join("\n\n");
}

function formatPromoMessage() {
  return promoEvents
    .map(
      (event) =>
        `• ${event.title}\n${event.description}\nJadwal: ${event.detail}\n${event.href}`
    )
    .join("\n\n");
}

function formatAccessMessage() {
  return quickLinks
    .map((link) => `• ${link.label}\n${link.description}\n${link.url}`)
    .join("\n\n");
}

function sendMainMenu(ctx: Parameters<Telegraf["start"]>[0]) {
  return ctx.reply(
    "Halo! Ini bot resmi DreamSTORE. Pilih menu untuk melihat konten penting dari website.",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📢 Promo & Event", callback_data: "menu_promo" },
            { text: "📰 Blog & Tutorial", callback_data: "menu_blog" },
          ],
          [{ text: "🤝 Hubungkan Akses", callback_data: "menu_access" }],
          [{ text: "🌐 Buka Website", url: SITE_URL }],
        ],
      },
    }
  );
}

if (!globalThis.__dreamBotRegistered) {
  bot.start((ctx) => sendMainMenu(ctx));
  bot.command("menu", (ctx) => sendMainMenu(ctx));

  bot.command("blog", (ctx) =>
    ctx.reply(formatBlogMessage(), { reply_markup: blogKeyboard })
  );

  bot.command("promo", (ctx) => ctx.reply(formatPromoMessage()));

  bot.command("akses", (ctx) =>
    ctx.reply(formatAccessMessage(), { reply_markup: accessKeyboard })
  );

  bot.command("help", (ctx) =>
    ctx.reply(
      "Menu cepat:\n/menu - Buka menu utama\n/blog - Daftar blog terbaru\n/promo - Lihat event aktif\n/akses - Hubungi bot & group resmi"
    )
  );

  bot.on("callback_query", async (ctx) => {
    const data = ctx.callbackQuery?.data;
    if (!data) {
      return ctx.answerCbQuery();
    }

    switch (data) {
      case "menu_promo":
        await ctx.reply(formatPromoMessage());
        break;
      case "menu_blog":
        await ctx.reply(formatBlogMessage(), { reply_markup: blogKeyboard });
        break;
      case "menu_access":
        await ctx.reply(formatAccessMessage(), { reply_markup: accessKeyboard });
        break;
      default:
        await ctx.reply("Perintah tidak dikenali, pilih menu yang tersedia.");
    }

    await ctx.answerCbQuery();
  });

  bot.on("text", (ctx) =>
    ctx.reply(
      "Gunakan perintah /menu untuk melihat semua konten. Kamu juga bisa mengetik /blog, /promo, atau /akses."
    )
  );

  globalThis.__dreamBotRegistered = true;
}

export async function POST(req: Request): Promise<Response> {
  const update = await req.json();

  try {
    await bot.handleUpdate(update);
  } catch (err) {
    console.error("Error handling Telegram update", err);
  }

  return new Response("OK");
}

export async function GET() {
  await bot.telegram.setWebhook(`${SITE_URL}/api/bot`);
  
  await bot.telegram.setMyCommands([
    { command: "menu", description: "Buka menu utama DreamSTORE" },
    { command: "blog", description: "Lihat daftar blog & tutorial" },
    { command: "promo", description: "Promo & event terbaru" },
    { command: "akses", description: "Hubungan bot, group, dan admin" },
  ]);

  return NextResponse.json({ status: "Webhook & commands set" });
}
