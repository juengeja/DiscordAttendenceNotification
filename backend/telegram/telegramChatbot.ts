import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot@v1.0.0/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { insertChat, findChatByChatID } from "../aloedb.ts"
export { sendMessage }

const TOKEN = Deno.env.get("TELEGRAM_TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

// deno-lint-ignore no-explicit-any
bot.on(UpdateType.Message, async (message: any) => {

    if(await findChatByChatID(parseInt(message.message.chat.id)) == undefined){
        insertChat({chatID:parseInt(message.message.chat.id)})
    
        await bot.sendMessage({ chat_id: message.message.chat.id, text: `Welcome to our _discord attendance notification_ bot!
Please visit our *Website* for further customisation:



Your Chat-ID: ${message.message.chat.id}`, parse_mode: `Markdown` })
    }else{
        await bot.sendMessage({ chat_id: message.message.chat.id, text: `Welcome back to our _discord attendance notification_ bot!
        Please visit our *Website* for further customisation:
        
        
        
        Your Chat-ID: ${message.message.chat.id}`, parse_mode: `Markdown` })
    }

})

bot.run({
    polling: true,
});

function sendMessage(receiverCID: number, message: string){
    bot.sendMessage({chat_id: receiverCID, text: message, parse_mode: 'Markdown'})
}