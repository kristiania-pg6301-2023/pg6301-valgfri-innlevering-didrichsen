import {useState} from "react";

function MessageInput({fetchMessages}){

    const [message,setMessage] = useState("");
    const [time, setTime] = useState("")

    async function handleSubmitMessage(e){
        e.preventDefault()

        try {
            const response = await fetch("/api/snapboard/postmessage", {
                method: "POST",
                body: JSON.stringify({message, time}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setMessage("");
            setTime("");
            await fetchMessages();

        } catch (error){
            throw error;
        }
    }


    return (
        <div id="massage-input-container">
            <label>Enter Text:</label>
            <textarea
                id="text"
                name="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4} // Adjust the number of visible rows
                cols={50} // Adjust the number of visible columns
            ></textarea>
            <label>
                Disappearing message:
            <select defaultValue="1" onChange={(e) => setTime(e.target.value)}>
                <option value="1">One Minute</option>
                <option value="5">Five Minutes</option>
                <option value="10">Ten Minutes</option>
                <option value="forever">Forever Baby</option>
            </select>
            </label>
            <button onClick={(e) => handleSubmitMessage(e)}>Post SnapMessage</button>
        </div>
    )
}
export default MessageInput;