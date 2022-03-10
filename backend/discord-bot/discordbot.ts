import{ Client, Message, GatewayIntents, MembersManager, UsersManager } from "https://code.harmony.rocks/c2565e60ffc52580368f99bfc970832a19ad37b2";
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
            msg.reply(`Your presence status: ${authorPresence?.status}`);
        }
    });


    const m = new MembersManager(client, guild);
    const membersList = await m.fetchList(10)
    membersList;

    const usersman = new UsersManager(client)

    const memberLeon = await guild.members.resolve('672215070352211968')
    if(memberLeon != undefined){
        console.log(memberLeon.id)
    }

    const userLeon = await usersman.fetch('672215070352211968')
    console.log(userLeon.id)

    const _userIDSinneckLAP = '946431511983448064'
    const myPresence = await guild.presences.resolve('672215070352211968')
    console.log(myPresence?.status)

}
/*
client.on("presenceUpdate", (memberLeon, newGuildMember) => {
    if (memberLeon.id !== "YOURID") return false; // Checking if the GuildMember is a specific user.

    if (memberLeon.presence.status !== newGuildMember.presence.status) { // Checking if the Presence is the same.
        if (newGuildMember.presence.status == "online") { // Checking if the GuildMember is online.
            const Channel = client.channels.get("CHANNELID");
            if (!Channel) return console.error("Invalid channel.");
            if (newGuildMember.guild.id !== Channel.guild.id) return false; // Making sure the Message gets sent once.

            Channel.send(`${newGuildMember.user.tag} is now online!`);
        }
    }
})
*/