import React from "react";
import { useFormik } from "formik";
import { CustomInput, LabelText } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { useMutation, useQueryClient } from "react-query";
import { addLecture } from "../../../Async/lesson";
import Notification from "../../../utils/Notification";
import Notify from "../../../utils/Notify";
import { useHistory } from "react-router-dom";
import SessionTable from "../SessionTable";
import ErrorMessage from "../../../utils/Error/ErrorMessage"
import * as Yup from "yup";
import { Link } from "react-router-dom";

import {
  CircularProgress
} from "@material-ui/core";


function CreateSession({ handleNext }) {
  const queryClient = useQueryClient();
  const history = useHistory();
  const {
    mutate,
    isLoading: isAddingUser,
    isSuccess,
    isError,
  } = useMutation(addLecture, {
    onSuccess: () => queryClient.invalidateQueries("lectures"),
    // onSuccess: (data) => console.log(data, "user created succesfully")
  });

 

  const formik = useFormik({
    initialValues: {
      email: "",
      topic: "",
    },
    validationSchema: Yup.object({     
      email: Yup.string().required("Please your email address is reqiured").email("Invalid email address"),
      topic: Yup.string().min(2, "Topic must be more than two characters long").required("This field is reqiured"),   
    }),
    onSubmit: (values) => {
      
      mutate({ values: values });
    },
  });
  return (
    <>
      {isSuccess && <Notify />}
      {isError && <div>Something went wrong, try again</div>}
      <form onSubmit={formik.handleSubmit}>
      <LabelText>Teacher Email</LabelText>
        <div style={{ marginTop: 8, marginBottom: 8, display: "flex", justifyContent: "center", "alignItems": "center" }}>
          <CustomInput
            name="email"
            type="text"
            placeholder="Your Email address"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          
         
        </div>
          <LabelText>Lecture Topic</LabelText>
        <div style={{ marginTop: 2, display: "flex", justifyContent: "center", "alignItems": "center" }}>
          <CustomInput
            name="topic"
            type="text"
            placeholder="Topic of the day"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.topic}
          />
          
          <CustomButton text="Submit" type="submit" width={200} disabled={formik.isSubmitting} style={{ cursor: "pointer" }}>
           {isAddingUser ? <CircularProgress style={{ fontSize: 40, color: "#DA7B93" }} /> :  "Submit"}
          </CustomButton>
        </div>
        <div style={{ marginLeft: 4 }} >
        {formik.touched && formik.errors && (             
                  <ErrorMessage                  
                    errorValue={formik.errors.topic}
                  />               
              )}
        </div>
        <div style={{ marginTop: 10 }}>
        </div>{" "}
      </form>
      <SessionTable  handleNext={handleNext}/>
    </>
  );
}

export default CreateSession;
