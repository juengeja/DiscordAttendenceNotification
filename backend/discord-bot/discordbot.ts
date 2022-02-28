import { Client, Message, Intents } from './deps.ts';
import { Presence, ClientPresence, Member } from './deps.ts'; 

//import Discord, {Intents} from 'Discord.js';

const client = new Client();
//const client = new Discord.Client([Intents.Flags.GUILDS, Intents.Flags.GUILD_MESSAGES]);

const Token = Deno.env.get("DISCORD_TOKEN");

/*
client.on("messageCreate", (msg: Message): void => {
    const content = msg.content;

    if(content === "Ping"){
        msg.reply('Pong');
    }
});
*/

//const guild = client.guilds.get("886953289122467852");


client.on("ready", () => {
    const guild = client.guilds.get("886953289122467852");
    //console.log(guild.member);

    const a = guild.member.filter()
    setInterval(async function (){
        const onlineMembers: any[] = await guild.member.filter(m => !m.user.bot && m.presence?.status != "offline").size;
    }, 1000);
})

/*
setInterval(function (){
    const members = client.channels.get("946557663003693056");
    console.log(String(members));
})
*/

client.connect(Token, Intents.None);

console.log(Token);