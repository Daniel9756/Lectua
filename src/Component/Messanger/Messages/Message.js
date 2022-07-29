import { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { ChatContext } from "../../../ChatContext";
import TextList from "./TextList";
import { GlobalContext } from "../../../Context/Provider";
import { CustomButton } from "../../../controls/Button";
import { CustomInput } from "../../../controls/Input";
import ScrollToBottom, { useScrollToBottom } from "react-scroll-to-bottom";

const useStyles = makeStyles((theme) => ({
  txtarea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff2f1",
    paddingTop: 4,
    width: "80%",
  },
  text: {
    backgroundColor: "#376e6f",
    color: "#FBFFF1",
    padding: 4,
    borderRadius: 4,
  },
  time: {
    display: "flex",
    justifyContent: "space-between",
  },
  name: {
    color: "#376e6f",
    fontWeight: "bold",
  },
  open: {
    opacity: 0.4,
    fontSize: 66,
  },
  messages: {
    height: 400,
    overflowY: "auto",
  },
  li: {
    textDecoration: "none",
  },
  "@media (min-width: 960px)": {},
  "@media (max-width: 960px)": {
    root: {
      display: "flex",
      flexDirection: "column",
      // margin: 2,
    },
    txtarea: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#fff2f1",
      paddingTop: 4,
      width: "100%",
    },
  },
  "@media (max-width: 440px)": {},
}));

function Message() {
  const classes = useStyles();
  const scrollToBottom = useScrollToBottom();

  const { socket, chat, setChat, messageList, setMessageList, friend, userId } =
    useContext(ChatContext);
  const {
    addChatState: {
      message: {
        // isLoading: isLoadin,
        data,
        // error: err,
        // isError: isErr,
        // isSend,
      },
    },
  } = useContext(GlobalContext);
  console.log(data, "messagesEnd");

  const sendMessage = async () => {
    if (chat !== "") {
      const message = {
        text: chat.trim(),
        sender: userId,
        receiver: friend,
        time:
          new Date(Date.now()).getDate() +
          ":" +
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      scrollToBottom();
      await socket.emit("send_message", message);
      setMessageList((prevChat) => [...prevChat, message]);
      setChat("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((prevChat) => [...prevChat, data]);
    });
    scrollToBottom();
  }, [socket, setMessageList, scrollToBottom]);
  return (
    <Box
      style={{
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <Box
        style={{
          height: "400px",
          overflowY: "scroll",
        }}
      >
        {messageList?.length > 0 ? (
          <>
            {messageList?.map((content) => {
              return (
                <ScrollToBottom>                
                    <TextList item={content} userId={userId} sender={userId} receiver={friend} />                  
                </ScrollToBottom>
              );
            })}
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 60,
              opacity: "0.4",
              textTransform: "uppercase",
            }}
          >
            select a friend to display chat
          </div>
        )}
      </Box>
      <Box>
        <Box className={classes.txtarea}>
          <CustomInput
            name="message"
            type="text"
            label="firstName"
            placeholder="Your Message"
            className={classes.Textarea}
            value={chat}
            onChange={(event) => {
              setChat(event.target.value);
            }}
            onKeyPress={(event) => {
              event.code === "Enter" && sendMessage();
            }}
          ></CustomInput>

          <CustomButton
            onClick={() => sendMessage()}
            style={{
              width: 92,
              color: "#376e6f",
              background: "#DA7B93",
              borderRadius: 8,
            }}
          >
            send
          </CustomButton>
        </Box>
        {/* <p style={{ color: "#DA7B93" }}>{errmessage}</p> */}
      </Box>
    </Box>
  );
}

export default Message;
