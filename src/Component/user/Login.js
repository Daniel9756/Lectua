import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { CustomButton } from "../../controls/Button";
import { CustomInput, LabelText, Title } from "../../controls/Input";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  register: {
    marginTop: 60,
    background: "#376e6f",
    color: "#fff",
    width: "100%",
    height: "auto",
    padding: 20,
    paddingBottom: 40,
    borderRadius: 12,
  },
  Istgrid: {
    backgroundImage: `url(/images/whero.jpg)`,
    marginTop: 60,
    width: "100%",
    height: "auto",
    borderRadius: 12,

  },
  Secgrid: {
    backgroundImage: `url(/images/whero4.jpg)`,
    marginTop: 60,
    width: "100%",
    height: "auto",
    borderRadius: 12,

  }
}));
function Login() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item md="4" className={classes.Istgrid}></Grid>
        <Grid item md="4" className={classes.Secgrid}></Grid>
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
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
              color: "#DA7B93",
            }}
          >
            Don't have an account{" "}
            <Link to="/register" style={{ marginLeft: 10 }}>Register</Link>{" "}
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
                color: "#376e6f",
                background: "#DA7B93",
                borderRadius: 12,
                marginTop: 20,
              }}
            >
            Login
            </CustomButton>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
