import { opine } from "https://deno.land/x/opine@2.1.4/mod.ts";
import { findChatByChatID, findManyChannelByID, findManyGuildByID, findManyUserByID } from "./aloedb.ts";
import { insertChannel, insertGuild, insertUser } from "./aloedb.ts";

const app = opine();

app.use((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002')
})

// deno-lint-ignore no-explicit-any
app.get("/", function (req: any, res: any) {
    res.send(req);
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/chatId/:chatID", async function (req: any, res: any) {
    const chatID = await findChatByChatID(parseInt(req.params.chatID))
    if(chatID?.chatID) res.send(true)
    else res.send(false)
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/channelByID/:chatID", async function (req: any, res: any) {
    res.send(await findManyChannelByID(parseInt(req.params.chatID)))
})

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/guildByID/:chatID", async function (req: any, res: any) {
    res.send(await findManyGuildByID(parseInt(req.params.chatID)))
})

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/get/userByID/:chatID", async function (req: any, res: any) {
    res.send(await findManyUserByID(parseInt(req.params.chatID)))
})

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/put/channel/:channel", function (req: any, res: any) {
    const newChannel = req.params.channel
    if(newChannel.channelID != undefined && newChannel.chatID != undefined){
        if(newChannel.name == "") newChannel.name = undefined
        insertChannel(newChannel)
        res.send("success")
    }else{
        res.send("failed")
    }
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/put/user/:user", function (req: any, res: any) {
    const newUser = req.params.user
    if(newUser.userID != undefined && newUser.chatID != undefined){
        if(newUser.name == "") newUser.name = undefined
        insertUser(newUser)
        res.send("success")
    }else{
        res.send("failed")
    }
});

// deno-lint-ignore no-explicit-any
app.get("/api/v1/persistence/put/guild/:guild", function (req: any, res: any) {
    const newGuild = req.params.guild
    if(newGuild.userID != undefined && newGuild.chatID != undefined){
        if(newGuild.name == "") newGuild.name = undefined
        insertGuild(newGuild)
        res.send("success")
    }else{
        res.send("failed")
    }
});

app.listen(
    3002,
    () => console.log("server has started on http://localhost:3002 🚀"),
);
