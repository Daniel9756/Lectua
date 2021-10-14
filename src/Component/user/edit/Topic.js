import React, { useContext } from "react";
import { CustomSelect } from "../../../controls/Select";
import { CustomInput, LabelText, CustomDateInput, Title } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { useFormik } from "formik";

import * as lecturerData from "../../../utils/LecturerData";
import { GlobalContext } from "../../../Context/Provider";
import { editATopic } from "../../../Context/actions/timeTable/teacher";
import { getTimetable } from "../../../Context/actions/timeTable/teacher"

import {
    Box,
    CircularProgress,
    Container,
    makeStyles
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

function Topic(props) {
    const classes = useStyles();
    const { item, setOpenPopUp } = props
    const { courseid, topic, eventtype, startdate, starttime, enddate, endtime, id } = item
    const {
        timetableDispatch,
        editedTopicDispatch,
        editedTopicState: {
            edittopic: {
                isEditingTopic, editedTopic, isError: isErr, isEditedTopic },
        },
    } = useContext(GlobalContext);
    console.log(isEditingTopic, editedTopic, isErr, isEditedTopic);
    const userID = localStorage.getItem("userID");



    
    const formik = useFormik({
        initialValues: {
            topic: topic,
            eventtype: eventtype,
            startdate: startdate,
            starttime: starttime,
            enddate: enddate,
            endtime: endtime,
        },

        onSubmit: (values) => {
            const data = {
                values, id, courseid
            }
            editATopic(data)(editedTopicDispatch)
            if (isEditedTopic) {
                setOpenPopUp(false)
                getTimetable(userID)(timetableDispatch);

            }
        },
    });
    return (
        <Box>
            <Container>
                <Title style={{ marginBottom: 4 }}>UPdate this topic</Title>

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

                        <CustomButton type="submit" style={{ marginTop: 20, marginLeft: 10, borderRadius: 10 }}>
                            {isEditingTopic ? <CircularProgress style={{ fontSize: 40, color: "#DA7B93" }} /> : "Update"}

                        </CustomButton>
                    </Box>
                </form>




            </Container>
        </Box>
    );
}

export default Topic;
