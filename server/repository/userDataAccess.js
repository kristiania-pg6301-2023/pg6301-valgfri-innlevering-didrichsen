import {MongoClient} from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB;
const client = new MongoClient(url);

export async function postUser(username,password){
    try {

        await client.connect();
        const db = await client.db("messageApp");
        const collection = db.collection("users");
        return await collection.insertOne({username:username, password:password});

    } catch (error) {
        throw error;
    }
}

export async function getUserCredentials(username, password){
    try {
        await client.connect();
        const db = await client.db("messageApp");
        const collection = db.collection("users");
        return await collection.find({username:username, password:password}).toArray();

    } catch (error){
        throw error;
    }
}