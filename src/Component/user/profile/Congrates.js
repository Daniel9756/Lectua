import React, { useState } from "react";

import { Box, Container, Paper, makeStyles } from "@material-ui/core";
import { GroupButton } from "../../../controls/Button";
import { MdConfirmationNumber } from "react-icons/md";
import {  Title } from "../../../controls/Input";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },
  paper: {
    width: "450px",
    marginRight: 4,
    marginTop: 12,
    marginBottom: 12,
    padding: 21,
    borderRadius: 8,
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#dcdde1",
  },
});
function Congrates(props) {
  const classes = useStyles();

  const {  handleBack } = props;
  // const [confirmDialog, setConfirmDialog] = useState({
  //   isOpen: false,
  //   title: "",
  //   subtitle: "",
  // });

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Title>
          <em>Congratulations </em>
        </Title>
        <MdConfirmationNumber
          fontSize={150}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 200,
            color: "#376e6f",
          }}
        />
        <Title style={{ textAlign: "center" }}>
          You've successfully submitted your profile with us
        </Title>
        <Title style={{ textAlign: "center", color: "#DA7B93", marginTop: 30 }}>
          <em>Lectua</em>
        </Title>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <GroupButton
            onClick={handleBack}
            style={{
              width: 100,
              background: "#376e6f",
              height: 50,
              color: "#DA7B93",
              margin: 10,
              borderRadius: 10,
            }}
          >
            FINISH
          </GroupButton>
        </Box>
      </Paper>
    </Container>
  );
}

export default Congrates;
