import React, { useContext } from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import { Link, } from "react-router-dom";
import { GlobalContext } from "../../Context/Provider";

const useStyles = makeStyles(() => ({
  box: {
    width: 180,
    padding: 20,
    background: "#dcdde1",
    borderRadius: 8,

  },
  anchor: {
    textDecoration: "none",
    padding: "10px",
    color: "#DA7B93",
    textTransform: "capitalize",
    borderRadius: 8,

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
  const { onMouseEnter, onMouseLeave } = props
  const registerAs = localStorage.getItem("registerAs");
  const {
    loginState: {
      login: { isPemmitted, logger },
    },
  } = useContext(GlobalContext);
  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classes.box}
    >
      <Typography component="div">
        <Link to={registerAs === "Teacher" ? "/MyProfile/MyLectures" : "/Student/MyProfile"} className={classes.anchor}>
          Profile
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">
         <Link         
          to={registerAs === "Teacher" ? "/CreateProfile" : "/studentProfile"}
          className={classes.anchor}
        >
          {" "}
          Create Profile
        </Link> 

      </Typography>
      <hr />
      <Typography component="div">
        <Link to="/Membership" className={classes.anchor}>
          Membership
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">
        <Link to="/PaymentType" className={classes.anchor}>
          Payments
        </Link>
      </Typography>{" "}
      <hr />
      <Typography component="div">

        <Link
          to="/Contact"
          className={classes.anchor}>
          Contact
        </Link>
      </Typography>{" "}

    </Box>
  );
}

export default Settings;
