import React from 'react';
import MessageInput from "./MessageInput";

const SnapBoard = ({messages}) => {

    return (
        <div className="message-board">
            <h2>SnapBoard 👻</h2>
            <ul className="message-list">
                {messages.map((message, index) => (
                    <li key={index} className="message-item">
                        <div className={"message-list-message"}>
                            {message.username}: {message.message}
                        </div>
                    </li>
                ))}
            </ul>
            <MessageInput />
        </div>


    );
};

export default SnapBoard;