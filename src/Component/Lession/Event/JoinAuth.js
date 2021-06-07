import React, { useState } from "react";
import { useFormik } from "formik";
import { CustomInput, LabelText } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { useMutation, useQueryClient } from "react-query";
import { addLecture } from "../../../Async/lesson";
import Notification from "../../../utils/Notification";
import Notify from "../../../utils/Notify";
import { useHistory, useParams } from "react-router-dom";
import SessionTable from "../SessionTable";
import ErrorMessage from "../../../utils/Error/ErrorMessage";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Title } from "../../../controls/Input";

import { CircularProgress } from "@material-ui/core";
const useStyles = makeStyles({
  links: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function JoinAuth(props) {
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const [guest, setGuest] = useState("");

  const handleName = (student) => {   
    setGuest(student.studentName);
    history.push(`/host/${student.studentName}/${params.id}`);
  };
  const formik = useFormik({
    initialValues: {
      studentName: "",
    },
    validationSchema: Yup.object({
      studentName: Yup.string()
        .min(2, "Name must be more than two characters long")
        .required("This field is reqiured"),
    }),
    onSubmit: (values) => {
      handleName(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <LabelText>User Name</LabelText>
        <div
          style={{
            marginTop: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomInput
            name="studentName"
            type="text"
            placeholder="Topic of the day"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.studentName}
          />

         
            {" "}
            <Title>Guest</Title>
            <CustomButton style={{ borderRadius: 8 }} type="submit">
              Join Session
            </CustomButton>
        </div>
        <div style={{ marginLeft: 4 }}>
          {formik.touched && formik.errors && (
            <ErrorMessage errorValue={formik.errors.studentName} />
          )}
        </div>
        <div style={{ marginTop: 10 }}></div>{" "}
      </form>
    </>
  );
}

export default JoinAuth;
