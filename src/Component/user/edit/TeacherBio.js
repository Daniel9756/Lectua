import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Container,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import * as lecturerData from "../../../utils/LecturerData";
import { CustomButton } from "../../../controls/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import MessageBox from "../../../utils/Alert";
import {
  CustomInput,
  LabelText,
  Title,
  CustomTextarea,
} from "../../../controls/Input";
import { CustomSelect } from "../../../controls/Select";
import { CustomeFileInput } from "../../../controls/FileInput";
import ErrorMessage from "../../../utils/Error/ErrorMessage";

import { GlobalContext } from "../../../Context/Provider";
import { editProfile } from "../../../Context/actions/profile/Profile";

const useStyles = makeStyles({
  dubinput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  inbx: {
    width: "60%",
    marginRight: 4,
  },
  upload: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

function TeacherBio(props) {
  const classes = useStyles();

  const { setOpenPopUp } = props;
  const {
    editDispatch,
    editState: {
      edit: { isEditingProfile, error, isEdited, editor, isError },
    },
    getprofileState: {
      getprofile: {
        isGettingprofile: isFetching,
        folder,
        isFetched,
        isError: isMistake,
      },
    },
  } = useContext(GlobalContext);
  const item = folder?.data;
  const [fileMessage, setFileMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const userId = localStorage.getItem("userId");
  // console.log(isEditingProfile, error, isEdited, editor, isError)

  useEffect(() => {
    if (isEdited) {
      setOpenPopUp(false);
    }
  }, [setOpenPopUp]);

  const handleFiles = (pics) => {
    setSelectedFile(pics);
  };
  console.log(editor);
  const formik = useFormik({
    initialValues: {
      orgName: item?.orgName,
      phone: item?.phone,
      city: item?.city,
      orgAddress: item?.orgAddress,
      orgCountry: item?.orgCountry,
      orgState: item?.state,
      bio: item?.bio,
    },
    validationSchema: Yup.object({
      orgName: Yup.string()
        .min(2, "Your name must be more than two characters long")
        .required("This field is reqiured"),
      phone: Yup.string().required("This field is reqiured"),
      city: Yup.string().required("This field is reqiured"),
      orgAddress: Yup.string().required("This field is reqiured"),
      orgCountry: Yup.string().required("This field is reqiured"),
      orgState: Yup.string().required("This field is reqiured"),
      bio: Yup.string()
        .min(20, "Your bio must be more than forty characters long")
        .required("This field is reqiured"),
    }),
    onSubmit: (values, action) => {
      if (selectedFile === "") {
        return setFileMessage("Please select a file !!!");
      }
      const data = {
        values,
        selectedFile,
        userId,
      };
      editProfile(data)(editDispatch);
      action.resetForm();
    },
  });

  return (
    <Container style={{ padding: 5 }}>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Box className={classes.dubinput}>
            <Box className={classes.inbx}>
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
          <Box className={classes.dubinput}>
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
          <Box className={classes.dubinput}>
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

          <div
            style={{
              color: "#DA7B93",
              fontFamily: 'cursive',
              textTransform: "capitalize"
            }}
          >
            {fileMessage}
          </div>

          <Box className={classes.upload}>
            <CustomeFileInput
              style={{
                margin: 4,
              }}
              type="file"
              onFileSelectSuccess={handleFiles}
              onFileSelectError={({ error }) => alert(error)}
            />
            <CustomButton
              style={{
                width: 150,
                background: "#376e6f",
                float: "right",
                height: 40,
                color: "#DA7B93",
                margin: 4,
                borderRadius: 10,
              }}
              type="Submit"
            >
              {isEditingProfile ? (
                <CircularProgress style={{ fontSize: 15, color: "#DA7B93" }} />
              ) : (
                "UPdate"
              )}
            </CustomButton>
          </Box>
          {isEdited &&
            editor?.message ===
              "Sorry, We cannot process your request at this time. Please try again later" && (
              <MessageBox message={editor?.message} severity="error" />
            )}
          {isEdited &&
            editor?.message === "Your Profile Updated successfully" && (
              <MessageBox message={editor?.message} severity="success" />
            )}
        </form>
      </Box>
    </Container>
  );
}

export default TeacherBio;
