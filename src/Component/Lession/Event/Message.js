import React from "react";
import { CustomInput,   } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const { initSession } = require("@opentok/client");

function Message(props) {
 
  const { sessionId, apiKey } = props;
  const session = initSession(apiKey, sessionId);
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
