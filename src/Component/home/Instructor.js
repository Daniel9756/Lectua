import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Container,
  Paper,
} from "@material-ui/core";
import { RiHandHeartFill } from "react-icons/ri";
import { GiLaserSparks, GiOldKing, } from "react-icons/gi";
import { MdDevicesOther } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  service: {
    backgroundImage: `url(/images/ws3.jpg)`,
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    width: "100%",
    height: "auto",
    paddingTop: theme.spacing(2),
    color: "#fff",
  },
  container: {
    background: "#2f4454",
    padding: 40,
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
    marginLeft: 8,
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
    marginLeft: 40,
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
          <Grid md="6" item className={classes.service}></Grid>
          <Grid md="6" item>
            <Box style={{ marginLeft: 20 }}>
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
          </Grid>
        </Grid>{" "}
      </Container>
    </Box>
  );
}

export default Instructor;
