import React, { createContext, useState } from "react";
import axios from "axios";
const client = "ws://localhost:8080";

export const ChatContext = createContext();

// This context provider is passed to any component requiring the context
export const ChatProvider = ({ children }) => {
  const [ws, setWs] = useState(new WebSocket(client));
  const [chat, setChat] = useState("");
  const [messageList, setMessageList] = useState([]);
  const getFriend = (id) => {
  console.log(id)
  };
  return (
    <ChatContext.Provider
      value={{
        ws,
        setWs,
        chat,
        setChat,
        messageList,
        setMessageList,
        getFriend,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
