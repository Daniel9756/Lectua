import React from "react";

import {
  makeStyles,
  Grid,
  Typography,
  CardContent,
  Card,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { SiExpertsexchange } from "react-icons/si";
import {
  GiLighthouse,
  GiSatelliteCommunication,
  GiFreedomDove,
} from "react-icons/gi";
import { Title } from "../../controls/Input";
import { CustomButton } from "../../controls/Button";

const useStyles = makeStyles((theme) => ({
 
  why: {
    textAlign: "flex-start",
    fontWeight: "bold",
    fontFamily: "serif",
    textTransform: "capitalize",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
    color: "#DA7B93",
  },
  choose: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "serif",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    background: "#dcdde1",
    marginLeft: 40,
    marginRight: 40,
  },
  choose1: {
    textAlign: "center",  
    fontWeight: "bold",
    fontFamily: "serif",
    color: "#DA7B93",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  grid: {
    marginTop: theme.spacing(4),
  },
 
  
  paragraph: {
    fontFamily: "Helvetica Neue",
    fontSize: "1rem",
    opacity: "0.8",
    marginBottom: 16,
  },
  icon: {
    fontSize: 150,
    marginTop: "16px",
    color: "#376e6f",
  },
  card: {
    height: "600px",
    margin: theme.spacing(1),
  },
}));

function Why() {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className={classes.choose}>
      <Title style={{ paddingTop: 20, fontSize: 40,  color: "#376e6f", }}>Why Choose US</Title>
      <Typography
        variant="h6"
        className={classes.choose1}
        component="div"
        style={{ opacity: "0.5" }}
      >
        We provide 100% satisfaction at every step
      </Typography>
      <Grid container className={classes.grid}>
        <Grid item md="3">
          <Card className={classes.card}>
            <div style={{ textAlign: "center" }}>
              <GiFreedomDove className={classes.icon} />
            </div>
            <CardContent style={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                className={classes.why}
                component="div"
                color="secondary"
              >
                Over 15,679 Free Tutorial
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.paragraph}
              >
                Soliciting feedback estate professional. Our Real Estate Market
                Agents selection is even more exclusive. See{" "}
                <Link to="#">Agents</Link> for a short list of outstanding real
                estate agents.
              </Typography>
              <CustomButton>Browse Tutorial</CustomButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md="3">
          <Card className={classes.card}>
            <div style={{ textAlign: "center" }}>
              <GiLighthouse className={classes.icon} />
            </div>
            <CardContent style={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                className={classes.why}
                component="div"
                color="secondary"
              >
                4,333 Experienced Lecturer
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.paragraph}
              >
                Millions of real estate investors use our platform for their
                real estate listings. We have completed over 10,000+
                transactions. See <Link to="#">below</Link> for our happy
                client's testimonial.
              </Typography>
              <CustomButton>Browse Tutorial</CustomButton>
            </CardContent>
          </Card>
        </Grid>{" "}
        <Grid item md="3">
          <Card className={classes.card}>
            <div style={{ textAlign: "center" }}>
              <SiExpertsexchange className={classes.icon} />
            </div>
            <CardContent style={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                className={classes.why}
                component="div"
                color="secondary"
              >
                20 years work experience
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.paragraph}
              >
                We have properties ranging from single/multiple rooms to
                office/business complex. You can also visit our{" "}
                <Link>property</Link> page to see all our listings
              </Typography>
              <CustomButton>Browse Tutorial</CustomButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md="3">
          <Card className={classes.card}>
            <div style={{ textAlign: "center" }}>
              <GiSatelliteCommunication className={classes.icon} />
            </div>
            <CardContent style={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                className={classes.why}
                component="div"
                color="secondary"
              >
                100% satisfaction rate
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.paragraph}
              >
                We offer 24/7 live chatting and messaging to our various
                clients. We are here, whenever you need our assistance.
                This is a very good one
              </Typography>
              <CustomButton>Browse Tutorial</CustomButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Why;
