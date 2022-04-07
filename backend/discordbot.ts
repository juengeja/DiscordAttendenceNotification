import { Client, Message, GatewayIntents, Presence, VoiceState } from "https://deno.land/x/harmony@v2.6.0/mod.ts";
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { sendMessage } from "./telegramChatbot.ts";
import { findManyChannelByID, findManyGuildByID, findManyUserByID } from "./aloedb.ts";

const client = new Client();
const Token = Deno.env.get("DISCORD_TOKEN");

client.connect(Token, [
    GatewayIntents.DIRECT_MESSAGES,
    GatewayIntents.GUILDS,
    GatewayIntents.GUILD_MESSAGES,
    GatewayIntents.GUILD_PRESENCES,
    GatewayIntents.GUILD_MEMBERS,
    GatewayIntents.GUILD_INTEGRATIONS,
    GatewayIntents.GUILD_VOICE_STATES
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
    if(presenceUpdate.status == 'online'){
        // deno-lint-ignore prefer-const
        let user = await findManyUserByID(undefined,parseInt(presenceUpdate.user.id))
        if(user.length != 0){
            user.forEach(element => {
                let name;
                if(element.name == undefined) name = presenceUpdate.user.username
                else name = element.name
                sendMessage(element.chatID, `The user _${name}_ is now *${presenceUpdate.status}*!`)
            });
        }
    }
})

client.on("voiceStateUpdate", async (voiceStateUpdate: VoiceState) => {
    const channel = voiceStateUpdate.channel
    const user = voiceStateUpdate.user

    if(channel == null) return;

    const channelSubscribers = await findManyChannelByID(undefined, parseInt(channel.id))
    const userSubscribers = await findManyUserByID(undefined, parseInt(user.id))

    channelSubscribers.forEach(subscribedChannel => {
        let name;
        userSubscribers.forEach(subscribedUser => {
            if(subscribedUser.userID == parseInt(user.id)) return;
        });
        if(subscribedChannel.name == undefined) name = channel.name;
        else name = subscribedChannel.name;
        if (name != undefined && user.username != undefined) {
            sendMessage(subscribedChannel.chatID, `The user _${user.username}_ joined the voice channel _${name}_ that you subscribed to.`)
        }
        if(name != undefined && user.username == undefined){
            sendMessage(subscribedChannel.chatID, `The user with ID _${user.id}_ joined the voice channel _${name}_ that you subscribed to.`)
        }
        if (name == undefined && user.username != undefined) {
            sendMessage(subscribedChannel.chatID, `The user _${user.username}_ joined the voice channel with ID _${subscribedChannel.channelID}_ that you subscribed to.`)
        }
        if(name == undefined && user.username == undefined){
            sendMessage(subscribedChannel.chatID, `The user with ID _${user.id}_ joined the voice channel with ID _${subscribedChannel.channelID}_ that you subscribed to.`)
        }
    });

    userSubscribers.forEach(subscribedUser => {
        let username;
        if(subscribedUser.name == undefined) username = user.username;
        if(channel.name == undefined && username == undefined){
            sendMessage(subscribedUser.chatID, `The user with ID _${user.id}_ that you subscribed to joined the voice channel with ID _${channel.id}_.`)
        }
        if(channel.name == undefined && username != undefined){
            sendMessage(subscribedUser.chatID, `The user _${username}_ that you subscribed to joined the voice channel with ID _${channel.id}_.`)
        }
        if(channel.name != undefined && username == undefined){
            sendMessage(subscribedUser.chatID, `The user with ID _${user.id}_ that you subscribed to joined the voice channel _${channel.name}_.`)
        }
        if(channel.name != undefined && username != undefined){
            sendMessage(subscribedUser.chatID, `The user _${username}_ that you subscribed to joined the voice channel _${channel.name}_.`)
        }
    });
})