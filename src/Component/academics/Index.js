import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import LectureChart from "../home/LectureChart";
import CourseLinks from "./CourseLinks";
import Footer from "../footer/Footer";

const useStyles = makeStyles((theme) => ({
  service: {
    backgroundImage: `url(/images/v5.jpg)`,
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    width: "100%",
    height: "550px",
    paddingTop: theme.spacing(2),
    color: "#fff",
  },
  grid: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
    borderRight: "1px solid",
  },
  gridIcon: {
    fontSize: 40,
    color: "#DA7B93",
    marginRight: 20,
  },
  gridSub: {
    fontSize: 25,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#376e6f",
  },
  divTit: {
    display: "flex",
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
}));
function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <CourseLinks />
      <Footer />
    </>
  );
}

export default Dashboard;
