import React from "react";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
// import {useSpring, animated} from 'react-spring'
import { FaRegEdit, FaRegIdBadge } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { CustomButton, GroupButton } from "../../controls/Button";

const useStyles = makeStyles((theme) => ({
  step: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 80,
  },

  steptitle: {
    fontWeight: "bold",
    textAlign: "center",
    padding: theme.spacing(1),
    color: "#DA7B93",
  },
  stepsubtitle: {
    opacity: "0.8",
    fontFamily: "serif",
    textAlign: "center",
    padding: 4,
    color: "#2f4454",
    letterSpacing: 1,
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  avater: {
    height: 180,
    width: 180,
    background: "#dcdde1",
  },
  avaIcon: {
    height: 120,
    width: 120,
    color: "#DA7B93",
  },
}));

function How() {
  const classes = useStyles();

  return (
    <Box className={classes.step}>
      <Grid container>
        <Grid item md="3"></Grid>
        <Grid item md="6" style={{ paddingLeft: "2px" }}>
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              fontFamily: "serif",
              textAlign: "center",
              color: "#DA7B93",
            }}
          >
            How it Works?
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            style={{
              textAlign: "center",
              color: "#2f4454",
              letterSpacing: 2,
              margin: 20,
            }}
          >
            We know this in our gut, but what can we do about it? How can we
            motivate ourselves? One of the most difficult aspects of achieving
            success is staying motivated over the long haul.
          </Typography>
        </Grid>
        <Grid item md="3"></Grid>
      </Grid>

      <Grid container>
        <Grid item md="3" className={classes.grid}>
          <Avatar className={classes.avater}>
            <FaRegIdBadge className={classes.avaIcon} />
          </Avatar>
          <Typography variant="h6" className={classes.steptitle}>
            Register
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.stepsubtitle}
          >
            One of the man areas that work on with my clients is shadding these
            non-supportive beliefs and replacing them with beliefs that will
            help their desires.
          </Typography>
        </Grid>
        <Grid item md="3" className={classes.grid}>
          <Avatar className={classes.avater}>
            <CgProfile className={classes.avaIcon} />
          </Avatar>
          <Typography variant="h6" className={classes.steptitle}>
            Update profile
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.stepsubtitle}
          >
            One of the man areas that work on with my clients is shadding these
            non-supportive beliefs and replacing them with beliefs that will
            help their desires.
          </Typography>
        </Grid>
        <Grid item md="3" className={classes.grid}>
          <Avatar className={classes.avater}>
            <FcReading className={classes.avaIcon} />
          </Avatar>
          <Typography variant="h6" className={classes.steptitle}>
            Create Lession
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.stepsubtitle}
          >
            One of the man areas that work on with my clients is shadding these
            non-supportive beliefs and replacing them with beliefs that will
            help their desires.
          </Typography>
        </Grid>{" "}
        <Grid item md="3" className={classes.grid}>
          <Avatar className={classes.avater}>
            <TiMessages className={classes.avaIcon} />
          </Avatar>
          <Typography variant="h6" className={classes.steptitle}>
            Invite Student
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.stepsubtitle}
          >
            One of the man areas that work on with my clients is shadding these
            non-supportive beliefs and replacing them with beliefs that will
            help their desires.
          </Typography>
        </Grid>{" "}
      </Grid>
     
        <Box
          item
          md="6"
          style={{
            paddingLeft: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
            color: "#DA7B93",
          }}
        >
          <Typography variant="h2">Join us </Typography>{" "}
          <GroupButton style={{width: 150, color: "#DA7B93", background: "#2f4454", height: 40, fontSize: 20, borderRadius: 8, marginLeft: 20}}>Now</GroupButton>
        </Box>
      
    </Box>
  );
}

export default How;
