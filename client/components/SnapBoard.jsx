import React, {useEffect, useState} from 'react';
import MessageInput from "./MessageInput";
import {json} from "react-router-dom";

const SnapBoard = () => {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false)


    async function fetchMessages(){
        try {
            const response = await fetch("/api/snapboard/getAllMessages");

            if (response.ok) {
                const data = await response.json();
                setMessages(data.messages);
                console.log(messages);
            }
        } catch (error){
            throw error;
        }
    }

    useEffect(() => {
        fetchMessages().then(loading=>true);
    }, []);

    return (
        <div className="message-board">
            <h2>SnapBoard 👻</h2>
            <ul className="message-list">
                {!loading ? messages.map((m, index) => (
                    <li key={index} className="message-item">
                        <div className={"message-list-message"}>
                            {m.user} : {m.message}
                        </div>
                    </li>
                )):<div>loading ...</div>}
            </ul>
            <MessageInput fetchMessages={fetchMessages} />
        </div>


    );
};

export default SnapBoard;