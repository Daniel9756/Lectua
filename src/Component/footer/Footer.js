import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import LandscapeIcon from "@material-ui/icons/Landscape";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import StraightenIcon from "@material-ui/icons/Straighten";
import {CustomButton} from "../../controls/Button"
import { CustomInput } from "../../controls/Input";

const useStyles = makeStyles((theme) => ({
  footer: {
    justifyContent: "center",
    backgroundColor: "#130f40",
    color: "#fff",
    paddingBottom: "15px"
  },

  imgdown: {
    padding: theme.spacing(6),
    justifyContent: "space-between",
    textAlign: "center",
  },
  logo: {
    // paddingLeft: theme.spacing(1),
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
    // textTransform: "capitalize",
    paddingBottom: theme.spacing(1),
    display: "flex",
    alignItems: "left",
    opacity: "0.5",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container className={classes.imgdown}>
        <Grid item md="3" className={classes.box}>
          <div className={classes.logo}>
            <CustomButton
              icon={
                <AccountBalanceIcon
                  size="large"
                  color="primary"
                  style={{ fontSize: 80 }}
                />
              }
              style={{ color: "#c23616" }}
              label="LocalsEstate"
              variant="h2"
            />
          </div>

          <Typography variant="body2" component="p" style={{ opacity: "0.5" }}>
            To become the leading real estate company in Africa, providing world
            class real estate service that meet our clients needs at all times
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
            <RoomIcon style={{ paddingRight: "10px" }} /> No1 Ekemba Street,
            Suncity Layout, Alulu Road, Nike Enugu.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <PhoneIphoneIcon style={{ paddingRight: "10px" }} />
            Call Us: 08074267828
          </Typography>{" "}
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <EmailIcon style={{ paddingRight: "10px" }} />
            corneliuseze30@gmail.com
          </Typography>
        </Grid>{" "}
        <Grid item md="3" className={classes.box}>
          <Typography variant="h5" className={classes.steptitle}>
            Company
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <HomeIcon style={{ paddingRight: "10px" }} /> Home.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <LandscapeIcon style={{ paddingRight: "10px" }} />
            Property
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <InfoIcon style={{ paddingRight: "10px" }} />
            About Us
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <ContactsIcon style={{ paddingRight: "10px" }} />
            Our Design
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <ContactMailIcon style={{ paddingRight: "10px" }} />
            Agents
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.stepsubtitle}
          >
            <StraightenIcon style={{ paddingRight: "10px" }} />
            Design
          </Typography>
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
          <div  >
            <CustomInput label="Your Email" style={{backgroundColor: "#fff", borderRadius: "5px", width: "100%"}} />               
          </div>
          <div style={{ display: "flex", left:"0", marginTop: "8px" }}>
            
            <textarea placeholder="Your Message"  style={{ width: "100%", minHeight: "65px", fontFamily: "roboto" }}></textarea>                 
          </div>
          <div>
            <CustomButton text="Send" style={{ marginTop: "8px", width:"100%" }}/>
          </div>
        </Grid>
      </Grid>
      <hr />
      <p style={{ textAlign: "center", opacity: "0.7" }}>
        &#169; Copyright 2021 by LocalsEstate.com
      </p>
    </div>
  );
}

export default Footer;
