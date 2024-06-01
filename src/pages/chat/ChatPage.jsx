import { useState } from "react";
import "./App.css";

import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { Box, Button, Modal } from "@mui/material";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const API_KEY = "sk-proj-oH3aS4EXAO3PHqW30ZMcT3BlbkFJTdjTPRvEPL6xSRoxRUaW";

const systemMessage = {
    role: "system",
    content: "Explain things like you're talking to a software professional with 2 years of experience.",
};

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { content: "Hello! How can I assist you today?", sender: "ChatGPT" },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async (message) => {
        if (message.trim() === "") return;
        console.log(process.env.API_KEY);
        const outgoingMessage = {
            content: message,
            sender: "User",
        };

        const newMessages = [...messages, outgoingMessage];
        setMessages(newMessages);
        setNewMessage("");
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.content };
        });

        const apiRequestBody = {
            model: "gpt-3.5-turbo",
            messages: [
                systemMessage,
                ...apiMessages,
            ],
        };

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        content: data.choices[0].message.content,
                        sender: "ChatGPT",
                    },
                ]);
                setIsTyping(false);
            });
    }

    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90%",
                maxWidth: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 2,
            }}
        >
            <MainContainer>
                <ChatContainer>
                    <MessageList typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing..." /> : null}>
                        {messages.map((msg, index) => (
                            <Message key={index} model={{ message: msg.content, sentTime: "just now", sender: msg.sender }} />
                        ))}
                    </MessageList>
                    <MessageInput
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(val) => setNewMessage(val)}
                        onSend={handleSend}
                    />
                </ChatContainer>
            </MainContainer>
        </Box>
    );
};

export default ChatPage;
