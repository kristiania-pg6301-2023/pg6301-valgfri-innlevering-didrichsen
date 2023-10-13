import express from "express";
import {addMessage} from "../service/messageService.js";

export const snapBoardRoutes = express.Router();

snapBoardRoutes.post("/postmessage", async (req, res) => {
    const {message, time} = req.body;
    try {
        const result = await addMessage(message, time);

        if (!result.success){
            res.status(400).json({message: result.message})
        }
        res.status(200).json({message:"Posted message to SnapBoard."})
    } catch (error){
        console.error("Failed to post message to server", error.message);
        res.status(500).json({message:"Failed to post message."})
    }
})