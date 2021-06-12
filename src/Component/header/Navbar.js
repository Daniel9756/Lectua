import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
 
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";

import {  makeStyles,  Box } from "@material-ui/core";
import {
 
  MdExpandLess,
  MdExpandMore,
 
} from "react-icons/md";
import Settings from "./Settings";
import Academics from "./Academics";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "",
  },
  anchor: {
    textDecoration: "none",
    padding: "10px",
    color: "#DA7B93",
    fontFamily: "serif",
    "&:hover": {
      color: "#DA7B93",

      textDecoration: "none",
    },
  },
  btn: {
    borderRadius: 8,
    justifyContent: "center",
    hight: "auto",
    marginTop: 200,
    padding: 1,
    position: "fixed",
    zIndex: 100,
  },
  btnSet: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 8,
    background: "#2f4454",
    justifyContent: "center",
    hight: "auto",
    marginTop: 280,
    zIndex: 100,
    position: "fixed",
  },
  links: {
    color: "#DA7B93",
    fontFamily: "serif",
    textDecoration: "none",
    padding: "10px",
    "&:hover": {
      color: "#DA7B93",
      fontFamily: "serif",
      textDecoration: "none",
      padding: "10px",
    },
  },
  reg: {
    background: "#DA7B93",
    color: "#376e6f",
    fontFamily: "serif",
    textDecoration: "none",
    width: "auto",
    height: "auto",
    padding: 4,
    marginLeft: 8,
    "&:hover": {
      background: "#fff",
      color: "#DA7B93",
      fontFamily: "serif",
      textDecoration: "none",
      
    },
  },
}));
const NavgBar = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const active = {
    color: "#376e6f",
    borderBottom: "3px solid #DA7B93",
  };

  const [isShown, setIsShown] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  const togleInDisplay = () => {
    setIsShown(true);
  };
  const togleOutDisplay = () => {
    setIsShown(false);
  };
  const togleInAvaterDisplay = () => {
    setIsSeen(true);
  };
  const togleOutAvaterDisplay = () => {
    setIsSeen(false);
  };


  return (
    <div className={classes.root}>
      <Navbar
        light
        style={{
          backgroundColor: "#2f4454",
          color: "#1C3334",
          padding: 10,
          height: 120,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <NavbarBrand
            href="/"
            className="mr-auto"
            style={{
              color: "#DA7B93",
              fontFamily: "fantasy",
              letterSpacing: 5,
              marginLeft: 16,
            }}
          >
            <Link
              to="/"
              style={location.pathname === "/" ? active : {}}
              className={classes.anchor}
            >
              {" "}
              LECTUA
            </Link>
          </NavbarBrand>

          <Link
            to="/CreateLesson"
            style={location.pathname === "/CreateLesson" ? active : {}}
            className={classes.links}
          >
            {" "}
            Create Lession
          </Link>
          <Link
            to="/CreateLesson"
            style={location.pathname === "/Find Courses" ? active : {}}
            className={classes.links}
          >
            {" "}
            Find Courses
          </Link>

          <Link
            to="/Profile"
            style={location.pathname === "/Profile" ? active : {}}
            className={classes.links}
          >
            {" "}
           Profile
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={togleInDisplay}
            onMouseLeave={togleOutDisplay}
          >
            <Link
              to="/dashboard"
              style={location.pathname === "/dashboard" ? active : {}}
              className={classes.links}
            >
              {" "}
              Academics
            </Link>

            {isShown ? (
              <MdExpandLess style={{ color: "#DA7B93", margin: 0, fontSize: 30 }} />
            ) : (
              <MdExpandMore style={{ color: "#DA7B93", margin: 0, fontSize: 30  }} />
            )}

            <Box className={classes.btn}>
              {isShown && (
                <Academics
                  onMouseEnter={togleInDisplay}
                  onMouseLeave={togleOutDisplay}
                />
              )}
            </Box>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={togleInAvaterDisplay}
            onMouseLeave={togleOutAvaterDisplay}
          >
            <Link
              to="/Settings"
              style={location.pathname === "/Settings" ? active : {}}
              className={classes.links}
            >
              {" "}
              Settings
            </Link>

            {isSeen ? (
              <MdExpandLess style={{ color: "#DA7B93", margin: 0,fontSize: 30  }} />
            ) : (
              <MdExpandMore style={{ color: "#DA7B93", margin: 0,fontSize: 30  }} />
            )}

            <Box className={classes.btnSet}>
              {isSeen && (
                <Settings
                  onMouseEnter={togleInAvaterDisplay}
                  onMouseLeave={togleOutAvaterDisplay}
                />
              )}
            </Box>
          </Box>
          <Link
            to="/Register"
            style={location.pathname === "/register" ? active : {}}
            className={classes.reg}
          >
            Register
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default NavgBar;
