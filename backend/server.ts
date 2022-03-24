import { opine } from "https://deno.land/x/opine@2.1.4/mod.ts";

const app = opine();

app.get("/", function (req: any, res: any) {
    res.send("Hello World");
});

app.get("/api/v1/doeschatidexist/chatId/:chatId", function (req: any, res: any) {

    // call aloedb
    res.send(`chatId ${req.params.chatId} exists`);
});

app.listen(
    3002,
    () => console.log("server has started on http://localhost:3002 🚀"),
);
