import {fetchMessages, postUserMessage} from "../repository/messageDataAccess.js";
import {getUserById} from "../repository/userDataAccess.js";

export async function addMessage(message, time, id) {

    try {

        const user = await getUserById(id);

        console.log("username: " + user.username)

        const isPosted = await postUserMessage(message, time, user.username);

        if (!isPosted.acknowledged) {
            return {success: false, message: "Failed to post message"}
        }
        return {success: true, message: "Posted message"}

    } catch (error) {
        throw error;
    }
}

export async function getAllMessages(){
    try {
        const messages = await fetchMessages();

        if(messages.length === 0){
            return {success:false, message:"No messages posted.", messages:messages}
        }

        return {success:true, message:"Retrieved messages", messages:messages};

    }catch (error){
        throw error;
    }
}