import React, { useState, useContext } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { GlobalContext } from "../../Context/Provider";
import { makeStyles, Box } from "@material-ui/core";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import Settings from "./Settings";

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
    marginTop: 270,
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
    width: 200,
    height: "auto",
    padding: 8,
    marginLeft: 8,
    borderRadius: 4,
    "&:hover": {
      background: "#fff",
      color: "#DA7B93",
      fontFamily: "serif",
      textDecoration: "none",
    },
  },

  reg1: {
    background: "#DA7B93",
    color: "#376e6f",
    fontFamily: "serif",
    textDecoration: "none",
    width: 70,
    height: "auto",
    padding: 8,
    marginLeft: 8,
    borderRadius: 4,
    "&:hover": {
      background: "#fff",
      color: "#DA7B93",
      fontFamily: "serif",
      textDecoration: "none",
    },
  },
  "@media (min-width: 960px)": {
    reg: {
      display: "none"
    },

  },
  "@media (max-width: 960px)": {
    reg: {
      display: "none"
    },


  },
  "@media (max-width: 440px)": {
    reg: {
      display: "none"
    },

  },
}));
const NavgBar = (props) => {
  const classes = useStyles();

  const registerAs = localStorage.getItem("registerAs");
  const {
    loginState: {
      login: { isPemmitted, logger },
    },
  } = useContext(GlobalContext);
  const history = useHistory()

  const location = useLocation();
  const active = {
    color: "#376e6f",
    borderBottom: "3px solid #DA7B93",
  };

  const [isSeen, setIsSeen] = useState(false);

  const togleInAvaterDisplay = () => {
    setIsSeen(true);
  };
  const togleOutAvaterDisplay = () => {
    setIsSeen(false);
  };
  const logout = () => {
    localStorage.clear();
    history.push('/')
  }

  return (
    <Box>
      <Navbar
        light
        style={{
          backgroundColor: "#2f4454",
          color: "#1C3334",
          paddingBottom: 5,
          paddingTop: 2,
          height: 151,
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
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
          {logger?.registerAs === "Teacher" ? <Link
            to="/MyProfile/MyLectures"
            style={location.pathname === "/MyProfile/MyLectures" ? active : {}}
            className={classes.links}
          >
            {" "}
            Create Lession
          </Link> : ''}

          <Link
            to="/Messanger"
            style={location.pathname === "/Messanger" ? active : {}}
            className={classes.links}
          >
            {" "}
            Messages
          </Link>
          <Link
            to="/CreateSession2"
            style={location.pathname === "/CreateSession2" ? active : {}}
            className={classes.links}
          >
            {" "}
            CreateSession2
          </Link>
          
        <Box>
          <Link
            to="/Register"
            style={location.pathname === "/register" ? active : {}}
            className={classes.reg1}
          >
            Register
          </Link>
        </Box>
        </Box>




        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: 10,
          }}
        >

          <Link
            to="/courses"
            style={location.pathname === "/courses" ? active : {}}
            className={classes.links}
          >
            {" "}
            Find courses
          </Link>




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
              to={registerAs === "Teacher" ? "/MyProfile/MyLectures" : "/Student/MyProfile"}
              className={classes.links}
              onMouseEnter={togleInAvaterDisplay}
              onMouseLeave={togleOutAvaterDisplay}
            >
              {" "}
              Setting
            </Link>


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

          {isPemmitted ? <Link className={classes.anchor} onClick={logout} >
            Log Off
          </Link> : <Link
            to="/login"
            className={classes.links}
          >

            Log In
          </Link>}

        </Box>
      </Navbar>
    </Box>
  );
};

export default NavgBar;
