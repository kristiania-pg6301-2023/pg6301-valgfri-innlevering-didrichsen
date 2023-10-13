import {getUserCredentials, postUser} from "../repository/userDataAccess.js";

export async function registerUser(username, password){
    try{

        const userObject = await postUser(username, password);

        if(!userObject.acknowledged){
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

        const userCredentials = await getUserCredentials(username, password);

        const id = userCredentials[0]._id;
        if (userCredentials.length !== 1){
            return {success:false,message:"Login failed"};
        }

        return {success:true, message: "Successful login", id:id};
    } catch (error){
        throw error;
    }
}