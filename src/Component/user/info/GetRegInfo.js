import React from 'react'
import { Box, makeStyles } from "@material-ui/core";
import { Info, LabelText, Title, Subtitle } from "../../../controls/Input";

const useStyles = makeStyles({
  service: {
    width: "100%",
    height: "400px",
    borderRadius: 12,
    color: "#fff",
  },
  title1: {
    padding: 10,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#DA7B93",
  },
  list: {
    display: "flex",
    alignItems: "center",
  },
});

function GetRegInfo({ id, item }) {

  const classes = useStyles();


  return (
    <div>
      <Box className={classes.list}>
        <Subtitle>Registered By:</Subtitle>
        <LabelText>{item.firstName}{" "}{item.lastName}</LabelText>
      </Box>
      <Box className={classes.list}>
        <Subtitle>Email:</Subtitle>
        <LabelText>corneliuseze30@gmail.com</LabelText>
      </Box>{" "}
      <Box className={classes.list}>
        <Subtitle>Name:</Subtitle>
        <LabelText>Bluemoon Academy </LabelText>
      </Box>{" "}
      <Box className={classes.list}>
        <Subtitle>phone:</Subtitle>
        <LabelText>07031019512</LabelText>
      </Box>
    </div>
  )
}

export default GetRegInfo
