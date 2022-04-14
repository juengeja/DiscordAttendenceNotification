import { json, opine } from "https://deno.land/x/opine@2.1.5/mod.ts";
import { findChatByChatID, findManyChannelByID, findManyGuildByID, findManyUserByID } from "./aloedb.ts";
import { insertChannel, insertGuild, insertUser } from "./aloedb.ts";
import { deleteChannel, deleteUser, deleteGuild } from "./aloedb.ts";
import { deleteChannelsByID, deleteGuildsByID, deleteUsersByID } from "./aloedb.ts";

const app = opine();

// deno-lint-ignore no-explicit-any
app.get("/", function (req: any, res: any) {
    res.send(req);
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/chatId/:chatID", async function (req: any, res: any) {
    const chatID = await findChatByChatID(parseInt(req.params.chatID))
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(chatID?.chatID) res.send({"exists": true})
    else res.send({"exists":false})
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/channelByID/:chatID", async function (req: any, res: any) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    res.send(await findManyChannelByID(parseInt(req.params.chatID)))
})

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/guildByID/:chatID", async function (req: any, res: any) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    res.send(await findManyGuildByID(parseInt(req.params.chatID)))
})

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/userByID/:chatID", async function (req: any, res: any) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    res.send(await findManyUserByID(parseInt(req.params.chatID)))
})

app.use(json());

// deno-lint-ignore no-explicit-any
app.post("/api/v1/persistence/post/channel/", function (req: any, res: any) {
    const newChannel = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(newChannel.channelID != undefined && newChannel.chatID != undefined){
        if(newChannel.name == "") newChannel.name = undefined
        insertChannel(newChannel)
        res.send({"status":"success"})
    }else{
        res.send({"status":"failed"})
    }
});

// deno-lint-ignore no-explicit-any
app.post("/api/v1/persistence/post/user/", function (req: any, res: any) {
    const newUser = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(newUser.userID != undefined && newUser.chatID != undefined){
        if(newUser.name == "") newUser.name = undefined
        insertUser(newUser)
        res.send({"status":"success"})
    }else{
        res.send({"status":"failed"})
    }
});

// deno-lint-ignore no-explicit-any
app.post("/api/v1/persistence/post/guild/", function (req: any, res: any) {
    const newGuild = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(newGuild.userID != undefined && newGuild.chatID != undefined){
        if(newGuild.name == "") newGuild.name = undefined
        insertGuild(newGuild)
        res.send({"status":"success"})
    }else{
        res.send({"status":"failed"})
    }
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/delete/channel/", function (req: any, res: any) {
    const channel = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(channel.chatID != undefined && channel.channelID != undefined){
        deleteChannel(channel)
    }
    res.send({"status":"deleted given channel (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/delete/user/", function (req: any, res: any) {
    const user = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(user.chatID != undefined && user.userID != undefined){
        deleteUser(user)
    }
    res.send({"status":"deleted given user (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/delete/guild/", function (req: any, res: any) {
    const guild = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(guild.chatID != undefined && guild.guildID != undefined){
        deleteGuild(guild)
    }
    res.send({"status":"deleted given guild (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/deleteAll/channel/", function (req: any, res: any) {
    const channel = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(channel.chatID != undefined){
        deleteChannelsByID(parseInt(channel.chatID));
    }
    res.send({"status":"deleted given channels (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/deleteAll/user/", function (req: any, res: any) {
    const user = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(user.chatID != undefined){
        deleteUsersByID(parseInt(user.chatID));
    }
    res.send({"status":"deleted given users (if existed)"})
});

// deno-lint-ignore no-explicit-any
app.delete("/api/v1/persistence/deleteAll/guild/", function (req: any, res: any) {
    const guild = req.parsedBody
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(guild.chatID != undefined){
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
