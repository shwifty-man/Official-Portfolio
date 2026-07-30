import aiChatIcon from '../assets/chat-head-icon.png'
const ChatView = lazy(() => import("./ChatView"));
import { useState } from "react";

function ChatButton() {
    const [toggle, setToggle] = useState(false);


    return (
        <>
            <div className={`ai-chat-icon ${toggle}`} onClick={() => {
                setToggle(!toggle)
                console.log("toggle: ", toggle)
            }} title="Resume Ai Chat">
                <img src={aiChatIcon} alt="Ai chat button" />
            </div>
            {toggle ? <ChatView onClose={() => setToggle(false)} /> : null}
        </>
    );
}


export default ChatButton;
