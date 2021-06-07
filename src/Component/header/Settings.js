import React from "react";
import {  makeStyles, Typography,  Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  anchor: {
    textDecoration: "none",
    padding: "10px",
    color: "#DA7B93",
  },
}));
function Settings(props) {
  const classes = useStyles();
  const {onMouseEnter, onMouseLeave } = props
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
        <Link to="/Property" className={classes.anchor}>
          Pricing
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">
        <Link to="/Property" className={classes.anchor}>
          Logout
        </Link>
      </Typography>{" "}
      <hr />
    </Box>
  );
}

export default Settings;
