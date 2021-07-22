import React, { useState, useContext } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../Context/Provider";
import { Info } from "../../controls/Input";
import { makeStyles, Box, Avatar, Badge } from "@material-ui/core";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import Settings from "./Settings";
import Academics from "./Academics";

const useStyles = makeStyles((theme) => ({
 
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
    marginTop: 320,
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
  const {
    authState: {
      auth: { isAuthenticated, user },
     
    },
  } = useContext(GlobalContext);

  const location = useLocation();
  const active = {
    color: "#376e6f",
    borderBottom: "3px solid #DA7B93",
  };
  const badge = {
    color: "#44bd32",
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
          padding: 5,
          height: 151,
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
            to="/MyProfile/MyLectures"
            style={location.pathname === "/CreateLesson" ? active : {}}
            className={classes.links}
          >
            {" "}
            Create Lession
          </Link>
          <Link
            to="/CreateProfile"
            style={location.pathname === "/Find Courses" ? active : {}}
            className={classes.links}
          >
            {" "}
            Create Profile
          </Link>

          <Link
            to="/studentProfile"
            style={
              location.pathname === "/MyProfile/General" ||
              location.pathname === "/MyProfile/MyLectures" ||
              location.pathname === "/MyProfile/MyCalender"
                ? active
                : {}
            }
            className={classes.links}
          >
            {" "}
            studentProfile
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
              <MdExpandLess
                style={{ color: "#DA7B93", margin: 0, fontSize: 30 }}
              />
            ) : (
              <MdExpandMore
                style={{ color: "#DA7B93", margin: 0, fontSize: 30 }}
              />
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
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
              }}
              onMouseEnter={togleInAvaterDisplay}
              onMouseLeave={togleOutAvaterDisplay}
            >
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
                style={isAuthenticated ? badge : {}}
              >
                <Avatar
                  to="/Settings"
                  style={location.pathname === "/Settings" ? active : {}}
                  className={classes.links}
                >
                  {" "}
                  N
                </Avatar>
              </Badge>
              {isAuthenticated && (
                <Info
                  style={{
                    fontSize: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#DA7B93",
                    textTransform: "uppercase",
                  }}
                >
                  {user?.firstName}
                </Info>
              )}
            </Box>
            {isSeen ? (
              <MdExpandLess
                style={{ color: "#DA7B93", margin: 0, fontSize: 30 }}
              />
            ) : (
              <MdExpandMore
                style={{ color: "#DA7B93", margin: 0, fontSize: 30 }}
              />
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
