import { makeStyles, Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { CustomButton } from "../../../controls/Button";
import { CustomTextarea } from "../../../controls/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../../utils/Error/ErrorMessage";
import { useMutation } from "react-query";
import { GlobalContext } from "../../../Context/Provider";
import { ChatContext } from "../../../ChatContext";
import { sendChat } from "../../../Context/actions/messenger/chat";

const useStyles = makeStyles((theme) => ({
  txtarea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff2f1",
    width: "100%",
    paddingTop: 4,
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
      // bottom: 4,
      position: "absolute",
      justifyContent: "flex-start",
      backgroundColor: "#fff2f1",
      width: "100%",
      paddingTop: 4,
    },
  },
}));
function Text() {
  const classes = useStyles();
  const userId = localStorage.getItem("userId");
  const [errmessage, setErrmessage] = useState("");
  // console.log(userId, "USERD");
  const { socket, chat, setChat, messageList, setMessageList, friend } =
    useContext(ChatContext); // console.log(data?.response)
  const {
    loginState: {
      login: { isLoggin, logger, isPemmitted },
    },
    addChatDispatch,
    addChatState: {
      message: {
        isLoading: isLoadin,
        data,
        error: err,
        isError: isErr,
        isSend,
      },
    },
  } = useContext(GlobalContext);
  // console.log(isLoadin, data, isSend);

  const sendMessage = async () => {
    let teacherId;
    let studentId;

    if (logger?.user?.registerAs === "Teacher") {
      studentId = friend;
      teacherId = userId;
    }
    if (logger?.user?.registerAs === "Student") {
      studentId = userId;
      teacherId = friend;
    }
    console.log(studentId, teacherId, "ids");
    if (chat !== "") {
      const message = {
        text: chat.trim(),
        teacherId,
        studentId,
        time:
          new Date(Date.now()).getDate() +
          ":" +
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", message);
      // sendChat(message)(addChatDispatch);
      setMessageList((prevChat) => [...prevChat, message]);
      setChat("");
    }
  };

  return (
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
            event.code === "Enter" && sendMessage();
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
      <p style={{ color: "#DA7B93" }}>{errmessage}</p>
    </Box>
  );
}

export default Text;
