import React from "react";
import {  makeStyles, Typography,  Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  box:{
    width: 180,
    padding: 20,
      },
  anchor: {
    textDecoration: "none",
    padding: "10px",
    color: "#DA7B93",
    textTransform: "capitalize",

    '&:hover': {
      color: "#DA7B93",
    fontFamily: "serif",
    textDecoration: "none",
    padding: "10px",
    background: "#376e6f"
   },
  },
}));


function Settings(props) {
  const classes = useStyles();
  const {onMouseEnter, onMouseLeave } = props
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classes.box}
    >
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          Profile
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          My Courses
        </Link>
      </Typography>
      <hr />
      <Typography component="div">
        <Link to="/Pricing" className={classes.anchor}>
          Pricing
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">
        <Link to="/Login" className={classes.anchor}>
          Log In
        </Link>
      </Typography>{" "}
     
    </Box>
  );
}

export default Settings;
