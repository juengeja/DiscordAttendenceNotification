import { createClient } from "https://denopkg.com/chiefbiiko/dynamodb@master/mod.ts";
import "https://deno.land/x/dot_env@0.2.0/load.ts";
//import { DynamoDB } from "https://sdk.amazonaws.com/js/aws-sdk-2.1095.0.min.js";

let accessKeyId = Deno.env.get("ACCESSKEYID");
let secretAccessKey = Deno.env.get("SECRETACCESSKEY");
let region = Deno.env.get("REGION");

if(accessKeyId == undefined) accessKeyId = "";
if(secretAccessKey == undefined) secretAccessKey = "";
if(region == undefined) region = "";

const credentials = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken: undefined
}
const clientConfig = {
    credentials: credentials,
    region: region,
    profile: undefined,
    cononicalUri: undefined,
    port: undefined,
    host: undefined
}

// if config/credentials not passed they will be read from the env/fs
const dyno = createClient(clientConfig);

// the client has all of DynamoDB's operations as camelCased async methods
const result = await dyno.listTables();

console.log(result)

const params = {
    TableName : "Chats",
    KeyConditionExpression: "#chat_id = :chat_id",
    ExpressionAttributeNames: {
        "#chat_id": "chat_id" 
    },
    ExpressionAttributeValues: {
        ":chat_id": 1244862121
    }
};

const chat_id = await dyno.query(params);

//const chatString = JSON.stringify(chat_id)
console.log(chat_id)

//const client = new DynamoDB();
