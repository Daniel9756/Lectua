import React, { createContext, useState, useContext, useEffect } from "react";
import { GlobalContext } from "./Context/Provider";
import { fetchFriendMessage } from "./Context/actions/messenger/chat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5500");

export const ChatContext = createContext();

// This context provider is passed to any component requiring the context
export const ChatProvider = ({ children }) => {
  const {
    loginState: {
      login: { logger, isPemmitted },
    },
    fetchChatDispatch,
    fetchChatState: {
      fetchmessage: {
        // isLoading,
        data,
        // error,
        // isError,
        isSend,
      },
    },
  } = useContext(GlobalContext);
  console.log(data, isSend, "isSend");
  const [friend, setFriend] = useState("");
  const [loggerId, setLoggerId] = useState("");

  const [chat, setChat] = useState("");
  const userId = localStorage.getItem("userId");
  const [messageList, setMessageList] = useState([]);

  // logger?.user?.id
  useEffect(() => {
    if (isPemmitted) {
      setLoggerId(logger?.user?.id);
    }
  }, [logger?.user?.id, isPemmitted]);

  console.log(loggerId, "loggerId");
  useEffect(() => {
    if (isSend) {
      setMessageList(data?.response);
    }
  }, [isSend,  data?.response]);
  const getFriendMessage = (id) => {
    setFriend(id);
    fetchFriendMessage(id)(fetchChatDispatch);
  };
  return (
    <ChatContext.Provider
      value={{
        chat,
        setChat,
        socket,
        messageList,
        setMessageList,
        getFriendMessage,
        friend,
        setFriend,
        loggerId,
        userId,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
