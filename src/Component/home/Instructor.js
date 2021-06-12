import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Container,
  Paper,Avatar
} from "@material-ui/core";
import { RiHandHeartFill } from "react-icons/ri";
import { GiLaserSparks, GiOldKing, } from "react-icons/gi";
import { MdDevicesOther } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  service: {
  
    width: "100%",
    height: "630px",
    borderRadius: 12,  
    color: "#fff",
  },
  container: {
    background: "#2f4454",
    paddingTop: 40,
    paddingBottom: 40,

  },
  title: {
    padding: 10,
    fontWeight: "bold",
    fontFamily: "serif",
    color: "#DA7B93",

  },
  title1: {
    padding: 10,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#DA7B93",

  },
  box: {
   
    display: "flex",
    flexDirection: "column",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    padding: 10,
    fontWeight: "bold",
    color: "#2f4454",
  },
  icon: {
    color: "#DA7B93",
    fontSize: 40,
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
    width: "300px",
  },
}));
function Instructor() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container>
        <Grid container>
         
        <Grid item md="6">
          <Box style={{margin:10}}>

            <Avatar
              variant="rounded"
              src="/images/ws3.jpg"
              alt="company logo"
              className={classes.service}
            ></Avatar>
          </Box>
          </Grid>
          <Grid item md="6">
            <Box  style={{marginleft:10}}>

          
            <Box>
              <Typography variant="h4" className={classes.title}>
                Don’t change what you learn, just change your learning habit.
              </Typography>
              <Typography variant="h6" className={classes.title1}>
                Everything you need to build an amazing online educational
                background.
              </Typography>
              <Typography variant="body1" className={classes.title1}>
                We’ve designed a culture that allows our stewards to assimilate
                with our clients and bring the best of who we are to your
                business. Our culture drives our – and more importantly your
                success. Our results solution combines capability building. and
                state-of-the-art diagnostic and analytic tools so you can
                continually change.{" "}
              </Typography>
            </Box>
            <Grid container>
              <Grid md="6" sm="12">
                <Box className={classes.box}>
                  <Paper className={classes.paper}>
                    <RiHandHeartFill className={classes.icon} />
                    <Typography variant="h6" className={classes.text}>
                      Inspirational Professor speech
                    </Typography>
                  </Paper>

                  <Paper className={classes.paper}>
                    <GiOldKing className={classes.icon} />
                    <Typography variant="h6" className={classes.text}>
                      Expert Leadership definition
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
              <Grid md="6" sm="12">
                <Box className={classes.box}>
                  <Paper className={classes.paper}>
                    <GiLaserSparks className={classes.icon} />
                    <Typography variant="h6" className={classes.text}>
                      Supportive Parents & Friends
                    </Typography>
                  </Paper>

                  <Paper className={classes.paper}>
                    <MdDevicesOther className={classes.icon} />
                    <Typography variant="h6" className={classes.text}>
                      Developing Academically Education
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Box>
          </Grid>
        </Grid>{" "}
      </Container>
    </Box>
  );
}

export default Instructor;
