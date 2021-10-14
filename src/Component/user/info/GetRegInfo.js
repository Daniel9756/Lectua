import React from 'react';
import { Box, makeStyles } from "@material-ui/core";
import {  LabelText,  Protitle } from "../../../controls/Input";
const useStyles = makeStyles({
 
  list: {
    display: "flex",
    alignItems: "center",
  },
});

function GetRegInfo({ id, item }) {

  const classes = useStyles();
const regdate = new Date(parseInt(item?.createdAt)).toDateString()


  return (
    <div>
      <Box className={classes.list}>
        <Protitle>Registered By:</Protitle>
        <LabelText>{item?.firstName}{" "}{item?.lastName}</LabelText>
      </Box>
      <Box className={classes.list}>
        <Protitle>Email:</Protitle>
        <LabelText>{item?.email}</LabelText>
      </Box>{" "}
      <Box className={classes.list}>
        <Protitle>Status</Protitle>
        <LabelText>{item?.registerAs}</LabelText>
      </Box>{" "}
      <Box className={classes.list}>
        <Protitle>Member Since</Protitle>
        <LabelText>{regdate}</LabelText>
      </Box>
    </div>
  )
}

export default GetRegInfo
