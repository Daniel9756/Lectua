
import { Container, Grid, makeStyles, Box, Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import { CustomButton } from "../../controls/Button";
import { CustomInput, LabelText, Title, Info } from "../../controls/Input";
import { GlobalContext } from "../../Context/Provider";
import { useFormik } from "formik";
import { loginUser } from "../../Context/actions/auth/Login";
import { Link, useHistory } from "react-router-dom";
import MessageBox from "../../utils/Alert";


const useStyles = makeStyles((theme) => ({
  register: {
    marginBottom: 40,
    background: "#fff",
    width: "100%",
    height: "auto",
    padding: 11,

    borderRadius: 12,
    zIndex: 5,
    marginTop: 30,
  },
  Istgrid: {
    width: "100vh",
    height: "100%",
    borderRadius: 12,
  },

  "@media (max-width: 960px)": {
    pics: {
      display: "none",
    },
    register: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      paddingBottom: 15,
    },
  },
  "@media (max-width: 440px)": {
    register: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

    },
  },
}));
function Login() {
  const classes = useStyles();
  const history = useHistory();

  const {
    loginDispatch,
    authState: {
      auth: { isAuthenticated, user },
    },
    loginState: {
      login: { isLoggin, logger, isPemmitted },
    },
  } = useContext(GlobalContext);
  console.log(isLoggin, logger, isPemmitted, logger?.user?.id)
  localStorage.setItem("token", logger?.token);
  localStorage.setItem("userId", logger?.user?.id);
  localStorage.setItem("firstName", logger?.user?.firstName);
  localStorage.setItem("registerAs", logger?.user?.registerAs);


  if (logger?.user?.registerAs === "Teacher") {
    history.push({
      pathname: '/MyProfile/MyLectures',
      state: {
        id: logger?.user?.id,
        fname: logger?.user?.firstName,
      }
    })
  }
  if (logger?.user?.registerAs === "Student") {
    history.push({
      pathname: '/Student/MyProfile',
      state: {
        id: logger?.user?.userId,
        fname: logger?.user?.firstName,
      }
    })
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values, action) => {
      loginUser(values)(loginDispatch);
      action.resetForm()
    },
  });
  return (

    <Box style={{ background: "#2f4454", }}>
      <Container>
        <Grid
          container
          style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 20 }}
        >
          <Grid item md={8} className={classes.pics}>
            <Avatar
              variant="rounded"
              src="/images/carol6.jpg"
              alt="company logo"
              className={classes.Istgrid}
            ></Avatar>
          </Grid>

          <Grid item md={4} sm={8} className={classes.register}>
            <Title
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Welcome Back
            </Title>
            {isAuthenticated && (
              <Info
                style={{
                  fontSize: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#2f4454",
                  textTransform: "uppercase",
                }}
              >
                {user?.user?.firstName}
              </Info>
            )}
            <div
              style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                color: "#DA7B93",
                fontWeight: "bold",
                fontFamily: "serif",
              }}
            >
              Don't have an account{" "}
              <Link to="/Register" style={{ marginLeft: 10 }}>
                Register
              </Link>{" "}
            </div>
            {logger && (<MessageBox message={logger?.message} severity="error" />)}

            <form onSubmit={formik.handleSubmit}>

              <Box>
                <LabelText>Email</LabelText>
                <CustomInput

                  name="email"
                  type="text"
                  placeholder="Your Email"
                  label="label"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Box>
              <Box>
                <LabelText>Password</LabelText>

                <CustomInput
                  name="password"
                  type="text"
                  placeholder="Your Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}

                />

              </Box>{" "}


              <Box>
                <CustomButton
                  type="Submit"
                  style={{
                    color: "#DA7B93",
                    background: "#2f4454",
                    borderRadius: 12,
                    marginTop: 20,
                  }}
                >
                  Login
                </CustomButton>
              </Box>
            </form>
            <Box style={{
              marginTop: 10,
              paddingLeft: 11
            }}>

              <Link >
                Forget password
              </Link>{" "}
            </Box>{" "}
          </Grid>
        </Grid>
      </Container>{" "}
    </Box>
  );
}

export default Login;
