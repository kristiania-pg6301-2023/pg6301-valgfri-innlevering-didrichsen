import express from "express";
import {registerUser} from "../service/authenthicationService.js";

export const authenticationRoutes = express.Router();

authenticationRoutes.post("/signup",async (req,res)=>{
    const {username, password} = req.body;

    const result = await registerUser(username,password)

    if(!result.success){
        res.status(500).json({message:result.message})

    }

    res.status(200).json({message: "success"});

});