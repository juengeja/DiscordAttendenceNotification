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

//console.log(await client.guilds.memberCacheSize("886953289122467852"));
//console.log(await client.guilds.memberCacheSize("947821198560100372"));
//console.log(await client.guilds._get());
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

//console.log(await client.channels.messageCacheSize("test-text"));
let user = await client.users.fetch('415201034080878592')
//console.log(user)
//console.log(client.channels.sendMessage('947821198560100372','Ping'));

/*
const u = new User(client, client.guilds.memberCacheSize )

const m = new Member(    
    client, MemberPayload, "User", client.guilds.get("886953289122467852"));
m.guild
*/



// Möglichkeit 1
const gp: GuildPayload = {
id: "886953289122467852",
name: "886953289122467852",
owner_id: "",
region: "",
afk_timeout: 0,
verification_level: 0,
default_message_notifications: 0,
explicit_content_filter: 0,
roles: [],
emojis: [],
features: [],
mfa_level: "",
system_channel_flags: "",
premium_tier: 0,
preferred_locale: "",
nsfw: false
}; 


//const gilde = new Guild(client, gp);

//console.log(String(gilde.memberCount));

//const ml = await gilde.members.array();
//console.log(ml[0]);

// Möglichkeit 2
const gild = await client.guilds.get("886953289122467852");
const memberCount = await gild?.members.fetchList();
//console.log(memberCount);

/*
const m = new MembersManager(client, gilde);
const id = await client.guilds._get("566596189827629066")
const gilde = new Guild(client, client.guilds._get("566596189827629066"));
const m = new MembersManager(client, (566596189827629066))
*/
//const test = await client.gateway.requestMembers("566596189827629066")

client.on("ready", (Member) => {
    Member = Number(client._id);
    //console.log(Member);
})

//client.connect(Token, Intents.None);
//console.log(Token);

/*
client.on("ready", () => {
    let guild = client.guilds.get("886953289122467852");
    console.log(guild.member);

    setInterval(async function (){
        const onlineMembers: String[] = await guild.member.filter(m, (Member: Member) => !m.user.bot && m.presence?.status != "offline").size;
    }, 1000);
})
*/

