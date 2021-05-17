import React, { useState } from "react";
import {
  CustomInput,
  InputLabel,
  CustomDateInput,
  Title,
  Info,
} from "../../controls/Input";
// import { CustomSelect } from "../controls/Select";
import { CustomSelect } from "../../controls/Select";
import { CustomButton } from "../../controls/Button";
import { CustomDivRight, CustomDivLeft } from "../../controls/Div";
import { useFormik } from "formik";
import LessonTable from "../Table";
import { useMutation, useQueryClient } from "react-query";
import { addLecture } from "../../../Async/lesson";
import { BiInfoCircle } from "react-icons/bi";
import CreateSession from "./CreateSession";
import LessionDetail from "./LessionDetail";
import { Stepper, Step, StepLabel } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { GiClawSlashes } from "react-icons/gi";
const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "6rem auto",
    border: "1px solid #999",
  },
});
const options = [
  { value: "tutorial", label: "tutorial" },
  { value: "annoucement", label: "annoucement" },
  { value: "lecture", label: "lecture" },
  { value: "fixed lecture", label: "fixed lecture" },
  { value: "prayer", label: "prayer" },
];

function getSteps() {
  return ["CREATE SESSION", "ADD DETAILS", "INVITE", "FINISH"];
}

function getStepContent(index) {
  switch (index) {
    case 0:
      return <CreateSession />;
    case 1:
      return <LessionDetail />;
    case 2:
      return "INVITE";
    case 3:
      return "FINISH";
    default:
      return "UNKNOWN STEP";
  }
}
function Lession() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const queryClient = useQueryClient();

  const {
    mutate,
    isLoading: isAddingUser,
    isSuccess,
  } = useMutation(addLecture, {
    onSuccess: () => queryClient.invalidateQueries("lectures"),

    // onSuccess: (data) => console.log(data, "user created succesfully")
  });
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className="container-fluid">
        <div>
          <Stepper alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <div style={{ marginLeft: 20 }}></div>
        <div class="row" style={{ marginTop: 40, marginBottom: 40 }}>
          <div style={{ marginLeft: 20 }}>
            <Title>create your classroom</Title>
            <data>{isSuccess ? <div>Lecture Fixed</div> : null}</data>
          </div>
          <div class="col-sm-12 col-md-4">
            <form>
              <div style={{ margin: 20 }}>{getStepContent(activeStep)}</div>

              <div
                class="row"
                style={{ marginLeft: 10, marginRight: 5, marginBottom: 20 }}
              >
               
              </div>
            </form>
          </div>

          <div class="col-sm-12 col-md-8">
            <LessonTable />
          </div>
        </div>
        <div class="row" style={{ margin: 10 }}>
          <div class="col-md-6 col-sm-12">
            <CustomDivRight />
          </div>
          <div class="col-md-6 col-sm-12">
            <CustomDivLeft />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lession;
