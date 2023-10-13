import {postUserMessage} from "../repository/messageDataAccess.js";

export async function addMessage(message, time){

    try {
        const isPosted = await postUserMessage(message, time);

        if (!isPosted.acknowledged){
            return {success: false, message: "Failed to post message"}
        }
        return {success: true, message: "Posted message"}

    } catch (error){
        throw error;
    }
}