import aiChatIcon from "../assets/chat-head-icon.png";
import { useState, lazy, Suspense } from "react";

const ChatView = lazy(() => import("./Chat-view.jsx"));

function ChatButton() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div
                className="ai-chat-icon"
                onClick={() => setToggle(!toggle)}
                title="Resume AI Chat"
            >
                <img src={aiChatIcon} alt="AI chat button" />
            </div>

            {toggle && (
                <Suspense fallback={<div>Loading...</div>}>
                    <ChatView onClose={() => setToggle(false)} />
                </Suspense>
            )}
        </>
    );
}

export default ChatButton;