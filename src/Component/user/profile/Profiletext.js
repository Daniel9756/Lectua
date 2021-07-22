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
  list: {
    display: "flex",
    alignItems: "center",
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
        <Box className={classes.list}>
          <Subtitle>Registered By:</Subtitle>
          <LabelText>Eze Cornelius</LabelText>
        </Box>
        <Box className={classes.list}>
          <Subtitle>Email:</Subtitle>
          <LabelText>corneliuseze30@gmail.com</LabelText>
        </Box>{" "}
        <Box className={classes.list}>
          <Subtitle>Name:</Subtitle>
          <LabelText>Bluemoon Academy </LabelText>
        </Box>{" "}
        <Box className={classes.list}>
          <Subtitle>phone:</Subtitle>
          <LabelText>07031019512</LabelText>
        </Box>
        <Box className={classes.list}>
          <Subtitle>Location:</Subtitle>
          <LabelText>Enugu, Nigeria </LabelText>
        </Box>
        <Box className={classes.list}>
          <Subtitle>Plan:</Subtitle>
          <Box className={classes.list}>
            <Info>Basic </Info>
            <GroupButton style={{ color: "#376e6f", borderRadius: 8 }}>
              <em>Upgrade </em>
            </GroupButton>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Subtitle>bANK DETAILS</Subtitle>
          <Box className={classes.list}>
            <Info>BANK:</Info>{" "}
            <LabelText
              style={{
                color: "#DA7B93",
              }}
            >
              Acess Bank
            </LabelText>
          </Box>
          <Box className={classes.list}>
            <Info>Name:</Info>{" "}
            <LabelText
              style={{
                color: "#DA7B93",
              }}
            >
              Eze Cornelius O
            </LabelText>
          </Box>
          <Box className={classes.list}>
            <Info>Number:</Info>{" "}
            <LabelText
              style={{
                color: "#DA7B93",
              }}
            >
              0020375275{" "}
            </LabelText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profiletext;
