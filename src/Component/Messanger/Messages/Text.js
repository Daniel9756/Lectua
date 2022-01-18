import { makeStyles, Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { CustomButton } from "../../../controls/Button";
import { CustomTextarea } from "../../../controls/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../../utils/Error/ErrorMessage";
import { useMutation } from "react-query";
import { sendMessage } from "../../../Async/message";
import { ChatContext } from "../../../ChatContext";

const useStyles = makeStyles((theme) => ({
  txtarea: {
    display: "flex",
    alignItems: "center",
    bottom: 4,
    position: "absolute",
    justifyContent: "flex-start",
    backgroundColor: "#fff2f1",
    width: "100%",
    paddingTop: 12,
  },
  Textarea: {
    width: 286,
    minHeight: "82px",
    fontFamily: "roboto",
  },
  "@media (max-width: 960px)": {},
  "@media (max-width: 440px)": {
    txtarea: {
      display: "flex",
      alignItems: "start",
      flexDirection: "column",
      bottom: 4,
      position: "absolute",
      justifyContent: "flex-start",
      backgroundColor: "#fff2f1",
      width: "100%",
      paddingTop: 12,
    },
  },
}));
function Text({ friend }) {
  const classes = useStyles();

  const { ws, setWs, chat, setChat, messageList, setMessageList } =
    useContext(ChatContext); // console.log(data?.response)
  const sendMessage = async () => {
    if (chat !== "") {
      const message = {
        text: chat,
        time:
          new Date(Date.now()).getDate() +
          ":" +
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      ws.send(JSON.stringify(message));
      console.log(message);
        setMessageList([...messageList, message]);
      setChat("");
    }
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      console.log(message);
      setMessageList([...messageList, message]);
    };

    return () => {
      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        // setWs(new WebSocket(URL));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose]);
  return (
    <div>
      <Box className={classes.txtarea}>
        <Box>
          <CustomTextarea
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
              event.key === "Enter" && sendMessage();
            }}
          ></CustomTextarea>
          <p style={{ marginLeft: 4 }}></p>
        </Box>
        <CustomButton
          onClick={() => sendMessage()}
          style={{
            marginLeft: "8px",
            marginBottom: "18px",
            width: 92,
            color: "#376e6f",
            background: "#DA7B93",
            borderRadius: 8,
          }}
        >
          send
        </CustomButton>
      </Box>
    </div>
  );
}

export default Text;
