import React, { useContext } from "react";
import { CustomSelect } from "../../../controls/Select";
import { CustomInput, LabelText, CustomDateInput, Title } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import ErrorMessage from "../../../utils/Error/ErrorMessage";
import MessageBox from "../../../utils/Alert";

import * as lecturerData from "../../../utils/LecturerData";
import { GlobalContext } from "../../../Context/Provider";
import { addTimetable } from "../../../Context/actions/timeTable/teacher";

import {
  Box,
  CircularProgress,
  Container,
  Grid, makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({

  btns: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  "@media (max-width: 960px)": {

  },
  "@media (max-width: 440px)": {

  },

});

function LessionDetail({ handleBack }) {
  const classes = useStyles();
  const { id } = useParams();
  const userID = localStorage.getItem("userID");
  console.log(id);

  const {
    topicDispatch,
    topicState: {
      topic: { isAddingTopic, timetable, isScheduled,  isError },
    },
    loginpartnerState: {
      login: { isLoggin, logger: partner, isPemmitted },
  },
  } = useContext(GlobalContext);

  const formik = useFormik({
    initialValues: {
      topic: "",
      eventtype: "",
      startdate: "",
      starttime: "",
      enddate: "",
      endtime: "",
    },
    validationSchema: Yup.object({
      topic: Yup.string().required("Topic of the day"),
      eventtype: Yup.string().required("Please choose event type"),
      startdate: Yup.string().required("Lesson start date"),
      starttime: Yup.string().required("Lesson start time"),
    }),
    onSubmit: (values, action) => {
      const { topic, eventtype, startdate, starttime, enddate, endtime } = values
      let creator;
      let owner;
      if(isPemmitted){
        owner = partner?.response?.orgid
        creator = partner?.response?.partnerid
        const data = {
          topic, eventtype, startdate, starttime, enddate, endtime, id, owner, creator
        }
        addTimetable(data)(topicDispatch)
        action.resetForm()
      
      
      }else{
        owner = userID
        creator = userID
        const data = {
          topic, eventtype, startdate, starttime, enddate, endtime, id, owner, creator
        }
        addTimetable(data)(topicDispatch)
        action.resetForm()
      }

      
      }
     
  });
  
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item md="2"></Grid>
         
          <Grid item md="8">
            <Title style={{ marginBottom: 4 }}>set your first event</Title>
            {isScheduled && (timetable?.message === "Your topic was successfully created") && (<MessageBox message={timetable?.message} severity="success" />)}
            {isScheduled && (timetable?.message ===  "User or Course does not Exist") && (<MessageBox message={timetable?.message} severity="error" />)}
            {isError && (<MessageBox message="Error creating subject" severity="error" />)}
            <form onSubmit={formik.handleSubmit}>
              <div class="row" style={{ marginTop: 2 }}>
                <div class="col-md-6 col-sm-12">
                  <div>
                    <LabelText>Topic of the day</LabelText>
                    <CustomInput
                      placeholder="Topic"
                      name="topic"
                      onChange={formik.handleChange}
                      value={formik.values.topic}
                      type="text"
                    />
                  </div>{" "}
                  <div style={{ marginLeft: 4 }}>
                    {formik.touched && formik.errors && (
                      <ErrorMessage errorValue={formik.errors.topic} />
                    )}
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div>
                    <LabelText>Event type</LabelText>
                    <CustomSelect
                      name="eventtype"
                      type="text"
                      options={lecturerData.eventType()}
                      onChange={formik.handleChange}
                      value={formik.values.eventtype}
                    />
                  </div>{" "}
                  <div style={{ marginLeft: 4 }}>
                    {formik.touched && formik.errors && (
                      <ErrorMessage errorValue={formik.errors.eventtype} />
                    )}
                  </div>
                </div>
              </div>


              <div class="row" style={{ marginTop: 2 }}>
                <div class="col-md-6 col-sm-12">
                  <div>
                    <LabelText>Start Date</LabelText>
                    <CustomDateInput
                      name="startdate"
                      type="date"
                      onChange={formik.handleChange}
                      value={formik.values.startdate}
                    />
                  </div>{" "}
                  <div style={{ marginLeft: 4 }}>
                    {formik.touched && formik.errors && (
                      <ErrorMessage errorValue={formik.errors.startdate} />
                    )}
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div>
                    <LabelText>Start Time</LabelText>
                    <CustomDateInput
                      name="starttime"
                      type="time"
                      onChange={formik.handleChange}
                      value={formik.values.starttime}
                    />
                  </div>{" "}
                  <div style={{ marginLeft: 4 }}>
                    {formik.touched && formik.errors && (
                      <ErrorMessage errorValue={formik.errors.starttime} />
                    )}
                  </div>
                </div>
              </div>
              <div class="row" style={{ marginTop: 2 }}>
                <div class="col-md-6 col-sm-12">
                  <div>
                    <LabelText>End Date</LabelText>
                    <CustomDateInput
                      name="enddate"
                      label="label"
                      type="date"
                      onChange={formik.handleChange}
                      value={formik.values.enddate}
                    />
                  </div>{" "}
                </div>
                <div class="col-md-6 col-sm-12">
                  <div>
                    <LabelText>End Time</LabelText>
                    <CustomDateInput
                      name="endtime"
                      label="label"
                      type="time"
                      onChange={formik.handleChange}
                      value={formik.values.endtime}
                    />
                  </div>{" "}
                </div>
              </div>
              <Box className={classes.btns}>
                <CustomButton style={{ marginTop: 20, marginRight: 10, borderRadius: 10 }} onClick={handleBack}>
                  Back
                </CustomButton>
                <CustomButton type="submit" style={{ marginTop: 20, marginLeft: 10, borderRadius: 10 }}>
                  {isAddingTopic ? <CircularProgress style={{ fontSize: 40, color: "#DA7B93" }} /> : "Next"}
                </CustomButton>
              </Box>
            </form>

          </Grid>
          <Grid item md="2"></Grid>

        </Grid>


      </Container>
    </Box>
  );
}

export default LessionDetail;
