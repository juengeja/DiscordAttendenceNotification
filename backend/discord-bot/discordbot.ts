import { Client, Message, Intents } from './deps.ts';
import { Guild } from './deps.ts';
//import { Guild, MembersManager, Member, GuildManager, BaseManager } from './deps.ts';
//import Discord, {Client, Member, Guild} from 'discord.js';

const client = new Client();
//const client = new Discord.Client();

const Token = Deno.env.get("DISCORD_TOKEN");

client.on("messageCreate", (msg: Message): void => {
    const content = msg.content;

    if(content === "Ping"){
        msg.reply('Pong');
    }
});

const guild = client.guilds.get("566596189827629066");
console.log(guild);

/*
Discord.exports.run = async () => {
    const guild = client.guilds.get("566596189827629066");
    setInterval(function () {
       var memberCount = guild.members.filter((member): Member => !member.user.bot).size;  
       var memberCountChannel = client.channels.get("626462657817477131");
       memberCountChannel.setName(`${guild.name} has ${memberCount} members!`);
    }, 1000);
 };*/

/*
const test = client.guilds.fetch("886953289122467852");
console.log(test);
*/

//const guild = client.guilds.get("886953289122467852");

/*
client.on("ready", () => {
    let guild = client.guilds.get("886953289122467852");
    console.log(guild.member);

    setInterval(async function (){
        const onlineMembers: String[] = await guild.member.filter(m, (Member: Member) => !m.user.bot && m.presence?.status != "offline").size;
    }, 1000);
})
*/
/*
setInterval(function (){
    const members = client.channels.get("946557663003693056");
    console.log(String(members));
})
*/

//client.connect(Token, Intents.None);
client.connect(Token, Intents.None);

console.log(Token);