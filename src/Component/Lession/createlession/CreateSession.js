import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { CustomInput, LabelText, Title } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import SessionTable from "../SessionTable";
import ErrorMessage from "../../../utils/Error/ErrorMessage";
import * as Yup from "yup";
import { addLecture } from "../../../Context/actions/lesson/lesson";
import { GlobalContext } from "../../../Context/Provider";
import MessageBox from "../../../utils/Alert";
import { getOneProfile } from "../../../Context/actions/profile/getProfile";
import * as lecturerData from "../../../utils/LecturerData";
import { CustomSelect } from "../../../controls/Select";
import { getLecturesByATeacher } from "../../../Context/actions/lesson/lesson";

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
  "@media (max-width: 960px)": {},
  "@media (max-width: 440px)": {},
});

function CreateSession({ handleNext }) {
  const classes = useStyles();
  // const history = useHistory();

  const {
    teacherLectureDispatch,
   
    lectureDispatch,
    lectureState: {
      lecture: { isAddingLesson, lesson, isFixed },
    },
    getprofileDispatch,
    editSubjectState: {
      editsubject: { isEdited, isError },
    },
    loginpartnerState: {
      login: { isLoggin, logger: partner, isPemmitted },
    },
  } = useContext(GlobalContext);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    getOneProfile(userId)(getprofileDispatch);
    getLecturesByATeacher(userId)(teacherLectureDispatch);
  }, [isFixed, isEdited]);

  const formik = useFormik({
    initialValues: {
      subject: "",
      target: "",
      price: "",
      per: "",
    },
    validationSchema: Yup.object({
      subject: Yup.string()
        .min(2, "subject must be more than two characters long")
        .required("This field is reqiured"),
      price: Yup.string().required("How much to pay for this lesson"),
      per: Yup.string().required("For how long will the price cover"),
      target: Yup.string().required("This field is reqiured"),
    }),
    onSubmit: (values, actions) => {
      const { subject, target, price, per } = values;
      let creator;
      let owner;

      if (isPemmitted) {
        owner = partner?.response?.orgId;
        creator = partner?.response?.partnerId;
        const data = {
          subject,
          target,
          userId,
          price,
          per,
          owner,
          creator,
        };
        addLecture(data)(lectureDispatch);
        actions.resetForm();
      } else {
        owner = userId;
        creator = userId;
        const data = {
          subject,
          target,
          price,
          per,
          creator,
          owner,
        };
        addLecture(data)(lectureDispatch);
        actions.resetForm();
      }
    },
  });

  return (
    <Grid container>
      <Grid item md="4">
        <Box>
          <div>
            <Title>create your classroom</Title>
            <h4 className={classes.minutes}>in less than 5 minutes</h4>
          </div>
          {isFixed && lesson?.message === "Your Subject has been added" && (
            <MessageBox message={lesson?.message} severity="success" />
          )}
          {lesson?.message ===
            "Upgrade your membership to create more courses" && (
            <MessageBox message={lesson?.message} severity="error" />
          )}
          {isError && (
            <MessageBox message="Error creating subject" severity="error" />
          )}

          <form onSubmit={formik.handleSubmit}>
            <LabelText>Enter Your Subject</LabelText>
            <div
              style={{
                marginTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomInput
                name="subject"
                type="text"
                placeholder="Your Course"
                label="label"
                onChange={formik.handleChange}
                value={formik.values.subject}
              />
            </div>
            <div style={{ marginLeft: 4 }}>
              {formik.touched && formik.errors && (
                <ErrorMessage errorValue={formik.errors.subject} />
              )}
            </div>
            <LabelText>Target Student</LabelText>
            <div
              style={{
                marginTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomSelect
                type="text"
                name="target"
                options={lecturerData.lecturerTarget()}
                value={formik.values.target}
                onChange={formik.handleChange}
              />
            </div>
            <div style={{ marginLeft: 4 }}>
              {formik.touched && formik.errors && (
                <ErrorMessage errorValue={formik.errors.target} />
              )}
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div style={{ marginTop: 8 }}>
                  <LabelText>Price</LabelText>
                  <CustomInput
                    placeholder="eg. Free or #1000"
                    name="price"
                    label="label"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    type="text"
                  />
                </div>{" "}
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.price} />
                  )}
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div style={{ marginTop: 8 }}>
                  <LabelText>Per</LabelText>
                  <CustomSelect
                    name="per"
                    type="text"
                    options={lecturerData.duration()}
                    onChange={formik.handleChange}
                    value={formik.values.per}
                  />
                </div>{" "}
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.per} />
                  )}
                </div>
              </div>
            </div>
            <CustomButton
              text="Submit"
              type="submit"
              style={{
                cursor: "pointer",
                width: "100%",
                borderRadius: 12,
                color: "#DA7B93",
                marginTop: 12,
              }}
            >
              {isAddingLesson ? (
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
