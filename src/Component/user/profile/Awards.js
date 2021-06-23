import React, { useReducer } from "react";

import { GroupButton } from "../../../controls/Button";
import * as lecturerData from "../../../utils/LecturerData";

import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import {
  CustomInput,
  LabelText,
  Title,
  CustomTextarea,
  Info,
} from "../../../controls/Input";
import { CustomSelect } from "../../../controls/Select";
import { BiBold } from "react-icons/bi";

const useStyles = makeStyles({
  inputbx: {},
});

const dynamicCertificateInitialState = [1];
const dynamicCertificateReducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "REMOVE":
      return state.filter((_, index, arr) => index !== arr.length - 1);
    case "ADD":
      return [...state, 1];
    default:
      return dynamicCertificateInitialState;
  }
};
function Awards(props) {
  const { handleNext, handleBack } = props;
  const classes = useStyles();

  const [dynamicCertificate, dynamicCertificateDispatch] = useReducer(
    dynamicCertificateReducer,
    dynamicCertificateInitialState
  );

  return (
    <Box>
      <Container>
        <Grid container style={{ textAlign: "center", marginBottom: 22 }}>
          <Grid item md="3"></Grid>
          <Grid item md="6">
            <Box style={{ textAlign: "center", marginBottom: 22 }}>
              {" "}
              <Title>Qualifications</Title>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Box style={{ width: "50%", marginRight: 4 }}>
                <LabelText>Specialty</LabelText>
                <CustomSelect
                  type="text"
                  name="specialty"
                  options={lecturerData.lecturerSpecialty()}
                ></CustomSelect>
              </Box>
              <Box style={{ width: "50%", marginLeft: 4 }}>
                <LabelText>
                  Subjects(<em>You can add up to 20 subjects</em>)
                </LabelText>
                <CustomSelect
                  type="text"
                  name="subject"
                  options={lecturerData.lecturerSubject()}
                ></CustomSelect>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Box>
                {" "}
                <Info>Certifications</Info>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 40,
                }}
              >
                <GroupButton
                  type="button"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                    borderRadius: 4,
                    fontSize: 15,
                    fontWeight: "bold",
                    background: "#376e6f",
                    color: "#fff",
                    width: 30,
                  }}
                  onClick={() => dynamicCertificateDispatch({ type: "REMOVE" })}
                >
                  -
                </GroupButton>
                <LabelText style={{ width: 30, textAlign: "center" }}>
                  {dynamicCertificate.length}
                </LabelText>
                <GroupButton
                  type="button"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                    borderRadius: 4,
                    fontSize: 15,
                    fontWeight: "bold",
                    background: "#376e6f",
                    color: "#fff",
                    width: 30,
                  }}
                  onClick={() => dynamicCertificateDispatch({ type: "ADD" })}
                >
                  +
                </GroupButton>
              </Box>
            </Box>
            {dynamicCertificate.map((item, index) => {
              return (
                <Box
                  style={{
                    background: "#2f4454",
                    borderRadius: 8,
                    padding: 25,
                    marginTop: 10,
                  }}
                >
                  <Box style={{ width: "100%" }}>
                    <CustomInput
                      placeholder="Certificate title"
                      type="text"
                      name={`certifications[${index}].awardTitle`}
                    ></CustomInput>
                  </Box>

                  <Box style={{ width: "100%" }}>
                    <CustomInput
                      placeholder="Name of the Organisation"
                      type="text"
                      name={`certifications[${index}].awardOrg`}
                    ></CustomInput>
                  </Box>
                </Box>
              );
            })}
            <Box style={{ width: "30%", marginTop: 20 }}>
              <LabelText>Profile image</LabelText>
              <CustomInput type="file" name="avater"></CustomInput>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <GroupButton
                onClick={handleBack}
                style={{
                  width: 70,
                  background: "#376e6f",
                  height: 40,
                  color: "#DA7B93",
                  borderRadius: 10,
                }}
              >
                Back
              </GroupButton>
              <GroupButton
                onClick={handleNext}
                style={{
                  width: 70,
                  background: "#376e6f",
                  height: 40,
                  color: "#DA7B93",
                  borderRadius: 10,
                }}
              >
                Next
              </GroupButton>
            </Box>
          </Grid>
          <Grid item md="3"></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Awards;
