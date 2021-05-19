import React from "react";
import {
  CustomInput,
  InputLabel,
  CustomDateInput,
 
} from "../../controls/Input";
import { CustomSelect } from "../../controls/Select";
import { CustomButton } from "../../controls/Button";
import { useFormik } from "formik";

const options = [
  { value: "tutorial", label: "tutorial" },
  { value: "annoucement", label: "annoucement" },
  { value: "lecture", label: "lecture" },
  { value: "fixed lecture", label: "fixed lecture" },
  { value: "prayer", label: "prayer" },
];

function LessionDetail({handleBack, handleNext}) {
  const formik = useFormik({
    initialValues: {
      courseCode: "",
      username: "",
      orgName: "",
      price: "",
      eventType: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    },
    onSubmit: (values) => {
      //   mutate({values: values})
      // handleNext()
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginTop: 8 }}>
          <InputLabel>Teacheer Name</InputLabel>
          <CustomInput
            name="username"
            type="text"
            placeholder="Your Username"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <InputLabel>Course Code </InputLabel>
          <CustomInput
            name="courseCode"
            placeholder="Your Course"
            type="text"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.courseCode}
          />
        </div>{" "}
        <div style={{ marginTop: 8 }}>
          <InputLabel>Organisation</InputLabel>
          <CustomInput
            placeholder="Organisation"
            name="orgName"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.orgName}
            type="text"
          />
        </div>{" "}
        <div style={{ marginTop: 8 }}>
          <InputLabel>Price</InputLabel>
          <CustomInput
            placeholder="eg. Free or #1000"
            name="price"
            label="label"
            onChange={formik.handleChange}
            value={formik.values.price}
            type="text"
          />
        </div>{" "}
        <div style={{ marginTop: 8 }}>
          <InputLabel>Event Type </InputLabel>
          <CustomSelect
            name="eventType"
            type="text"
            options={options}
            onChange={formik.handleChange}
            value={formik.values.eventType}
          />
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div style={{ marginTop: 8 }}>
              <InputLabel>Start Date</InputLabel>
              <CustomDateInput
                name="startDate"
                label="label"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.startDate}
              />
            </div>{" "}
          </div>
          <div class="col-md-6 col-sm-12">
            <div style={{ marginTop: 8 }}>
              <InputLabel>Start Time</InputLabel>
              <CustomDateInput
                name="startTime"
                label="label"
                type="time"
                onChange={formik.handleChange}
                value={formik.values.startTime}
              />
            </div>{" "}
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div style={{ marginTop: 8 }}>
              <InputLabel>End Date</InputLabel>
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
              <InputLabel>End Time</InputLabel>
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
        <CustomButton style={{marginTop: 40}} type="submit">
          Next
        </CustomButton>
      </form>
      <CustomButton style={{marginTop: 40}} onClick={handleBack}>
        Back
      </CustomButton>
    </>
  );
}

export default LessionDetail;
