import {MongoClient} from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB;
const client = new MongoClient(url);

export async function postUserMessage(message, time) {
    try {
        await client.connect();
        const db = await client.db("messageApp");
        const collection = db.collection("snapboard");
        return await collection.insertOne({message: message, time: time});

    } catch (error) {
        throw error;
    }
}
