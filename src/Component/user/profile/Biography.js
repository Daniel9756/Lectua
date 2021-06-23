import React, { useReducer, useState } from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import * as lecturerData from "../../../utils/LecturerData";
import { GroupButton } from "../../../controls/Button";

import {
  CustomInput,
  LabelText,
  Title,
  CustomTextarea,
  Info,
} from "../../../controls/Input";
import { CustomSelect } from "../../../controls/Select";
import { CustomeFileInput } from "../../../controls/FileInput";

import { CustomCheckbox } from "../../../controls/Checkbox";

const useStyles = makeStyles({
  inputbx: {
    width: "100%",
    marginRight: 4,
    marginTop: 12,
  },
});

function Biography(props) {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const { handleNext } = props;
  const handleFile = (avater) => {
    console.log(avater);
    setSelectedFile(avater);
  };

  return (
    <Box>
      <Container style={{ padding: 20 }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <Title>Please add the information for people to locate you</Title>
        </Box>

        <Box>
          <Grid container>
            <Grid item md="8" sm="12">
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <Box style={{ width: "60%", marginRight: 4 }}>
                  <LabelText for="orgCountry">Name of Organisation</LabelText>
                  <CustomInput
                    type="text"
                    name="orgCountry"
                    options={lecturerData.lecturerCountry()}
                  ></CustomInput>
                </Box>
                <Box style={{ width: "40%", marginLeft: 4 }}>
                  <LabelText for="orgState">Phone Number</LabelText>
                  <CustomInput
                    type="text"
                    name="orgState"
                    options={lecturerData.lecturerState()}
                  ></CustomInput>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <Box style={{ width: "60%", marginRight: 4 }}>
                  <LabelText for="orgAddress">Address</LabelText>
                  <CustomInput type="text" name="orgAddress"></CustomInput>
                </Box>
                <Box style={{ width: "40%", marginLeft: 4 }}>
                  <LabelText for="email">Email</LabelText>
                  <CustomInput type="text" name="email"></CustomInput>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <Box style={{ width: "50%", marginRight: 4 }}>
                  <LabelText for="orgCountry">Country</LabelText>
                  <CustomSelect
                    type="text"
                    name="orgCountry"
                    options={lecturerData.lecturerCountry()}
                  ></CustomSelect>
                </Box>
                <Box style={{ width: "50%", marginLeft: 4 }}>
                  <LabelText>State</LabelText>
                  <CustomSelect
                    type="text"
                    name="orgState"
                    options={lecturerData.lecturerState()}
                  ></CustomSelect>
                </Box>
              </Box>

              <Box style={{}}>
                <Title>Note on your company</Title>
                <CustomTextarea
                  type="text"
                  name="biography"
                  style={{
                    width: "100%",
                    minHeight: "100px",
                    fontFamily: "roboto",
                  }}
                ></CustomTextarea>
              </Box>

              <Box className={classes.inputbx} style={{ width: "50%" }}>
                <LabelText for="file">
                  Upload profile picture(25MB max.)
                  <small
                    style={{
                      color: "#DA7B93",
                    }}
                  >
                    {" "}
                    {selectedFile ? selectedFile.name : ""}
                  </small>
                </LabelText>

                <CustomeFileInput
                  name="avater"
                  onFileSelectSuccess={handleFile}
                  onFileSelectError={({ error }) => alert(error)}
                />
              </Box>
              <Box className={classes.inputbx}>
                <LabelText>Our Policy</LabelText>
                <CustomCheckbox
                  type="checkbox"
                  name="ourPolicy"
                  style={{ color: "#2f4454" }}
                ></CustomCheckbox>
              </Box>

              <GroupButton
                onClick={handleNext}
                style={{
                  width: 150,
                  background: "#376e6f",
                  float: "right",
                  height: 40,
                  color: "#DA7B93",
                  margin: 10,
                  borderRadius: 10,
                }}
              >
                Next
              </GroupButton>
            </Grid>
            <Grid item md="4" sm="12">
              <Box
                style={{
                  border: "2px solid #DA7B93",
                  borderRadius: 8,
                  width: "100%",
                  height: "500px",
                  background: "#dcdde1",
                  margin: 20,
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Biography;
