import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Typography, Container, Box, makeStyles } from "@material-ui/core";
import Arts from "../courses/Arts/Index";
import All from "../courses/all/All";
import Business from "../courses/Business/Business";
import Design from "../courses/Design/Design";
import Development from "../courses/Development/Development";
import Holidays from "../courses/Holidays/Holidays";
import Jamb from "../courses/Jamb/Jamb";
import Science from "../courses/Science/Science";
import Software from "../courses/Software/Software";
import SSCE from "../courses/SSCE/SSCE";
import WAEC from "../courses/WAEC/WAEC";
import Marketing from "../courses/Marketing/Marketing";
import Subjects from "../courses/Subjects/Subjects";
import University from "../courses/University/University";
import Postume from "../courses/postume/Postume";
import Collage from "../courses/collage/Collage";
import Search from "./Search";


const useStyles = makeStyles({
  lists: {
    marginTop: 40,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  anchor: {
    textDecoration: "none",
    padding: "10px",
    color: "#2f4454",
    fontFamily: "serif",
    "&:hover": {
      color: "#DA7B93",

      textDecoration: "none",
    },
  },
  "@media (max-width: 960px)": {
    lists: {
      marginTop: 40,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  "@media (max-width: 440px)": {

  },
});

function CourseLinks() {
  function getContent(page) {
    switch (page) {
      case "All":
        return <All />;
      case "Software":
        return <Software content={content} />;
      case "Arts":
        return <Arts content={content} />;
      case "Business":
        return <Business content={content} />;
      case "Design":
        return <Design content={content} />;
      case "Development":
        return <Development content={content} />;
      case "Holidays":
        return <Holidays content={content} />;
      case "Jamb":
        return <Jamb content={content} />;
      case "Science":
        return <Science content={content} />;
      case "SSCE":
        return <SSCE content={content} />;
      case "WAEC":
        return <WAEC content={content} />;
      case "Primary":
        return <Subjects content={content} />;
      case "Marketing":
        return <Marketing content={content} />;
      case "Postume":
        return <Postume content={content} />;
      case "Collage":
        return <Collage content={content} />;
      case "University":
        return <University content={content} />;
      default:
        return "UNKNOWN STEP";
    }
  }


  const location = useLocation();
  const classes = useStyles();

  const [content, setContent] = useState("All");
  const active = {
    color: "#fff",
    margin: 4,
    borderRadius: 4,
    background: "#2f4454",
  };



  return (
    <Container>
      <Grid container>
        <Grid item md="2"></Grid>
        <Grid item md="8" style={{ marginTop: 36 }}>
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              fontFamily: "serif",
              textAlign: "center",
              color: "#2f4454",
            }}
          >
            Our highest registered courses
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            style={{
              textAlign: "center",
              color: "#376e6f",
              letterSpacing: 2,
              margin: 10,
            }}
          >
            We have thousands of courses with topics carefully choosen by
            specialist in the field. These will help you pass your exams in
            flying colors.
          </Typography>
        </Grid>
        <Grid item md="2"></Grid>
      </Grid>
      <Grid container>
        <Grid item md="12" sm="4">
          <Box
            className={classes.lists}
            style={{

            }}
          >
            <Box className={classes.list}>

              <Link
                to="/courses"
                style={location.pathname === "/courses" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("All")}
              >
                All
              </Link>

              <Link
                to="/courses/software"
                style={location.pathname === "/courses/software" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Software")}
              >

                Software

              </Link>

              <Link
                to="/courses/Jamb"
                style={location.pathname === "/courses/Jamb" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Jamb")}
              >

                Jamb

              </Link>
              <Link
                to="/courses/SSCE"
                style={location.pathname === "/courses/SSCE" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("SSCE")}
              >

                SSCE

              </Link>
              <Link
                to="/courses/science"
                style={location.pathname === "/courses/science" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Science")}
              >

                Science

              </Link>

            </Box>

            <Box className={classes.list}>

              <Link
                to="/courses/WAEC"
                style={location.pathname === "/courses/WAEC" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("WAEC")}
              >

                WAEC

              </Link> <Link
                to="/courses/holidays"
                style={location.pathname === "/courses/holidays" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Holidays")}
              >

                Holidays

              </Link>
              <Link
                to="/courses/development"
                style={location.pathname === "/courses/development" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Development")}
              >
                Development
              </Link>
              <Link
                to="/courses/design"
                style={location.pathname === "/courses/design" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Design")}
              >
                Design
              </Link>

            </Box>

            <Box className={classes.list}>

              <Link
                to="/courses/primary"
                style={location.pathname === "/courses/primary" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Primary")}
              >
                Primary
              </Link>
              <Link
                to="/courses/postume"
                style={location.pathname === "/courses/postume" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Postume")}
              >
                POSTUME
              </Link>
              <Link
                to="/courses/business"
                style={location.pathname === "/courses/business" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Business")}
              >
                Business
              </Link>
              <Link
                to="/courses/collage"
                style={location.pathname === "/courses/collage" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Collage")}
              >
                Collage
              </Link>

            </Box>
            <Box className={classes.list}>
              <Link
                to="/courses/arts"
                style={location.pathname === "/courses/arts" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Arts")}
              >
                Arts
              </Link>
              <Link
                to="/courses/marketing"
                style={location.pathname === "/courses/marketing" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("Marketing")}
              >
                Marketing
              </Link>
              <Link
                to="/courses/university"
                style={location.pathname === "/courses/university" ? active : {}}
                className={classes.anchor}
                onClick={() => setContent("University")}
              >
                University
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}>
        <Search />
      </Box>
      <div>{getContent(content)}</div>
    </Container >
  );
}

export default CourseLinks;
