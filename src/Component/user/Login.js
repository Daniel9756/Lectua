import { Container, Grid, makeStyles, Box, Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import { CustomButton } from "../../controls/Button";
import { CustomInput, LabelText, Title, Info } from "../../controls/Input";
import { Link } from "react-router-dom";
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
  },
  Istgrid: {
    width: "100vh",
    height: "100%",
    borderRadius: 12,
  },
}));
function Login() {
  const classes = useStyles();

  const {
    authState: {
      auth: { isCreatingUser, error, isAuthenticated, user },
    },
  } = useContext(GlobalContext);

  return (
    <Box style={{ background: "#2f4454", paddingBottom: 100 }}>
      <Container>
        <Grid
          container
          style={{ display: "flex", alignItems: "center", paddingTop: 40 }}
        >
          <Grid item md="8">
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
                 {user.user.firstName}
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
              <Link to="/register" style={{ marginLeft: 10 }}>
                Register
              </Link>{" "}
            </div>
            <div>
              <LabelText>Email</LabelText>
              <CustomInput />
            </div>
            <div>
              <LabelText>Password</LabelText>
              <CustomInput />
            </div>{" "}
            <div>
              <CustomButton
                style={{
                  color: "#DA7B93",
                  background: "#2f4454",
                  borderRadius: 12,
                  marginTop: 20,
                }}
              >
                Login
              </CustomButton>
            </div>
          </Grid>
        </Grid>
      </Container>{" "}
    </Box>
  );
}

export default Login;
