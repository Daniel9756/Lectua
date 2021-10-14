import {
  Box,
  Grid,
  makeStyles,
  Avatar,
  Container,
  CircularProgress,
} from "@material-ui/core";
import React, { useContext } from "react";
import { CustomButton } from "../../controls/Button";
import { CustomSelect } from "../../controls/Select";
import { CustomInput, LabelText, Title,  } from "../../controls/Input";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../utils/Error/ErrorMessage";
import { addUser } from "../../Context/actions/auth/Register";
import { GlobalContext } from "../../Context/Provider";
import * as lecturerData from "../../utils/LecturerData";
import MessageBox from "../../utils/Alert";

const useStyles = makeStyles((theme) => ({
  register: {
    marginTop: 10,
    marginBottom: 40,
    background: "#fff",
    width: "100%",
    height: "auto",
    padding: 20,
    paddingBottom: 40,
    borderRadius: 12,
    zIndex: 20,
  },
  Istgrid: {
    width: "100vh",
    height: "100%",
    borderRadius: 12,
  },
  pics: {
    marginRight: -100
  },

  "@media (max-width: 960px)": {
    pics: {
      display: "none",
      top: 4,
    },

  },
  "@media (max-width: 440px)": {

  },
}));
function Register() {
  const classes = useStyles();
  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { isCreatingUser,  isAuthenticated, user, isError },
    },
  } = useContext(GlobalContext);

  localStorage.setItem("userID", user?.userID);

  

  if (user?.registerAs === "Teacher") {
    history.push("/CreateProfile")
  }
  if (user?.registerAs === "Student") {
    history.push("/StudentProfile")
  }


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      registerAs: "",
      phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Your name must be more than two characters long")
        .required("This field is reqiured"),
      lastName: Yup.string()
        .min(2, "Your name must be more than two characters long")
        .required("This field is reqiured"),
      email: Yup.string()
        .required("This field is reqiured")
        .email("Invalid email address"),
      password: Yup.string()
        .min(6, "Your password must be more than 6 characters long")
        .required("This field is reqiured"),
      phone: Yup.string()
        .min(10, "Your phone must be more than 10 characters long")
        .required("This field is reqiured"),
      registerAs: Yup.string()
        .required("This field is reqiured")

    }),
    onSubmit: (values, action) => {
      // console.log(values)
      addUser(values)(authDispatch);
      action.resetForm()
    },
  });
  // console.log(formik.values)
  return (
    <Box style={{ background: "#2f4454", paddingBottom: 40 }}>
      <Container>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <Grid item md="7" className={classes.pics}>
            <Avatar
              variant="rounded"
              src="/images/carol6.jpg"
              alt="company logo"
              className={classes.Istgrid}
            ></Avatar>
          </Grid>

          <Grid item md="5" className={classes.register}>
            <Title
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Thanks for Choosen Us
            </Title>
            {isAuthenticated && (<MessageBox message={user?.message} severity="success" />)}
            {isError && (<MessageBox message={user?.message} severity="error" />)}
            <form onSubmit={formik.handleSubmit}>
              <div
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 20,
                  color: "#DA7B93",
                  fontWeight: "bold",
                  fontFamily: "serif",
                  zIndex: 20,
                }}
              >
                I already have an account{" "}
                <Link to="/login" style={{ marginLeft: 10 }}>
                  Login
                </Link>{" "}
              </div>
              <div>
                <LabelText for="firstName">First Name</LabelText>
                <CustomInput
                  name="firstName"
                  type="text"
                  placeholder="Your first Name"
                  label="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.firstName} />
                  )}
                </div>
              </div>
              <div>
                <LabelText for="lastName">Last Name</LabelText>
                <CustomInput
                  name="lastName"
                  type="text"
                  placeholder="Your last Name"
                  label="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.lastName} />
                  )}
                </div>
              </div>
              <div>
                <LabelText>Email</LabelText>
                <CustomInput
                  name="email"
                  type="text"
                  placeholder="Your Email address"
                  label="label"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.email} />
                  )}
                </div>
              </div>
              <div>
                <LabelText>Phone Number</LabelText>
                <CustomInput
                  name="phone"
                  type="text"
                  placeholder="Your phone number"
                  label="label"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.phone} />
                  )}
                </div>
              </div>
              <div>
                <LabelText>Password</LabelText>
                <CustomInput
                  name="password"
                  type="text"
                  placeholder="Your Password"
                  label="label"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.password} />
                  )}
                </div>
              </div>{" "}
              <div>
                <LabelText>Register As:</LabelText>
                <CustomSelect
                  type="text"
                  name="registerAs"
                  options={lecturerData.signupAs()}
                  onChange={formik.handleChange}
                  value={formik.values.registerAs}
                />
                <div style={{ marginLeft: 4 }}>
                  {formik.touched && formik.errors && (
                    <ErrorMessage errorValue={formik.errors.registerAs} />
                  )}
                </div>

              </div>{" "}
              <div>
                <CustomButton
                  style={{
                    color: "#DA7B93",
                    background: "#2f4454",
                    borderRadius: 12,
                    marginTop: 20,
                  }}
                  type="Submit"
                >
                  {isCreatingUser ? (
                    <CircularProgress
                      style={{ fontSize: 40, color: "#DA7B93" }}
                    />
                  ) : (
                    "Sign Up"
                  )}
                </CustomButton>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
       </Box>
  );
}

export default Register;
