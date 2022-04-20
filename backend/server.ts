import { json, opine } from "https://deno.land/x/opine@2.1.5/mod.ts";
import { findChatByChatID, findManyChannelByID, findManyGuildByID, findManyUserByID, insertChannel, insertGuild, insertUser, deleteChannel, deleteUser, deleteGuild, deleteChannelsByID, deleteGuildsByID, deleteUsersByID } from "./aloedb.ts";

const app = opine();
const pathToIndexHTMLFile = `${Deno.cwd()}/DiscordAttendenceNotification/frontend/discordAttendence/dist/`;
console.log(pathToIndexHTMLFile)

// deno-lint-ignore no-explicit-any
app.get("/", function (_req: any, res: any) {
    res.sendFile(pathToIndexHTMLFile);
});

// deno-lint-ignore no-explicit-any
app.get("/bc8a8be16f74d68f84183c5dd4fb311be7b0eb1500bd3a9270532f5aa1007319.js", function (_req: any, res: any) {
    res.sendFile(`${Deno.cwd()}/DiscordAttendenceNotification/frontend/discordAttendence/dist/bc8a8be16f74d68f84183c5dd4fb311be7b0eb1500bd3a9270532f5aa1007319.js`);
});

// deno-lint-ignore no-explicit-any
app.get("/83b0a281833f5bd0c7fdc6f54ee9c7f9317a0f25843319c3d5012becd41a2c47.css", function (_req: any, res: any) {
    res.sendFile(`${Deno.cwd()}/DiscordAttendenceNotification/frontend/discordAttendence/dist/83b0a281833f5bd0c7fdc6f54ee9c7f9317a0f25843319c3d5012becd41a2c47.css`);
});

// deno-lint-ignore no-explicit-any
app.get("/012b5562f52ecbcafdbd3a676c923b7e79c427735af2c0a043abf53d83b61ae6.png", function (_req: any, res: any) {
    res.sendFile(`${Deno.cwd()}/DiscordAttendenceNotification/frontend/discordAttendence/dist/012b5562f52ecbcafdbd3a676c923b7e79c427735af2c0a043abf53d83b61ae6.png`);
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/chatId/:chatID", async function (req: any, res: any) {
    const chatID = await findChatByChatID(parseInt(req.params.chatID))
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    if(chatID?.chatID) res.send({"exists": true})
    else res.send({"exists":false})
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/channelByID/:chatID", async function (req: any, res: any) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    res.send(await findManyChannelByID(parseInt(req.params.chatID)))
})

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/guildByID/:chatID", async function (req: any, res: any) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    res.send(await findManyGuildByID(parseInt(req.params.chatID)))
})

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/userByID/:chatID", async function (req: any, res: any) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    res.send(await findManyUserByID(parseInt(req.params.chatID)))
})

app.use(json());

// deno-lint-ignore no-explicit-any
app.post("/api/v1/persistence/post/channel/", async function (req: any, res: any) {
    const newChannel = await req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    console.log(newChannel)
    if(await newChannel.channelID !== undefined && await newChannel.chatID !== undefined){
        if(await newChannel.name === "") newChannel.name = undefined
        insertChannel(newChannel)
        res.send({"status":"success"})
    }else{
        res.send({"status":"failed"})
    }
});

// deno-lint-ignore no-explicit-any
app.post("/api/v1/persistence/post/user/", async function (req: any, res: any) {
    const newUser = await req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    console.log(newUser)
    if(await newUser.userID !== undefined && await newUser.chatID !== undefined){
        if(await newUser.name === "") newUser.name = undefined
        insertUser(newUser)
        res.send({"status":"success"})
    }else{
        res.send({"status":"failed"})
    }
});

// deno-lint-ignore no-explicit-any
app.post("/api/v1/persistence/post/guild/", function (req: any, res: any) {
    const newGuild = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    if(newGuild.userID !== undefined && newGuild.chatID !== undefined){
        if(newGuild.name === "") newGuild.name = undefined
        insertGuild(newGuild)
        res.send({"status":"success"})
    }else{
        res.send({"status":"failed"})
    }
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/delete/channel/", function (req: any, res: any) {
    const channel = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    if(channel.chatID !== undefined && channel.channelID !== undefined){
        deleteChannel(channel)
    }
    res.send({"status":"deleted given channel (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/delete/user/", function (req: any, res: any) {
    const user = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    if(user.chatID !== undefined && user.userID !== undefined){
        deleteUser(user)
    }
    res.send({"status":"deleted given user (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/delete/guild/", function (req: any, res: any) {
    const guild = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    if(guild.chatID !== undefined && guild.guildID !== undefined){
        deleteGuild(guild)
    }
    res.send({"status":"deleted given guild (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/deleteAll/channel/", function (req: any, res: any) {
    const channel = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    if(channel.chatID !== undefined){
        deleteChannelsByID(parseInt(channel.chatID));
    }
    res.send({"status":"deleted given channels (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/deleteAll/user/", function (req: any, res: any) {
    const user = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    if(user.chatID !== undefined){
        deleteUsersByID(parseInt(user.chatID));
    }
    res.send({"status":"deleted given users (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/deleteAll/guild/", function (req: any, res: any) {
    const guild = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8800')
    if(guild.chatID !== undefined){
        deleteGuildsByID(parseInt(guild.chatID));
    }
    res.send({"status":"deleted given guilds (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.post("/test", async function (req: any, res: any) {
    console.log(await req.parsedBody)
    res.send(req.body);
})

app.listen(
    8800,
    () => console.log("server has started on http://localhost:8800 🚀"),
);
