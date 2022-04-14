import { Database } from "https://deno.land/x/aloedb@0.9.0/mod.ts";
export { insertChat, insertChannel, insertGuild, insertUser, findChatByChatID, findChannelByChatID, findGuildByChatID, findUserByChatID, findManyChannelByID, findManyGuildByID, findManyUserByID, deleteChannel, deleteUser, deleteGuild, deleteChannelsByID, deleteUsersByID, deleteGuildsByID };

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

const chatDB = new Database<Chat>({path:`${Deno.cwd()}/backend/DatabaseFiles/Chat.json`, autosave:true});
const channelDB = new Database<Channel>({path:`${Deno.cwd()}/backend/DatabaseFiles/Channel.json`, autosave:true});
const guildDB = new Database<Guild>({path:`${Deno.cwd()}/backend/DatabaseFiles/Guild.json`, autosave:true});
const userDB = new Database<User>({path:`${Deno.cwd()}/backend/DatabaseFiles/User.json`, autosave:true});

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

function findChatByChatID(chatID: number): Promise<Chat | null> {
    return chatDB.findOne({chatID:chatID})
}

function findChannelByChatID(chatID: number): Promise<Channel | null> {
    return channelDB.findOne({chatID:chatID})
}

function findGuildByChatID(chatID: number): Promise<Guild | null> {
    return guildDB.findOne({chatID:chatID})
}

function findUserByChatID(chatID: number): Promise<User | null> {
    return userDB.findOne({chatID:chatID})
}

function findManyChannelByID(chatID?: number, channelID?: number): Promise<Channel[]> {
    if(chatID == undefined) return channelDB.findMany({channelID:channelID});
    if(channelID == undefined) return channelDB.findMany({chatID:chatID})
    return channelDB.findMany({chatID:chatID, channelID:channelID})
}

function findManyGuildByID(chatID?: number, guildID?: number): Promise<Guild[]> {
    if(chatID == undefined) return guildDB.findMany({guildID:guildID});
    if(guildID == undefined) return guildDB.findMany({chatID:chatID})
    return guildDB.findMany({chatID:chatID, guildID:guildID})
}

function findManyUserByID(chatID?: number, userID?: number): Promise<User[]> {
    if(chatID == undefined) return userDB.findMany({userID:userID});
    if(userID == undefined) return userDB.findMany({chatID:chatID})
    return userDB.findMany({chatID:chatID, userID:userID})
}

function deleteChannel(channel: Channel): void {
    channelDB.deleteOne(channel);
}

function deleteUser(user: User): void {
    userDB.deleteOne(user);
}

function deleteGuild(guild: Guild): void {
    guildDB.deleteOne(guild);
}

function deleteChannelsByID(chatID: number): void {
    channelDB.deleteMany({chatID:chatID})
}

function deleteUsersByID(chatID: number): void {
    userDB.deleteMany({chatID:chatID})
}

function deleteGuildsByID(chatID: number): void {
    guildDB.deleteMany({chatID:chatID})
}