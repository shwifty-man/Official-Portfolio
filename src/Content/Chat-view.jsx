import aiChatIcon from '../assets/chat-head-icon.png'
import { MdClose } from 'react-icons/md';
import { Send } from 'lucide-react'
import { useState } from 'react'
import { AI_Chat } from '../APIs/Ai-chat.js'

function ChatView({ onClose }) {
    const [message, setMessage] = useState('')
    const [aiResponse, setAiResponse] = useState([])
    const [status, setStatus] = useState(["pending", "sent!", "failed"])

    async function handleSend() {
        if (!message.trim() || status === 'pending') return;
        setStatus('pending')


        const response = await AI_Chat(message)

        setAiResponse(prev => [
            ...prev,
            {
                user: message,

                ai: response
            }
        ]);
        setStatus('sent!');
        setMessage("");
    }

    return (
        <>
            <div className="ai-chat-outer-view">
                <div className="ai-chat-header">
                    <div className="ai-inner-header">
                        <img src={aiChatIcon} alt="Ai chat button" />
                        <h3>AI ASSISTANT</h3>
                    </div>
                    <MdClose size={30} color="#fff" onClick={onClose} />
                </div>

                <div className="ai-chat-display">
                    {aiResponse.map((res, index) => (
                        <div key={index}>
                            <div className="user-message-outer">
                                <div className="user-message">
                                    {res.user}
                                </div>
                            </div>
                            <div className="ai-outer-response">
                                <img src={aiChatIcon} alt="Ai chat button" />
                                <div className="ai-response-message">
                                    {res.ai}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ai-chat-message-area">
                    <input
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSend();
                            }
                        }}
                        placeholder="What are Timothy's skills?"

                    />
                    <Send onClick={() => handleSend()} size={30} color="#B08D57" />
                </div>
            </div>
        </>
    );
}


export default ChatView;
