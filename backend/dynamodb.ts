import { DynamoDB } from "https://deno.land/x/aws_api@v0.6.0/services/dynamodb/mod.ts";
import { ApiFactory, AwsEndpointResolver } from "https://deno.land/x/aws_api@v0.6.0/client/mod.ts";
import "https://deno.land/x/dot_env@0.2.0/load.ts";

let accessKeyId = Deno.env.get("ACCESSKEYID");
let secretAccessKey = Deno.env.get("SECRETACCESSKEY");
let region = Deno.env.get("REGION");

if(accessKeyId == undefined) accessKeyId = "";
if(secretAccessKey == undefined) secretAccessKey = "";
if(region == undefined) region = "";

const credentials = {
    awsAccessKeyId: accessKeyId,
    awsSecretKey: secretAccessKey,
    sessionToken: undefined
}

const endPointResolver = new AwsEndpointResolver()

const opt = {
    credentailProvider: undefined,
    credentials: credentials,
    region: region,
    fixedEndpoint: undefined,
    endpointResolver: endPointResolver,
    extras: undefined
}

const dynamodbClient = new ApiFactory(opt).makeNew(DynamoDB);

console.log(await dynamodbClient.listTables())