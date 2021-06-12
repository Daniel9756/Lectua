import React, { useState } from "react";
import Service from "../../service/Service"
import Plan from "./Plan";
import Biography from "./Biography";
import Awards from "./Awards";
import Congrates from "./Congrates";

import { Stepper, Step, StepLabel, Container, Box } from "@material-ui/core";
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
  return ["BIOGRAPHY", "SELECT PLAN", "CERTIFICATES", "DONE"];
}

function Profile() {
  function getStepContent(index) {
    switch (index) {
      case 0:
        return <Biography handleNext={handleNext}  />;
      case 1:
        return <Plan handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <Awards handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return <Congrates handleNext={handleNext} handleBack={handleBack} />;

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
      <Box  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}>
           <Service />
        </Box>
        <Box>
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
        </Box>

        <Box>{getStepContent(activeStep)}</Box>
      </Container>
    </>
  );
}

export default Profile;
