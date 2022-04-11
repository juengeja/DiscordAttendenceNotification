import { opine } from "https://deno.land/x/opine@2.1.5/mod.ts";
import { findChatByChatID, findManyChannelByID, findManyGuildByID, findManyUserByID } from "./aloedb.ts";
import { insertChannel, insertGuild, insertUser } from "./aloedb.ts";

const app = opine();

// deno-lint-ignore no-explicit-any
app.get("/", function (req: any, res: any) {
    res.send(req);
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/chatId/:chatID", async function (req: any, res: any) {
    const chatID = await findChatByChatID(parseInt(req.params.chatID))
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(chatID?.chatID) res.send(true)
    else res.send(false)
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

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/post/channel/:channel", function (req: any, res: any) {
    const newChannel = req.params.channel
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(newChannel.channelID != undefined && newChannel.chatID != undefined){
        if(newChannel.name == "") newChannel.name = undefined
        insertChannel(newChannel)
        res.send("success")
    }else{
        res.send("failed")
    }
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/post/user/:user", function (req: any, res: any) {
    const newUser = req.params.user
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(newUser.userID != undefined && newUser.chatID != undefined){
        if(newUser.name == "") newUser.name = undefined
        insertUser(newUser)
        res.send("success")
    }else{
        res.send("failed")
    }
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/post/guild/:guild", function (req: any, res: any) {
    const newGuild = req.params.guild
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    if(newGuild.userID != undefined && newGuild.chatID != undefined){
        if(newGuild.name == "") newGuild.name = undefined
        insertGuild(newGuild)
        res.send("success")
    }else{
        res.send("failed")
    }
});

// deno-lint-ignore no-explicit-any
app.post("/test", function (req: any, res: any) {
    console.log(req)
    res.send("Hello there! ---> General Kenobi!")
})

app.listen(
    8800,
    () => console.log("server has started on http://localhost:8800 🚀"),
);
