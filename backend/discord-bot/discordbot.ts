import { Client, Message, GatewayIntents, MembersManager, UsersManager, Presence } from "https://deno.land/x/harmony@v2.6.0/mod.ts";
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { sendMessage } from "../telegram/telegramChatbot.ts";
import { findManyChannelByID, findManyGuildByID, findManyUserByID } from "../aloedb.ts";

const client = new Client();
const Token = Deno.env.get("DISCORD_TOKEN");

client.connect(Token, [
    GatewayIntents.DIRECT_MESSAGES,
    GatewayIntents.GUILDS,
    GatewayIntents.GUILD_MESSAGES,
    GatewayIntents.GUILD_PRESENCES,
    GatewayIntents.GUILD_MEMBERS,
    GatewayIntents.GUILD_INTEGRATIONS
]);

const guild = await client.guilds.resolve('886953289122467852');

if(guild == undefined){
    console.log('Keine guild!!')
}else{

    client.on("messageCreate", async (msg: Message): Promise<void> => {
        // deno-lint-ignore prefer-const
        let content = msg.content;

        if(content === "!Ping"){
            msg.reply('Pong');
        }
        if (content == "!Presence") {
            // deno-lint-ignore prefer-const
            let authorPresence = await guild.presences.resolve(msg.author.id);
            msg.reply(`Your presence status: \`${authorPresence?.status}\``);
        }
    })
}

client.on("presenceUpdate", async (presenceUpdate: Presence) => {
    if(presenceUpdate.status != 'offline'){
        // deno-lint-ignore prefer-const
        let user = await findManyUserByID(undefined,parseInt(presenceUpdate.user.id))
        if(user.length != 0){
            user.forEach(element => {
                sendMessage(element.chatID, `The user _${element.name}_ is now *${presenceUpdate.status}*!`)
            });
        }
    }
})