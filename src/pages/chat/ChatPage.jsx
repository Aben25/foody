import { useState } from "react";
import "./App.css";
// import { ChatUiKit } from "chat-ui-kit-react";
// import styled from "styled-components";
// import styled, { css } from "styled-components";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";
// const StyledChat = styled(ChatUiKit)`
//   height: 100vh;
//   width: 100%;
//   font-family: "Roboto", sans-serif;

//   .chat-ui-kit {
//     &__header {
//       background-color: #0077b6;
//       color: #fff;
//       padding: 1rem;

//       &__title {
//         font-size: 1.5rem;
//         font-weight: bold;
//       }
//     }

//     &__messages {
//       padding: 1rem;
//       overflow-y: auto;
//       height: calc(100% - 4rem - 4rem); // Subtract header and input height

//       &__message {
//         &--user {
//           background-color: #f1f0f0;
//           border-radius: 1rem 1rem 1rem 0;
//           padding: 0.5rem 1rem;
//           margin-bottom: 0.5rem;
//           align-self: flex-end;
//         }

//         &--assistant {
//           background-color: #0077b6;
//           color: #fff;
//           border-radius: 1rem 1rem 0 1rem;
//           padding: 0.5rem 1rem;
//           margin-bottom: 0.5rem;
//           align-self: flex-start;
//         }
//       }
//     }

//     &__input {
//       display: flex;
//       padding: 1rem;
//       background-color: #f1f0f0;

//       &__field {
//         flex: 1;
//         border: none;
//         border-radius: 1rem;
//         padding: 0.5rem 1rem;
//         font-size: 1rem;
//       }

//       &__button {
//         background-color: #0077b6;
//         color: #fff;
//         border: none;
//         border-radius: 1rem;
//         padding: 0.5rem 1rem;
//         font-size: 1rem;
//         cursor: pointer;
//         margin-left: 0.5rem;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .chat-ui-kit {
//       &__messages {
//         height: calc(100% - 4rem - 3.5rem); // Adjust for smaller screen
//       }

//       &__input {
//         &__field,
//         &__button {
//           font-size: 0.875rem; // Smaller font size for mobile
//         }
//       }
//     }
//   }
// `;
const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

function ChatPage() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
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
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    // <StyledChat>
    <div className="chat-container">
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null
            }
          >
            {messages.map((message, i) => {
              console.log(message);
              return <Message key={i} model={message} />;
            })}{" "}
          </MessageList>{" "}
          <MessageInput placeholder="Type message here" onSend={handleSend} />{" "}
        </ChatContainer>{" "}
      </MainContainer>{" "}
    </div>
    // </StyledChat>
  );
}

export default ChatPage;
