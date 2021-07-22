import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
// import {useSpring, animated} from 'react-spring'
import { FaRegEdit,  } from "react-icons/fa";
import {  MdSchool } from "react-icons/md";
import {  GiCircularSaw } from "react-icons/gi";



const useStyles = makeStyles((theme) => ({
  step: {
    backgroundColor: "#2f4454",
    padding: 20,
  },

  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  imgdown: {
    marginTop: theme.spacing(6),
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
    padding: 20,
    color: "#fff",
    letterSpacing: 1,
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avater: {
    height: 180,
    width: 180,
    background: "#fff",
  },
  avaIcon: {
    height:120,
    width:120,
    color: "#376e6f",
  },
}));

function How() {
  const classes = useStyles();

  return (
    <div className={classes.step}>
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
              color: "#fff",
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
        <Grid item md="4" className={classes.grid}>
          <Avatar className={classes.avater}>
            <FaRegEdit className={classes.avaIcon} />
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
        <Grid item md="4" className={classes.grid}>
          <Avatar className={classes.avater}>
            <MdSchool className={classes.avaIcon} />
          </Avatar>
          <Typography variant="h6" className={classes.steptitle}>
            Choose Course
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
        <Grid item md="4" className={classes.grid}>
          <Avatar className={classes.avater}>
            <GiCircularSaw className={classes.avaIcon} />
          </Avatar>
          <Typography variant="h6" className={classes.steptitle}>
            Hand-On Learning
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
    </div>
  );
}

export default How;
