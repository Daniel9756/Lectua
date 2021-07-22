import React from "react";
import { makeStyles, Grid, Typography, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  MdAccountBalance,
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdHome,
  MdSlideshow,
  MdCropRotate,
  MdInfo,
  MdDescription,
  MdPerson,
} from "react-icons/md";

import { CustomButton } from "../../controls/Button";
import { CustomInput, CustomTextarea } from "../../controls/Input";

const useStyles = makeStyles((theme) => ({
  footer: {
    justifyContent: "center",
    backgroundColor: "#2f4454",
    color: "#fff",
    paddingBottom: "15px",
  },

  imgdown: {
    padding: theme.spacing(6),
    justifyContent: "space-between",
    textAlign: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.spacing(3),
  },
  box: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),

    textAlign: "left",
  },
  steptitle: {
    paddingBottom: theme.spacing(3),
    fontFamily: "serif",
    color: "#dcdde1",
    textTransform: "uppercase",
    textAlign: "left",
  },
  stepsubtitle: {
    fontFamily: "serif",
    paddingBottom: theme.spacing(1),
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    opacity: "0.5",
  },
  icon: {
    paddingRight: "10px",
    fontSize: 40,
    color: "#DA7B93",
  },
  lectuatxt: {
    opacity: "0.5",
    letterSpacing: 2,
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "bold",
  },
  links: {
    color: "#DA7B93",
    fontFamily: "serif",
    textDecoration: "none",

    "&:hover": {
      color: "#fff",
      fontFamily: "serif",
      textDecoration: "none",
      padding: "10px",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container className={classes.imgdown}>
        <Grid item md="3">
          <div className={classes.logo}>
            <Avatar
              variant="rounded"
              style={{ fontSize: 40, background: "#2f4454" }}
            >
              <MdAccountBalance
                size="large"
                style={{ fontSize: 40, color: "#DA7B93" }}
              />
            </Avatar>
            <Link to="/" className={classes.links}>
              <Typography
                variant="h5"
                style={{ color: "#DA7B93", fontFamily: "serif" }}
              >
                {" "}
                lactua
              </Typography>
            </Link>
          </div>

          <Typography
            variant="body2"
            component="p"
            className={classes.lectuatxt}
          >
            To provide learning material to the world teaming population, making
            learning easy and less expensive.
          </Typography>
        </Grid>
        <Grid item md="3" className={classes.box}>
          <Typography variant="h5" className={classes.steptitle}>
            Enqiures
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <MdLocationOn className={classes.icon} /> No1 Ekemba Street, Suncity
            Layout, Alulu Road, Nike Enugu.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <MdPhone className={classes.icon} />
            Call Us: +234 807 426 7828
          </Typography>{" "}
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <MdEmail className={classes.icon} />
            corneliuseze30@gmail.com
          </Typography>
        </Grid>{" "}
        <Grid item md="3" className={classes.box}>
          <Typography variant="h5" className={classes.steptitle}>
            Company
          </Typography>
          <Link to="/" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdHome className={classes.icon} /> Home.
            </Typography>
          </Link>
          <Link to="/dashboard" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdCropRotate className={classes.icon} />
              Academics
            </Typography>
          </Link>
          <Link to="/About" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdInfo className={classes.icon} />
              About Us
            </Typography>
          </Link>
          <Link to="/MyProfile/MyLectures" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdSlideshow className={classes.icon} />
              Create lecture
            </Typography>
          </Link>
          <Link to="/dashboard" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdPerson className={classes.icon} />
              Find courses
            </Typography>
          </Link>
          <Link to="/Register" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdDescription className={classes.icon} />
              Register
            </Typography>
          </Link>
        </Grid>{" "}
        <Grid item md="3" className={classes.box}>
          <Typography variant="h5" className={classes.steptitle}>
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            Get latest information on real estate property news around you
          </Typography>
          <div>
            <CustomInput
              label="Your Email"
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginTop: "8px" }}>
            <CustomTextarea
              placeholder="Your Message"
              style={{ width: "100%", minHeight: "65px", fontFamily: "roboto" }}
            ></CustomTextarea>
          </div>
          <div>
            <CustomButton
              text="Send"
              style={{
                marginTop: "8px",
                width: "100%",
                color: "#fff",
                background: "#DA7B93",
              }}
            >
              send
            </CustomButton>
          </div>
        </Grid>
      </Grid>
      <hr />
      <p style={{ textAlign: "center", opacity: "0.7" }}>
        &#169; copyright 2021 &#64; lactua.com
      </p>
    </div>
  );
}

export default Footer;
