import React, { useState } from "react";
import { LabelText } from "../../controls/Input";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

import { Avatar, makeStyles, Typography, Grid, Box } from "@material-ui/core";
import NestedList from "./Settings";
import {
  MdRateReview,
  MdSend,
  MdExpandLess,
  MdExpandMore,
  MdBookmarkBorder,
  MdEmail,
} from "react-icons/md";
import { GroupButton } from "../../controls/Button";
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
  },
  btn: {
    borderRadius: 8,
    background: "#2f4454",
    justifyContent: "center",
    hight: "auto",
    marginTop: 435,
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
    marginTop: 255,
   zIndex: 100,
    position: "fixed",
  },
}));
const NavgBar = (props) => {
  const classes = useStyles();

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

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={classes.root}>
      <Navbar
        light
        style={{ backgroundColor: "#2f4454", color: "#1C3334", padding: 10, height: 100 }}
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
            LECTUA
          </NavbarBrand>
          <NavLink
            href="/CreateLesson"
            style={{ color: "#DA7B93", fontFamily: "serif" }}
          >
            Create Lession
          </NavLink>
          <NavLink
            href="/register"
            style={{ color: "#DA7B93", fontFamily: "serif" }}
          >
            Register
          </NavLink>

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
            <NavLink
              href="/dashboard"
              style={{ color: "#DA7B93", fontFamily: "serif", margin: 0 }}
            >
              Academics
            </NavLink>
            {isShown ? (
              <MdExpandLess style={{ color: "#DA7B93", margin: 0 }} />
            ) : (
              <MdExpandMore style={{ color: "#DA7B93", margin: 0 }} />
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
          <NavLink
            href="/CreateLesson"
            style={{ color: "#DA7B93", fontFamily: "serif" }}
          >
            Find Courses
          </NavLink>
         
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={togleInAvaterDisplay}
            onMouseLeave={togleOutAvaterDisplay}
          >
            <NavLink
              href="/dashboard"
              style={{ color: "#DA7B93", fontFamily: "serif", margin: 0 }}
            >
              Settings
            </NavLink>
            {isSeen ? (
              <MdExpandLess style={{ color: "#DA7B93", margin: 0 }} />
            ) : (
              <MdExpandMore style={{ color: "#DA7B93", margin: 0 }} />
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
        </div>
      </Navbar>
    </div>
  );
};

export default NavgBar;
