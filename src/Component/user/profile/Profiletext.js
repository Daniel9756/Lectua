import React from "react";
import { Info, LabelText, Title, Subtitle } from "../../../controls/Input";
import { GroupButton } from "../../../controls/Button";

import { Box, makeStyles, Typography } from "@material-ui/core";

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

function Profiletext() {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="subtitle1" className={classes.title1}>
        We’ve designed a culture that allows our stewards to assimilate with our
        clients and bring the best of who we are to your business. Our culture
        drives our – and more importantly your success. Our results solution
        combines capability building. and state-of-the-art diagnostic and
        analytic tools so you can continually change.{" "}
      </Typography>{" "}
      <Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Subtitle>Registered By:</Subtitle>
          <Info>Eze Cornelius</Info>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Subtitle>Email:</Subtitle>
          <Info>corneliuseze30@gmail.com</Info>
        </Box>{" "}
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Subtitle>Name:</Subtitle>
          <Info>Bluemoon Academy </Info>
        </Box>{" "}
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Subtitle>phone:</Subtitle>
          <Info>07031019512</Info>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Subtitle>Location:</Subtitle>
          <Info>Enugu, Nigeria </Info>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Subtitle>Plan:</Subtitle>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Info>Basic </Info>
            <GroupButton style={{ color: "#376e6f", borderRadius: 8 }}>
              <em>Upgrade </em>
            </GroupButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profiletext;
