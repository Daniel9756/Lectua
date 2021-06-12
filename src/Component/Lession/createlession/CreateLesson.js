import React, { useState } from "react";
import { Title } from "../../../controls/Input";
// import { CustomSelect } from "../controls/Select";
import LessonTable from "../Table";
import CreateSession from "./CreateSession";
import LessionDetail from "./LessonDetail";
import CreateFinish from "./CreateFinish";
import InviteStudent from "./InviteStudents";
import { Stepper, Step, StepLabel, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "2rem auto",
    boxShadow: "2px black",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#DA7B93",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#2f4454",
    },
  },
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


function getSteps() {
  return ["CREATE SESSION", "ADD DETAILS", "INVITE", "FINISH"];
}

function Lesson() {
  function getStepContent(index) {
    switch (index) {
      case 0:
        return <CreateSession handleNext={handleNext} />;
      case 1:
        return (
          <LessionDetail handleBack={handleBack} handleNext={handleNext} />
        );
      case 2:
        return (
          <InviteStudent handleBack={handleBack} handleNext={handleNext} />
        );
      case 3:
        return (
          <CreateFinish handleBack={handleBack} setActiveStep={setActiveStep} />
        );
      default:
        return "UNKNOWN STEP";
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Container className="container-fluid">
        <div>
          <Stepper
            alternativeLabel
            className={classes.root}
            activeStep={activeStep}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        {/* <div style={{ marginLeft: 20 }}></div> */}
        <div class="row" style={{ marginTop: 40, marginBottom: 40 }}>
          <div style={{ marginLeft: 20 }}>
            <Title>create your classroom</Title>
            <h4 className={classes.minutes}>in less than 5 minutes</h4>
            {/* <data>{isSuccess ? <div>Lecture Fixed</div> : null}</data> */}
          </div>
          <div className="col-sm-12 col-md-4">
            <div>
              <div style={{ margin: 20 }}>{getStepContent(activeStep)}</div>
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: 10,
                  marginRight: 5,
                  marginBottom: 20,
                }}
              ></div>
              <div
                className="row"
                style={{ marginLeft: 10, marginRight: 5, marginBottom: 20 }}
              ></div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8">
            {" "}
            <LessonTable />
          </div>
        </div>
      
      </Container>
    </>
  );
}

export default Lesson;
