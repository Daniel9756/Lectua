import { Box, Grid, makeStyles, Avatar, Container } from "@material-ui/core";
import React from "react";
import { CustomButton } from "../../controls/Button";
import { CustomInput, LabelText, Title } from "../../controls/Input";
import { Link } from "react-router-dom";

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
function Register() {
  const classes = useStyles();
  return (
    <Box style={{background:"#2f4454", paddingBottom: 40}}>
      <Container>
      <Grid container style={{display:"flex", alignItems:"center"}}>
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
            Thanks for Choosing Us
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
              fontWeight:"bold",
              fontFamily:"serif"
            }}
          >
            I already have an account{" "}
            <Link to="/login" style={{ marginLeft: 10 }}>Login</Link>{" "}
          </div>
          <div>
            <LabelText>First Name</LabelText>
            <CustomInput />
          </div>
          <div>
            <LabelText>Last Name</LabelText>
            <CustomInput />
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
              Sign Up
            </CustomButton>
          </div>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}

export default Register;
