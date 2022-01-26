import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./Context/Provider";
import { fetchFriendMessage } from "./Context/actions/messenger/chat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5500");

export const ChatContext = createContext();

// This context provider is passed to any component requiring the context
export const ChatProvider = ({ children }) => {
  const {
    loginState: {
      login: { isLoggin, logger, isPemmitted },
    },
    fetchChatDispatch,
    fetchChatState: {
      fetchmessage: {
        isLoading: isLoadin,
        data,
        error: err,
        isError: isErr,
        isSend,
      },
    },
  } = useContext(GlobalContext);
  console.log(data, isSend, "isSend");
  const [friend, setFriend] = useState("");
  const [loggerId, setLoggerId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [loading, setLoading] = useState(false);
  const [getingFriends, setGetingFriends] = useState(false);
  const [activefriend, setActivefriend] = useState({});
  const [chat, setChat] = useState("");
  const [messageList, setMessageList] = useState([]);

  // logger?.user?.id
  useEffect(() => {
    if(isPemmitted){
      setLoggerId(logger?.user?.id)
      }
  }, [isPemmitted]);
 
console.log(loggerId, 'loggerId')
  useEffect(() => {
    if(isSend){
        setMessageList(data?.response)
      }
  }, [isSend]);
  const getFriendMessage = (id) => {
    // console.log(id, userId, 'id userId');
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
        loggerId
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
