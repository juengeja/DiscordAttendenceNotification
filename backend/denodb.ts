import { Database } from 'https://deno.land/x/aloedb/mod.ts';

interface Channels {
    channelID: number,
    chatID: number
}

const db = new Database<Channels>({path:"./channels.json", autosave:true});

//await db.insertOne({channelID:123456,chatID:654321})
//await db.insertOne({channelID:23,chatID:2})

await db.save()

let reply = await db.findOne({channelID:2})
console.log(reply)
reply = await db.findOne({chatID:2})
console.log(reply?.channelID)

const arrayReply = await db.findMany({chatID:2})
console.log(arrayReply)