//import{ Client, Message, Intents } from './deps.ts';
import{ Client, Message, GatewayIntents, MembersManager, ChannelsManager, UsersManager } from "https://code.harmony.rocks/c2565e60ffc52580368f99bfc970832a19ad37b2/mod.ts";
import{ Guild } from './deps.ts';
import type { GuildPayload } from './deps.ts'
//import { Member, User } from './deps.ts';
//import Discord, {Client, Member, Guild} from 'discord.js';
import "https://deno.land/x/dot_env@0.2.0/load.ts"


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

client.on("messageCreate", (msg: Message): void => {
    let content = msg.content;

    if(content === "Ping"){
        msg.reply('Pong');
    }
});

let guild = await client.guilds.resolve('886953289122467852');

if(guild == undefined){
    console.log('Keine guild!!')
}else{



    //console.log( await guild.presences.cacheName)
    const m = new MembersManager(client, guild);
    const membersList = await m.fetchList(10)
    membersList;

    const cm = new ChannelsManager(client);

    let gcm = guild.channels
    const usersman = new UsersManager(client)

    const memberLeon = await guild.members.fetch('672215070352211968')

    let userLeon = await usersman.fetch('672215070352211968')
    //console.log(userLeon)

    const userIDSinneckLAP = '946431511983448064'
    let myPresence = await guild.presences.resolve('672215070352211968')
    console.log(myPresence?.status)


}