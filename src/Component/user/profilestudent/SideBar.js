import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { ImProfile, ImBook } from "react-icons/im";
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
        "&:hover": {
            background: "#dcdde1",
            color: "#376e6f",
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

            marginRight: 10,
        },

    },
    "@media (max-width: 440px)": {
        root: {
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            margin: 0,
        },
    },
});
function SideBar(props) {
    const location = useLocation();
    const classes = useStyles();

    const { setContent } = props;
    const active = {
        color: "#DA7B93",
        borderBottom: "3px solid #DA7B93",
        width: "70%"
    };
    return (

        <Box
            className={classes.root}
        >
            <Link
                to="/Student/MyDashboard"
                className={classes.links}
                onClick={() => setContent("MyDashboard")}
                style={location.pathname === "/Student/MyDashboard" ? active : {}}

            >
                <GoDashboard className={classes.icon} />Dashboard
            </Link>
            <Link
                to="/Student/MyProfile"
                className={classes.links}
                onClick={() => setContent("MyProfile")}
                style={location.pathname === "/Student/MyProfile" ? active : {}}

            >
                <ImProfile className={classes.icon} />My Profile
            </Link>
            <Link
                to="/Student/EnrolledCourses"
                className={classes.links}
                onClick={() => setContent("EnrolledCourses")}
                style={location.pathname === "/Student/EnrolledCourses" ? active : {}}
            >
                <ImBook className={classes.icon} />My Calender
            </Link>

        </Box>

    );
}

export default SideBar;
