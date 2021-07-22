import React from "react";
import { Box,  Grid, makeStyles, Avatar } from "@material-ui/core";
import { Info, Title, Subtitle } from "../../../controls/Input";
import Profiletext from "./Profiletext";
import { MdEdit } from "react-icons/md";

import { GroupButton } from "../../../controls/Button";

const useStyles = makeStyles({
  service: {
    width: "80%",
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

function UserProfile() {
  const classes = useStyles();

  return (
    <Box style={{ marginBottom: 50 }}>
      <Grid
        container
        style={{ padding: 8, borderRadius: 8, background: "#dcdde1" }}
      >
        <Grid md="6" sm="12">
          <Box style={{ margin: 10 }}>
            <Avatar
              variant="rounded"
              src="/images/ws3.jpg"
              alt="company logo"
              className={classes.service}
            ></Avatar>
          </Box>
        </Grid>

        <Grid md="6" sm="12">
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 20,
            }}
          >
            <Title>Biography</Title>
            <GroupButton
            style={{
              background: "#dcdde1",
            }}
          >
            <MdEdit
              style={{
                fontSize: 35,
                background: "#DA7B93",
                borderRadius: 4
              }}
            />
          </GroupButton>
          </Box>
          <hr />
          <Profiletext />
        </Grid>
      </Grid>
      <Box
        style={{
          alignItems: "center",
          padding: 10,
          borderRadius: 8,
          background: "#dcdde1",
          marginTop: 16,
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <Title>Qualifications</Title>
          <GroupButton
            style={{
              background: "#dcdde1",
            }}
          >
            <MdEdit
              style={{
                fontSize: 35,
                background: "#DA7B93",
                borderRadius: 4
              }}
            />
          </GroupButton>
        </Box>
        <hr />
        <Grid container style={{ marginTop: 40 }}>
          <Grid md="6" sm="12">
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Subtitle>Specialty:</Subtitle>
              <Info>Science</Info>
            </Box>
            <Box style={{ display: "inline-block", alignItems: "center" }}>
              <Subtitle>Certificates:</Subtitle>
              <Info>SSCE </Info>
              <Info>Degree </Info>
              <Info>Skill </Info>
              <Info>B. Engr</Info>
            </Box>{" "}
          </Grid>

          <Grid md="6" sm="12">
            <Box style={{ display: "inline", alignItems: "center" }}>
              <Subtitle>Subjects:</Subtitle>
              <Info>English</Info>
              <Info>Maths</Info> <Info>Chemistry</Info> <Info>Physics</Info>{" "}
              <Info>Geography</Info> <Info>HTML</Info> <Info>CSS</Info>
              <Info>Python</Info> <Info>JavaScript</Info>{" "}
              <Info>PostgreSQL</Info>
            </Box>{" "}
          </Grid>
        </Grid>
      </Box>{" "}
    </Box>
  );
}

export default UserProfile;
