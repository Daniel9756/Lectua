import React, { useState} from "react";
import SubjectTable from "../SubjectTable";
import CreateSession from "./CreateSession";
import LessionDetail from "./LessonDetail";
import CreateFinish from "./CreateFinish";
import InviteStudent from "./InviteStudents";
import { Stepper, Step, StepLabel, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cont: {
    marginTop: 20, marginBottom: 40
  },
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
  "@media (max-width: 960px)": {

  },
  "@media (max-width: 440px)": {
    cont: {
      display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
    },
  },
});


function getSteps() {
  return ["CREATE SESSION", "SET TIMETABLE", "INVITE", "FINISH"];
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
    <Box>
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
      <div class="row" className={classes.cont}>

        <Box>

          {getStepContent(activeStep)}

        </Box>

        <Box>
          {" "}
          <SubjectTable />
        </Box>
      </div>

    </Box>
  );
}

export default Lesson;
