import { Telegraf, Types } from "telegraf";

export const runtime = "nodejs";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN environment variable is not set");
}

const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply("Halo! Bot Telegraf + Next.js siap."));
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
