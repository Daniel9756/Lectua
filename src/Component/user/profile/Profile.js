import React,{ useState } from "react";
import { Box, Container, Grid, makeStyles, Avatar } from "@material-ui/core";
import { Info, Title, Subtitle } from "../../../controls/Input";
import UserProfile from "./UserProfile";
import MyTable from "./MyTable";
import Appointments from "./Appointments";
import Sidebar from "./Sidebar";



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
});

function Profile() {
  const classes = useStyles();
  function getContent(page) {
    switch (page) {
      case "General":
        return <UserProfile />;
      case "MyTable":
        return <MyTable />;
        case "Calendary":
            return <Appointments />;
      default:
        return "UNKNOWN STEP";
    }
  }
  const [content, setContent] = useState("General");

  return (
    <Box  style={{ marginBottom: 50 }}>
      <Container>
        <Grid container>
          <Grid md="2" >
         <Sidebar setContent={setContent} />
          </Grid>

          <Grid md="10">
            
          <Box>{getContent(content)}</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Profile;
