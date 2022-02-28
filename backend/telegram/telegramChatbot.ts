import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"

const TOKEN = Deno.env.get("TELEGRAM_TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async (message: any) => {

await bot.sendMessage({ chat_id: message.message.chat.id, text: `Welcome to our discord attendance notification bot! \nPlease visit our Website for further customisation: \n\n\n\nYour Chat-ID: ${message.message.chat.id}` })

});

bot.run({
    polling: true,
});