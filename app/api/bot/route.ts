import { NextResponse } from "next/server";
import { Telegraf, Types } from "telegraf";

export const runtime = "nodejs";

const bot = new Telegraf("8353789862:AAHtpjPzwnRpkD-eAIm4TcxoF_FSjzgOERc");

bot.start((ctx) =>
  ctx.reply("Halo! Bot Telegraf + Next.js siap.", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Setuju dan lanjut kan",
            web_app: {
              url: `https://dreamstr.vercel.app/users/${ctx.from.id}`,
            },
          },
        ],
      ],
    },
  })
);
bot.help((ctx) => ctx.reply("Kirim teks apa saja, nanti aku echo."));
bot.on("text", (ctx) => {
  if ("text" in ctx.message) {
    ctx.reply(`Kamu kirim: ${ctx.message.text}`);
  }
});

export async function POST(req: Request): Promise<Response> {
  const update = await req.json();

  try {
    await bot.handleUpdate(update);
  } catch (err) {
    console.error("Error handling Telegram update", err);
  }

  return new Response("OK");
}
export async function GET(req: Request) {
  const a = await bot.telegram.setWebhook(
    "https://dreamstr.vercel.app/api/bot"
  );
  return NextResponse.json({ status: "Berhasil" });
}
