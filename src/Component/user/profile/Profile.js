import React, { useState } from "react";
import { Box, Container, Grid, makeStyles, } from "@material-ui/core";
import UserProfile from "./UserProfile";
import Appointments from "./Appointments";
import Sidebar from "./Sidebar";
import CreateLesson from "../../Lession/createlession/CreateLesson"
import Footer from "../../footer/Footer"


const useStyles = makeStyles({
  service: {
    width: "100%",
    height: "400px",
    borderRadius: 12,
    color: "#fff",
  },
  title1: {
    padding: 10,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#DA7B93",
  },


  "@media (max-width: 960px)": {
    sidebar: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

    },
    grid: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

    },
  },
  "@media (max-width: 440px)": {

  },
});

function Profile() {
  const classes = useStyles();
  function getContent(page) {
    switch (page) {
      case "MyTable":
        return <CreateLesson />;
      case "General":
        return <UserProfile />;
      case "Calendary":
        return <Appointments />;
      default:
        return "UNKNOWN STEP";
    }
  }
  const [content, setContent] = useState("MyTable");

  return (
    <Box style={{ marginBottom: 11, marginTop: 8 }}>
      <Container>
        <Grid container  className={classes.grid}>
          <Grid md="2" className={classes.sidebar}>
            <Sidebar setContent={setContent} />
          </Grid>

          <Grid md="10">

            <Box>{getContent(content)}</Box>
          </Grid>
        </Grid>
      </Container>
      <Box style={{ marginTop: 60 }}>

        <Footer />
      </Box>
    </Box>
  );
}

export default Profile;
