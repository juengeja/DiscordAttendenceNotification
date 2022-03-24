import { Database } from 'https://deno.land/x/aloedb/mod.ts';
export { insertChat, insertChannel, insertGuild, insertUser };
export { findChatByChatID, findChannelByChatID, findGuildByChatID, findUserByChatID };
export { findManyChannelByID, findManyGuildByID, findManyUserByID };

interface Chat {
    chatID: number
}

interface Channel {
    channelID: number,
    chatID: number,
    name: string
}

interface Guild {
    guildID: number,
    chatID: number,
    name: string
}

interface User {
    userID: number,
    chatID: number, 
    name: string
}

const chatDB = new Database<Chat>({path:"./Chat.json", autosave:true});
const channelDB = new Database<Channel>({path:"./Channel.json", autosave:true});
const guildDB = new Database<Guild>({path:"./Guild.json", autosave:true});
const userDB = new Database<User>({path:"./User.json", autosave:true});

function insertChat(chat: Chat){
    chatDB.insertOne(chat)
}

function insertChannel(channel: Channel){
    channelDB.insertOne(channel)
}

function insertGuild(guild: Guild){
    guildDB.insertOne(guild)
}

function insertUser(user: User){
    userDB.insertOne(user)
}

function findChatByChatID(chatID: number): Chat {
    return chatDB.findOne({chatID:chatID})
}

function findChannelByChatID(chatID: number){
    return channelDB.findOne({chatID:chatID})
}

function findGuildByChatID(chatID: number){
    return guildDB.findOne({chatID:chatID})
}

function findUserByChatID(chatID: number){
    return userDB.findOne({chatID:chatID})
}

function findManyChannelByID(chatID?: number, channelID?: number){
    if(chatID == undefined) return channelDB.findMany({channelID:channelID});
    if(channelID == undefined) return channelDB.findMany({chatID:chatID})
    return channelDB.findMany({chatID:chatID, channelID:channelID})
}

function findManyGuildByID(chatID?: number, guildID?: number){
    if(chatID == undefined) return guildDB.findMany({guildID:guildID});
    if(guildID == undefined) return guildDB.findMany({chatID:chatID})
    return guildDB.findMany({chatID:chatID, guildID:guildID})
}

function findManyUserByID(chatID?: number, userID?: number){
    if(chatID == undefined) return userDB.findMany({userID:userID});
    if(userID == undefined) return userDB.findMany({chatID:chatID})
    return userDB.findMany({chatID:chatID, userID:userID})
}
