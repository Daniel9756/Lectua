import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { ImProfile, ImDatabase, ImCalendar } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { GoDashboard } from "react-icons/go";

const useStyles = makeStyles({

  root: {
    height: 200,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: 15,
    marginRight: 10,
  },
  links: {
    margin: 2,
    fontSize: 18,
    color: "#376e6f",
    fontFamily: "serif",
    textDecoration: "none",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:hover": {
     
      color: "#DA7B93",
      borderRadius: 8,
    },
  },
  icon: {
    fontSize: 20,
    alignSelf: "center",
    marginRight: 10,
  },
  "@media (max-width: 960px)": {
    root: {
      height: 200,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15,
      marginRight: 10,
    },

  },
  "@media (max-width: 440px)": {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",

    }
  },
});
function Sidebar(props) {
  const location = useLocation();
  const classes = useStyles();

  const { setContent } = props;

  const active = {
    color: "#DA7B93",
    borderBottom: "3px solid #DA7B93",
    width: "70%",
  };
  
  return (
    <Box
      className={classes.root}
    >
      <Link
        to="MyDashboard"
        className={classes.links}
        onClick={() => setContent("MyDashboard")}
        style={location.pathname === "/MyProfile/MyDashboard" ? active : {}}

      >
        <GoDashboard className={classes.icon} />Dashboard
      </Link>
      <Link
        to="General"
        className={classes.links}
        onClick={() => setContent("General")}
        style={location.pathname === "/MyProfile/General" ? active : {}}

      >
        <ImProfile className={classes.icon} />My Profile
      </Link>
      <Link
        to="MyLectures"
        className={classes.links}
        onClick={() => setContent("MyTable")}
        style={location.pathname === "/MyProfile/MyLectures" ? active : {}}
      >
        <ImDatabase className={classes.icon} />Lecture Hall
      </Link>
      <Link
        to="MyCalender"
        className={classes.links}
        onClick={() => setContent("Calendary")}
        style={location.pathname === "/MyProfile/MyCalender" ? active : {}}

      >
        <ImCalendar className={classes.icon} />My Calendar
      </Link>
    </Box>

  );
}

export default Sidebar;
