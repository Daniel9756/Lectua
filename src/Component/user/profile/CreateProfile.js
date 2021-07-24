import React, { useState, useContext } from "react";
import Service from "../../service/Service"
import Plan from "./Plan";
import Biography from "./Biography";
import Awards from "./Awards";
import Congrates from "./Congrates";
import Footer from "../../footer/Footer"
import { GlobalContext } from "../../../Context/Provider";

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

});

function getSteps() {
  return ["BIOGRAPHY", "SELECT PLAN", "CERTIFICATES", "DONE"];
}

function CreateProfile() {
  const {
   
    loginState: {
        login: { logger, isPemmitted },
    },
} = useContext(GlobalContext);
const userID = logger?.userID

  const {
    authState: {
      auth: { user },
    },
  } = useContext(GlobalContext);

  const [biography, setBiography] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleBio=(values)=>{
    setBiography(values)
  } 
  const handlePayment = (avater) => {  
    setSelectedFile(avater);
  };
  

  const handleFile = (avater) => {  
    setSelectedFile(avater);
  };

  const message = "You have successfully completed your profile"
  const highlight = "Congrates"
  function getStepContent(index) {
    switch (index) {
      case 0:
        return <Biography handleNext={handleNext}  handleBio={handleBio} handleFile={handleFile} selectedFile={selectedFile} />;
      case 1:
        return <Plan handleNext={handleNext} handleBack={handleBack}  selectedFile={selectedFile}  biography={biography} userID={userID} />;
      case 2:
        return <Awards handleNext={handleNext} handleBack={handleBack}  handleFile={handleFile} userID={userID} />;
      case 3:
        return <Congrates handleNext={handleNext} handleBack={handleBack} message={message} highlight={highlight} />;

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
      <Container>
      <Box  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}>
           {/* <Service /> */}
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

      </Container>
        <Box>
        <Container>
          {getStepContent(activeStep)}
        </Container>
          </Box>
      <Footer />

    </>
  );
}

export default CreateProfile;
