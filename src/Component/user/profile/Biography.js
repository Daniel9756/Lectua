import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import * as lecturerData from "../../../utils/LecturerData";
import { CustomButton } from "../../../controls/Button";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  CustomInput,
  LabelText,
  Title,
  CustomTextarea,
  
} from "../../../controls/Input";
import { CustomSelect } from "../../../controls/Select";
import { CustomeFileInput } from "../../../controls/FileInput";
import ErrorMessage from "../../../utils/Error/ErrorMessage";

import { CustomCheckbox } from "../../../controls/Checkbox";

const useStyles = makeStyles({
  inputbx: {
    width: "100%",
    marginRight: 4,
    marginTop: 12,
  },
  dubinput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  dowinput: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  inbx: {
    width: "60%", marginRight: 4
  },
  upload: {
    width: "30%",
  },
  form: {
    paddingRight: 200,
    paddingLeft: 200,
    marginTop: 50,
    marginBottom: 150,

  },
  "@media (max-width: 960px)": {
    rem: {
      display: "none",
    },
    upload: {
      width: "60%",
    },
    form: {
      padding: 0,
    },
  },
  "@media (max-width: 640px)": {
    dubinput: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 12,
    },
    upload: {
      width: "100%",
    },

    inbx: {
      width: "100%", margin: 2
    },
    dowinput: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 12,
    },
  },
});

function Biography(props) {
  const classes = useStyles();
  const { handleNext, handleBio, handleFile, selectedFile } = props;
  const formik = useFormik({
    initialValues: {
      orgName: "",
      phone: "",
      city: "",
      orgAddress: "",
      orgCountry: "",
      orgState: "",
      bio: "",
      ourPolicy: false
    },
    validationSchema: Yup.object({
      orgName: Yup.string()
        .min(2, "Your name must be more than two characters long")
        .required("This field is reqiured"),
      phone: Yup.string()
        .required("This field is reqiured"),
      city: Yup.string()
        .required("This field is reqiured"),
      orgAddress: Yup.string()
        .required("This field is reqiured"),
      orgCountry: Yup.string()
        .required("This field is reqiured"),
      orgState: Yup.string()
        .required("This field is reqiured"),
      bio: Yup.string()
        .min(20, "Your bio must be more than forty characters long")
        .required("This field is reqiured"),
      ourPolicy: Yup.string()
        .required("You must accept our policy to continue"),

    }),
    onSubmit: (values, action) => {
      handleBio(values)
      // console.log(values, selectedFile,"submit")
      handleNext()
      action.resetForm()
    },
  });
  // console.log(formik.values)

  return (
    <Box>
      <Container style={{ padding: 20 }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Title>Please add your information for people to locate you</Title>
        </Box>

        <Box className={classes.form}>

          <form onSubmit={formik.handleSubmit}>
            <Box
              className={classes.dubinput}
            >
              <Box
                className={classes.inbx}
              >
                <LabelText for="orgName">Name of Organisation</LabelText>
                <CustomInput
                  placeholder="Your Company Name"
                  label="orgName"
                  type="text"
                  name="orgName"
                  onChange={formik.handleChange}
                  value={formik.values.orgName}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.orgName} />
                  )}
                </div>
              </Box>
              <Box className={classes.inbx}>
                <LabelText for="phone">Phone Number</LabelText>
                <CustomInput
                  placeholder="Your Company Number"
                  label="phone"
                  type="text"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.phone} />
                  )}
                </div>
              </Box>
            </Box>
            <Box
              className={classes.dubinput}
            >
              <Box className={classes.inbx}>
                <LabelText for="orgAddress">Address</LabelText>
                <CustomInput
                  placeholder="Your Company Address"
                  label="orgAddress"
                  type="text"
                  name="orgAddress"
                  onChange={formik.handleChange}
                  value={formik.values.orgAddress}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.orgAddress} />
                  )}
                </div>
              </Box>
              <Box className={classes.inbx}>
                <LabelText for="city">City</LabelText>
                <CustomInput
                  placeholder="Your Company city"
                  label="city"
                  type="text"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.city} />
                  )}
                </div>
              </Box>
            </Box>
            <Box
              className={classes.dubinput}
            >
              <Box className={classes.inbx}>
                <LabelText for="orgCountry">Country</LabelText>
                <CustomSelect
                  placeholder="Your Country"
                  label="orgCountry"
                  type="text"
                  name="orgCountry"
                  options={lecturerData.lecturerCountry()}
                  onChange={formik.handleChange}
                  value={formik.values.orgCountry}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.orgCountry} />
                  )}
                </div>
              </Box>
              <Box className={classes.inbx}>
                <LabelText for="orgState">State</LabelText>
                <CustomSelect
                  placeholder="Your State"
                  label="orgState"
                  type="text"
                  name="orgState"
                  options={lecturerData.lecturerState()}
                  onChange={formik.handleChange}
                  value={formik.values.orgState}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.orgState} />
                  )}
                </div>
              </Box>
            </Box>

            <Box style={{}}>
              <Title>Note on your company</Title>
              <CustomTextarea
                placeholder="Note on your company"
                label="bio"
                type="text"
                name="bio"
                onChange={formik.handleChange}
                value={formik.values.bio}
                style={{
                  width: "100%",
                  minHeight: "100px",
                  fontFamily: "roboto",
                }}
              />
              <div style={{ marginLeft: 4 }}>
                {formik.touched && formik.errors && (
                  <ErrorMessage errorValue={formik.errors.bio} />
                )}
              </div>
            </Box>

            <Box className={classes.upload} >
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
                type="file"
                onFileSelectSuccess={handleFile}
                onFileSelectError={({ error }) => alert(error)}
              />
            </Box>
            <Box className={classes.inputbx}>
              <LabelText for="ourPolicy">Our Policy</LabelText>
              <CustomCheckbox
                label="ourPolicy"
                type="checkbox"
                name="ourPolicy"
                onChange={formik.handleChange}
                value={formik.values.ourPolicy}
                style={{ color: "#2f4454" }}
              />
              <div style={{ marginLeft: 4 }}>
                {formik.touched && formik.errors && (
                  <ErrorMessage errorValue={formik.errors.ourPolicy} />
                )}
              </div>
            </Box>

            <CustomButton
              style={{
                width: 150,
                background: "#376e6f",
                float: "right",
                height: 40,
                color: "#DA7B93",
                margin: 10,
                borderRadius: 10,
              }}
              text="Next"
              type="Submit"
            >
              Next
            </CustomButton>
          </form>

        </Box>
      </Container>
    </Box>

  );
}

export default Biography;
