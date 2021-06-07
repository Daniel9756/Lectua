import React from "react";
import { CustomSelect } from "../../../controls/Select";
import { CustomInput, LabelText, CustomDateInput } from "../../../controls/Input";
import { CustomButton } from "../../../controls/Button";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";
import ErrorMessage from "../../../utils/Error/ErrorMessage";
import {addDetail} from "../../../Async/lessonDetail"
import { useMutation, useQueryClient } from "react-query";

import {
  CircularProgress
} from "@material-ui/core";


const options = [
  { value: "select", label: "select" },
  { value: "tutorial", label: "tutorial" },
  { value: "annoucement", label: "annoucement" },
  { value: "lecture", label: "lecture" },
  { value: "fixed lecture", label: "fixed lecture" },
  { value: "prayer", label: "prayer" },
];

function LessionDetail({ handleBack, handleNext }) {
  const queryClient = useQueryClient();

  const params = useParams();
  const {
    mutate,
    isLoading: isAddingUser,
    isSuccess,
    isError,
  } = useMutation(addDetail, {
    // onSuccess: () => queryClient.invalidateQueries("details"),
        onSuccess: (data) => console.log(data, "Details inserted")

  });

 
  const formik = useFormik({
    initialValues: {
      username: "",
      courseCode: "",
      orgName: "",
      price: "",
      eventType: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Must be 2 characters or more")
        .max(30, "Must be 15 characters or less")
        .required("Your Full Name is Required"),
      courseCode: Yup.string()
        .max(12, "Must not be more than 20 characters")
        .required("Add the course code"),
      orgName: Yup.string().required("What organisation do you represent"),
      price: Yup.string().required("How much to pay for this lesson"),
      eventType: Yup.string().required("Please choose event time"),
      startDate: Yup.string().required("Lesson start date"),
      startTime: Yup.string().required("Lesson start time"),
    }),
    onSubmit: (event) => {
      event.preventDefault();
      const values = {
        details: formik.values,
        id: params.id,
      };
        mutate({values: values})
      // handleNext()
    },
  });
  // console.log(formik.values)
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginTop: 8 }}>
          <LabelText>Teacheer Name</LabelText>
          <CustomInput
            name="username"
            type="text"
            placeholder="Your Username"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        <div style={{ marginLeft: 4 }}>
          {formik.touched && formik.errors && (
            <ErrorMessage errorValue={formik.errors.username} />
          )}
        </div>
        <div style={{ marginTop: 8 }}>
          <LabelText>Course Code </LabelText>
          <CustomInput
            name="courseCode"
            placeholder="Your Course"
            type="text"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.courseCode}
          />
        </div>{" "}
        <div style={{ marginLeft: 4 }}>
          {formik.touched && formik.errors && (
            <ErrorMessage errorValue={formik.errors.courseCode} />
          )}
        </div>
        <div style={{ marginTop: 8 }}>
          <LabelText>Organisation</LabelText>
          <CustomInput
            placeholder="Organisation"
            name="orgName"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.orgName}
            type="text"
          />
        </div>{" "}
        <div style={{ marginLeft: 4 }}>
          {formik.touched && formik.errors && (
            <ErrorMessage errorValue={formik.errors.orgName} />
          )}
        </div>
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
        <div style={{ marginTop: 8 }}>
          <LabelText>Event Type </LabelText>
          <CustomSelect
            name="eventType"
            type="text"
            options={options}
            onChange={formik.handleChange}
            value={formik.values.eventType}
          />
        </div>
        <div style={{ marginLeft: 4 }}>
          {formik.touched && formik.errors && (
            <ErrorMessage errorValue={formik.errors.eventType} />
          )}
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div style={{ marginTop: 8 }}>
              <LabelText>Start Date</LabelText>
              <CustomDateInput
                name="startDate"
                label="label"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.startDate}
              />
            </div>{" "}
            <div style={{ marginLeft: 4 }}>
              {formik.touched && formik.errors && (
                <ErrorMessage errorValue={formik.errors.startDate} />
              )}
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div style={{ marginTop: 8 }}>
              <LabelText>Start Time</LabelText>
              <CustomDateInput
                name="startTime"
                label="label"
                type="time"
                onChange={formik.handleChange}
                value={formik.values.startTime}
              />
            </div>{" "}
            <div style={{ marginLeft: 4 }}>
              {formik.touched && formik.errors && (
                <ErrorMessage errorValue={formik.errors.startTime} />
              )}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div style={{ marginTop: 8 }}>
              <LabelText>End Date</LabelText>
              <CustomDateInput
                name="endDate"
                label="label"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.endDate}
              />
            </div>{" "}
          </div>
          <div class="col-md-6 col-sm-12">
            <div style={{ marginTop: 8 }}>
              <LabelText>End Time</LabelText>
              <CustomDateInput
                name="endTime"
                label="label"
                type="time"
                onChange={formik.handleChange}
                value={formik.values.endTime}
              />
            </div>{" "}
          </div>
        </div>
        <CustomButton style={{ marginTop: 20 }} type="submit">
        {isAddingUser ? <CircularProgress style={{ fontSize: 40, color: "#DA7B93" }} /> :  "Next"}
        </CustomButton>
      </form>
      <CustomButton style={{ marginTop: 20 }} onClick={handleBack}>
        Back
      </CustomButton>
    </>
  );
}

export default LessionDetail;
