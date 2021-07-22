import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { GroupButton } from "../../../controls/Button";
import { GoDiffAdded } from "react-icons/go";

const useStyles = makeStyles({
  links: {
    margin: 5, 
    
    fontSize: 18,
    color: "#376e6f",
    fontFamily: "serif",
    textDecoration: "none",
    padding: "10px",
    "&:hover": {
      background: "#dcdde1",
      color: "#376e6f",
      borderRadius: 8,
    },
  },
});
function Sidebar(props) {
  const location = useLocation();
  const classes = useStyles();

  const { setContent } = props;
  const active = {
    color: "#DA7B93",
    borderBottom: "3px solid #DA7B93",
  };
  return (
    <Box
      style={{
        marginRight: 20,
        padding: 10,
        marginTop: 40,
      }}
    >
      <Box
        style={{
          height: 200,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link
          to="/MyProfile/General"
          className={classes.links}
          onClick={() => setContent("General")}
          style={location.pathname === "/MyProfile/General" ? active : {}}
         
        >
          General Profile
        </Link>
        <Link
          to="/MyProfile/MyLectures"
          className={classes.links}
          onClick={() => setContent("MyTable")}
          style={location.pathname === "/MyProfile/MyLectures" ? active : {}}
        >
          My Lecture Table
        </Link>
        <Link
          to="/MyProfile/MyCalender"
          className={classes.links}
          onClick={() => setContent("Calendary")}
          style={location.pathname === "/MyProfile/MyCalender" ? active : {}}
         
        >
          Calendary
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar;
