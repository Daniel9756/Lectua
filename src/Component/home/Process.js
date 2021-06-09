import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { GiLaserSparks} from "react-icons/gi";
import {  GroupButton } from "../../controls/Button";

import { 
  MdExpandMore
} from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginTop: 40,
    marginBottom: 40,
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
    // paddingTop: 4,

    fontWeight: "bold",
    color: "#2f4454",
  },
  paperbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTit: {
    padding: 10,
    color: "#DA7B93",
    fontWeight: "bold",
  },
  icon: {
    margin: 6,
    color: "#DA7B93",
    fontSize: 40,
  },
  paper: {
    height: "auto",
    padding: 5,
    paddingLeft: 25,
    marginTop: 5,
    width: "100%",
    cursor: "pointer",
  },
  papertop: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 120,
    padding: 5,
    background: "#2f4454",
    marginTop: 10,
    width: "100%",
    paddingLeft: 25,
  },
  expand: {
    color: "#2f4454",

    fontSize: 40,
  },
}));
function Process() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
              fontWeight: "bold",
              fontSize: 20,
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
        <Grid item md="6">
          <Box className={classes.box}>
            <Paper className={classes.papertop}>
              <GiLaserSparks className={classes.icon} />
              <Typography variant="h5" className={classes.textTit}>
                Institutions and Teachers
              </Typography>
            </Paper>
            <Accordion className={classes.paper}>
              <AccordionSummary
                expandIcon={<MdExpandMore className={classes.expand} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className={classes.paperbox}>
                  <GiLaserSparks className={classes.icon} />
                  <Typography variant="h6" className={classes.text}>
                    Register
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" className={classes.text}>
                  To work with Lectua, you have to identify with us which will
                  help us secure your account. We know all our customers and we
                  threat each an every one in a special way
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.paper}>
              <AccordionSummary
                expandIcon={<MdExpandMore className={classes.expand} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className={classes.paperbox}>
                  <GiLaserSparks className={classes.icon} />
                  <Typography variant="h6" className={classes.text}>
                    Complete your Profile
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" className={classes.text}>
                  A well prepared profile is every thing. Statistics as shown
                  that Professional with a very good background succed more than
                  others. Your profile must highlight your core compitency.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.paper}>
              <AccordionSummary
                expandIcon={<MdExpandMore className={classes.expand} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className={classes.paperbox}>
                  <GiLaserSparks className={classes.icon} />
                  <Typography variant="h6" className={classes.text}>
                    Create your Courses with details
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" className={classes.text}>
                  When preparing your course, try to make sure that all the
                  necessary details has been added. Such as time for the
                  lession, topics and table of content etc. For institutions, it
                  is also good to assign each course to a teacher which has
                  specialty in the field.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.paper}>
              <AccordionSummary
                expandIcon={<MdExpandMore className={classes.expand} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className={classes.paperbox}>
                  <GiLaserSparks className={classes.icon} />
                  <Typography variant="h6" className={classes.text}>
                    Invite Student
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" className={classes.text}>
                  After creating a course, you can make user of our SMS to send
                  messages to students on the details of already created course.
                  For membership other than Basic, our SMS incure no charge.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid item md="6">
          <Box className={classes.box}>
            <Paper className={classes.papertop}>
              <GiLaserSparks className={classes.icon} />
              <Typography variant="h5" className={classes.textTit}>
                Students
              </Typography>
            </Paper>

            <Accordion className={classes.paper}>
              <AccordionSummary
                expandIcon={<MdExpandMore className={classes.expand} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className={classes.paperbox}>
                  <GiLaserSparks className={classes.icon} />
                  <Typography variant="h6" className={classes.text}>
                    Register
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" className={classes.text}>
                  To work with Lectua, you have to identify with us which will
                  help us secure your account. We know all our customers and we
                  threat each an every one in a special way.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.paper}>
              <AccordionSummary
                expandIcon={<MdExpandMore className={classes.expand} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className={classes.paperbox}>
                  <GiLaserSparks className={classes.icon} />
                  <Typography variant="h6" className={classes.text}>
                    Choose Institution or Teacher
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" className={classes.text}>
                  Carefully select institution or professional per your need.
                  Check the profile of the institution as well as the profile of
                  the teacher handling the course you want to undertake. Also
                  the time and the table of content to make sure it is the best
                  fit for you. Use our calenderly feature to shedule a meeting
                  with the institution or teacher to ask some other questions
                  which you may have.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.paper}>
              <AccordionSummary
                expandIcon={<MdExpandMore className={classes.expand} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className={classes.paperbox}>
                  <GiLaserSparks className={classes.icon} />
                  <Typography variant="h6" className={classes.text}>
                    Hand-on Learning
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" className={classes.text}>
               Explore your world of online learning.  Take advantage of our free learning material to upgarde your skill. 
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.paper}>
              <AccordionSummary
                expandIcon={<MdExpandMore className={classes.expand} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className={classes.paperbox}>
                  <GiLaserSparks className={classes.icon} />
                  <Typography variant="h6" className={classes.text}>
                    Develop academically
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" className={classes.text}>
                 Most thing you need to succed academically is here in lectua. Our community has helped thousands of students achieve their goals.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
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

export default Process;
