import { Box, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../../ChatContext";
import ScrollToBottom from "react-scroll-to-bottom";

const useStyles = makeStyles((theme) => ({
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
    height: "350px",
    overflowY: "auto",
    padding: "15px 10px",
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
  },
  "@media (max-width: 440px)": {},
}));

const start = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};
const end = {
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  direction: "rtl",
  // flexDirection: 'row-reverse',
};
function Message() {
  const classes = useStyles();
  const messagesEnd = useRef();
  const start = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  const end = {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    direction: "rtl",
    // flexDirection: 'row-reverse',
  };
  const { socket, messageList, setMessageList, friend, loggerId } =
    useContext(ChatContext);

  // console.log(messagesEnd, userId, friend, "messagesEnd");
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prevChat) => [...prevChat, data]);
      messagesEnd.current = window.scrollTo({
        bottom: 0,
        left: 100,
        behavior: "smooth",
      });
    });
  }, [socket, messagesEnd]);
  return (
    <div className={classes.messages}>
      {(messageList?.length < 1) ? (
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
      ) : (
        <div>
          {messageList?.map((content) => {
            return (
              <Box ref={messagesEnd}>
                <Box className={classes.li}  style={loggerId === content.studentId ? end : start}>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      margin: 0,
                    }}
                  >
                    {content.text}
                  </p>
                  <p style={{ margin: 0, opacity: "0.4" }}>{content.time}</p>
                </Box>
              </Box>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Message;
