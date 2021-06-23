import {
  Box,
  Grid,
  makeStyles,
  Avatar,
  Container,
  CircularProgress,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { CustomButton } from "../../controls/Button";
import { CustomInput, LabelText, Title, Info } from "../../controls/Input";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../utils/Error/ErrorMessage";
import { addUser } from "../../Context/actions/auth/Register";
import { GlobalContext } from "../../Context/Provider";
 const useStyles = makeStyles((theme) => ({
  register: {
    marginTop: 10,
    marginBottom: 40,
    background: "#fff",
    // color: "#fff",
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
}));
function Register() {
  const classes = useStyles();
  const history = useHistory();
  
  const {
    authDispatch,
    authState: {
      auth: { isCreatingUser, error, isAuthenticated, user },
    },
  } = useContext(GlobalContext);


  const errMassage = "Your account was not  created";
  if(user){
    history.push("/Login")
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
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
    }),
    onSubmit: (values) => {
      addUser(values)(authDispatch);
    },
  });
  return (
    <Box style={{ background: "#2f4454", paddingBottom: 40 }}>
      <Container>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <Grid item md="8" style={{ marginRight: -100 }}>
            <Avatar
              variant="rounded"
              src="/images/carol6.jpg"
              alt="company logo"
              className={classes.Istgrid}
            ></Avatar>
          </Grid>

          <Grid item md="4" className={classes.register}>
            <Title
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Thanks for Choosing Us
            </Title>
            <Info style={{ fontSize: 10 }}>
              {error ||
                (error == undefined && (
                  <ErrorMessage errorValue={errMassage} />
                ))}
            </Info>
            <Info
              style={{
                fontSize: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "green",
              }}
            >
              {user && (
                <ErrorMessage
                  errorValue={user.message}
                 
                />
              )}
            </Info>
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
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
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
