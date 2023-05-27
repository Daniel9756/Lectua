import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { CustomInput, LabelText, Title } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import SessionTable from "./SessionTable";
import { addLecture } from "../../../Context/actions/lesson/lesson";
import { GlobalContext } from "../../../Context/Provider";
import MessageBox from "../../../utils/Alert";
import * as lecturerData from "../../../utils/LecturerData";
import { CustomSelect } from "../../../controls/Select";
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
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();
  const registerOptions = {
    // ...
    Target: { required: "Role is required" },
    Duration: { required: "Duration is required" },
  };
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
      login: { logger: partner, isPemmitted },
    },
  } = useContext(GlobalContext);
  const userId = localStorage.getItem("userId");

  // useEffect(() => {
  //   getOneProfile(userId)(getprofileDispatch);
  //   getLecturesByATeacher(userId)(teacherLectureDispatch);
  // }, [isEdited, teacherLectureDispatch, userId, getprofileDispatch]);

  const onSubmit = (values) => {
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
      reset();
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
      reset();
    }
  };

  return (
    <Box>
      <Grid container>
        <Grid item md="4">
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Your Course"
                name="subject"
                label="label"
                type="text"
                {...register("subject", { required: true })}
              />
            </div>
            <div style={{ marginLeft: 4 }}>
              {errors.subject?.type === "required" && "Subject is required"}
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
              <Controller
                name="target"
                control={control}
                defaultValue="target"
                rules={registerOptions.role}
                render={({ field }) => (
                  <CustomSelect
                    options={lecturerData.lecturerTarget()}
                    {...field}
                    label="Text field Target"
                  />
                )}
              />
            </div>
            <div style={{ marginLeft: 4 }}>
              {errors.target?.type === "required" && "Target is required"}
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div style={{ marginTop: 8 }}>
                  <LabelText>Price</LabelText>
                  <CustomInput
                    placeholder="eg. Free or #1000"
                    name="price"
                    label="label"
                    type="text"
                    {...register("price", { required: true })}
                  />
                </div>{" "}
                <div style={{ marginLeft: 4 }}>
                  {errors.price?.type === "required" && "Price is required"}
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div style={{ marginTop: 8 }}>
                  <LabelText>Per</LabelText>
                  <Controller
                    name="per"
                    control={control}
                    defaultValue="per"
                    rules={registerOptions.role}
                    render={({ field }) => (
                      <CustomSelect
                        options={lecturerData.duration()}
                        {...field}
                        label="Duration Field"
                      />
                    )}
                  />
                </div>{" "}
                <div style={{ marginLeft: 4 }}>
                  {errors.per?.type === "required" && "Duration is required"}
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
          </form>{" "}
        </Grid>
        <Grid item md="8">
          <Box style={{ margin: 4, height: "auto" }}>
            <SessionTable handleNext={handleNext} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateSession;
