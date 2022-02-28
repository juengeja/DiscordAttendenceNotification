import { Client, Message, Intents } from './deps.ts';

const client = new Client();

const Token = Deno.env.get("BOT_TOKEN");


client.on("messageCreate", (msg: Message): void => {
    const content = msg.content;

    if(content === "Ping"){
        msg.reply('Pong');
    }
});

const guild = client.guilds.get("946557663003693056");

/*
setInterval(function () {
    var memberCount = guild.members.filter(member => !member.user.bot).size;
    var memberCountChannel = client.channels.get("626462657817477131");
    memberCountChannel.setName(${guild.name} has ${memberCount} members!);
 }, 1000);
 */
setInterval(function (){
    const members = client.channels.get("886953289122467852");
    console.log(String(members));
})

/* Endlosschleifenversion
client.on("ready", (user): void => {
    const list = client.guilds.array();


})*/



client.connect(Token, Intents.None);

console.log(Token);

/*
client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => {
    if(newVoiceState.channel) {
        console.log(${newVoiceState.member?.user.tag} connected to ${newVoiceState.channel.name}.);
    } else if (oldVoiceState.channel) { // The member disconnected from a channel.
        console.log(${oldVoiceState.member?.user.tag} disconnected from ${oldVoiceState.channel.name}.)
    };
});
*/