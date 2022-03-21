import { Database } from 'https://deno.land/x/aloedb/mod.ts';
export { insertChat, insertChannel, insertGuild, insertUser };
export { findChatByChatID, findChannelByChatID, findGuildByChatID, findUserByChatID };
export { findManyChannelByChatID, findManyGuildByChatID, findManyUserByChatID };

interface Chat {
    chatID: number
}

interface Channel {
    channelID: number,
    chatID: number
}

interface Guild {
    guildID: number,
    chatID: number
}

interface User {
    userID: number,
    chatID: number
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

function findChatByChatID(chatID: number){
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

function findManyChannelByChatID(chatID: number){
    return channelDB.findMany({chatID:chatID})
}

function findManyGuildByChatID(chatID: number){
    return guildDB.findMany({chatID:chatID})
}

function findManyUserByChatID(chatID: number){
    return userDB.findMany({chatID:chatID})
}