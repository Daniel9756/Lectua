import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
// import Controls from "../../controls/Controls";
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 16,
  },

  service: {
    backgroundImage: `url(/img/hero/hero2.jpg)`,
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    width: "100%",
    height: "300px",
    marginTop: "-20px",

    paddingTop: theme.spacing(2),
    color: "#fff",
  },
  home: {
    color: "#c23616",
  },
}));

function Service() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.service}>
        <Grid item md="2"></Grid>
        <Grid item md="8">
          <Typography
            variant="h3"
            color="secondary"
            style={{
              fontWeight: "bold",
              fontFamily: "serif",
              textAlign: "center",
              color: "#130f40",
              marginTop: 4,
            }}
          >
            Start a good life
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            color="secondary"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bold",
              fontFamily: "serif",
              letterSpacing: 2,
            }}
          >
            Our Service go beyound just providing Safe, Serene and Beautiful
            exclusive real estate property. As an extended service, we also
            provide house package that give you access to an array of house
            designs, suited to a variety of lots of sizes and your unique family
            housing needs.
            <Link to="#" className={classes.home}>
              OUR DESIGN
            </Link>
          </Typography>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </div>
  );
}

export default Service;
