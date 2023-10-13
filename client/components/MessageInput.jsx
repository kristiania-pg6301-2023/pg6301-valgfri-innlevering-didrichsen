import {useState} from "react";

function MessageInput(){

    const [message,setMessage] = useState("");
    const [time, setTime] = useState("")


    return (
        <div id="massage-input-container">
            <label>Enter Text:</label>
            <textarea
                id="text"
                name="text"
                onChange={(e) => setMessage(e.target.value)}
                rows={4} // Adjust the number of visible rows
                cols={50} // Adjust the number of visible columns
            ></textarea>
            <label>
                Disappearing message:
            <select>
                <option value="1">One Minute</option>
                <option value="5">Five Minutes</option>
                <option value="10">Ten Minutes</option>
                <option value="forever">Forever Baby</option>
            </select>
            </label>
            <button>Post SnapMessage</button>
        </div>
    )
}
export default MessageInput;