import { Box, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { ChatContext } from "../../../ChatContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "70%",
    margin: 4,
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
  "@media (min-width: 960px)": {},
  "@media (max-width: 960px)": {
    root: {
      display: "flex",
      flexDirection: "column",
      margin: 2,
    },
  },
  "@media (max-width: 440px)": {},
}));
function Message({ friend, tutor, leaner }) {
  const classes = useStyles();
  const { ws, setWs, chat, setChat, messageList, setMessageList } =
    useContext(ChatContext); // console.log(data?.response)

  return (
    <Box>
      {messageList.map((content) => {
        return (
          <div>
            <p style={{margin: 0}}>{content.text}</p>
            <p style={{margin: 0, opacity:"0.4"}}>{content.time}</p>
          </div>
        );
      })}
     
    </Box>
  );
}

export default Message;
