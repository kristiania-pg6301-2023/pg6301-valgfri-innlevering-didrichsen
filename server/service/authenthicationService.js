import {getUserCredentials, postUser} from "../repository/userDataAccess.js";

export async function registerUser(username, password){
    try{

        const isPosted = await postUser(username, password);

        console.log(isPosted.acknowledged)
        if(!isPosted.acknowledged){
            console.log("failed to post user")
            return {success:false,message:"Failed to post user to database"};
        }
        return {success:true,message:""};
    }
    catch (error){
    }
}

export async function userLogin(username, password){
    try {

        const isSuccessful = await getUserCredentials(username, password);

        if (isSuccessful.length !== 1){
            return {success:false,message:"Login failed"};
        }
        return {success:true, message: "Successful login"};
    } catch (error){
        throw error;
    }
}