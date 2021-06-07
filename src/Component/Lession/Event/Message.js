import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { CustomInput, InputLabel, CustomDateInput } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { useFormik } from "formik";
import { sendMessage } from "../../../Async/message";
import * as Yup from "yup";

const { initSession } = require("@opentok/client");

function Message(props) {
  const queryClient = useQueryClient();
  const history = useHistory();
  const {
    mutate,
    isLoading: isAddingUser,
    isSuccess,
    isError,
  } = useMutation(sendMessage, {
    // onSuccess: () => queryClient.invalidateQueries("lectures"),
    onSuccess: (data) => console.log(data, "user created succesfully"),
  });
  const { sessionId, apiKey, token, topic, id, name } = props;
  const session = initSession(process.env.API_KEY, sessionId);
  console.log(session, "initSession");

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("You can't send an empty message"),
    }),
    onSubmit: (values) => {
      session.signal({
        type: "chat",
        data: `name: ${values.message}`,
      });
      session.on("signal:chat", (event) => {
        const content = event.data;
        props.chatContent(content);
      });
      values.message = "";
      //   mutate({ values: values });
    },
  });

  return (
    <div style={{ marginRight: 60 }}>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginTop: 8 }}>
          <CustomInput
            name="message"
            type="text"
            placeholder="Your Message"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.mesaage}
          />
        </div>
        <CustomButton style={{ marginTop: 20 }} type="submit">
          SEND
        </CustomButton>
      </form>
    </div>
  );
}

export default Message;
