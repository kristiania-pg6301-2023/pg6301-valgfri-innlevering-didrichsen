import {MongoClient} from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB;
const client = new MongoClient(url);

export async function postUser(username,password){
    try {
        console.log("WITHIN TRY")
        await client.connect();
        const db = await client.db("messageApp");
        const collection = await db.collection("users");
        return collection.insertOne({username:username, password:password});

    } catch (error) {
        console.log("WITHIN ERROR CATCH BLOCK")
        throw error;
    }
}