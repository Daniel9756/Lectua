import React from "react";
import {
  CustomInput,
  LabelText,
  CustomDateInput,
  Title,
  Info,
} from "../../../controls/Input";
import { MdAddCircle } from "react-icons/md";
import { CustomButton } from "../../../controls/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";

function CreateFinish({ handleBack, setActiveStep }) {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: 4,
          }}
        >
          <LabelText style={{ color: "#DA7B93" }}>Create More</LabelText>
          <MdAddCircle
            onClick={() => setActiveStep(0)}
            style={{ fontSize: 25, marginRight: 16, cursor: "pointer", }}
          />
        </div>
        <div style={{ margin: 4 }}>
          <Title>Congratulations</Title>
          <LabelText style={{ marginTop: 8 }}>
            You have successfully created your virtual classroom
          </LabelText>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <CustomButton>
          <a href="/" style={{textDecoration: "none", color: "#DA7B93",  }}>Finish</a>
        </CustomButton>

        <CustomButton style={{ marginTop: 20 }} onClick={handleBack}>
          Back
        </CustomButton>
      </div>
    </div>
  );
}

export default CreateFinish;
