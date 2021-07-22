import React from "react";
import { useFormik } from "formik";
import { CustomInput, LabelText, Title } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { useMutation, useQueryClient } from "react-query";
import { addLecture } from "../../../Async/lesson";
import Notify from "../../../utils/Notify";
import SessionTable from "../SessionTable";
import ErrorMessage from "../../../utils/Error/ErrorMessage";
import * as Yup from "yup";

import { CircularProgress, Grid, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  minutes: {
    fontFamily: "serif",
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: "#DA7B93",
    textTransform: "capitalize",
    marginLeft: 8,
    justifyContent: "center",
  },
});

function CreateSession({ handleNext }) {
  const classes = useStyles();

  const queryClient = useQueryClient();
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
      email: Yup.string()
        .required("Please your email address is reqiured")
        .email("Invalid email address"),
      topic: Yup.string()
        .min(2, "Topic must be more than two characters long")
        .required("This field is reqiured"),
    }),
    onSubmit: (values) => {
      mutate({ values: values });
    },
  });
  return (
    <Grid container>
      <Grid item md="4">
        <Box style={{ margin: 4, height: "auto" }}>
          <div>
            <Title>create your classroom</Title>
            <h4 className={classes.minutes}>in less than 5 minutes</h4>
            {/* <data>{isSuccess ? <div>Lecture Fixed</div> : null}</data> */}
          </div>
          {isSuccess && <Notify />}
          {isError && <div>Something went wrong, try again</div>}
          <form onSubmit={formik.handleSubmit}>
            <LabelText>Teacher Email</LabelText>
            <div
              style={{
                marginTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
            <div
              style={{
                marginTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomInput
                name="topic"
                type="text"
                placeholder="Topic of the day"
                label="label"
                onChange={formik.handleChange}
                value={formik.values.topic}
              />
            </div>
            <div style={{ marginLeft: 4 }}>
              {formik.touched && formik.errors && (
                <ErrorMessage errorValue={formik.errors.topic} />
              )}
            </div>
            <CustomButton
              text="Submit"
              type="submit"
              style={{
                cursor: "pointer",
                width: "100%",
                borderRadius: 12,
                color: "#DA7B93",
              }}
            >
              {isAddingUser ? (
                <CircularProgress style={{ fontSize: 40, color: "#DA7B93" }} />
              ) : (
                "Create subject"
              )}
            </CustomButton>
          </form>
        </Box>
      </Grid>
      <Grid item md="8">
        <Box style={{ margin: 4, height: "auto" }}>
          <SessionTable handleNext={handleNext} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default CreateSession;
