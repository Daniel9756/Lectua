import React, { useRef, useContext, useState } from "react";
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
} from "react-icons/md";

import emailjs from 'emailjs-com';
import { FiLoader } from 'react-icons/fi';
import { GlobalContext } from "../../Context/Provider";

const useStyles = makeStyles((theme) => ({
  footer: {
    justifyContent: "center",
    backgroundColor: "#2f4454",
    color: "#fff",
    paddingBottom: "15px",
    zIndex: 210,
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
  input: {
    width: "100%",
    padding: "6px",
    borderRadius: "4px",
    border: "1px solid #A3333D"
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
  const {
    loginState: {
      login: { isPemmitted, logger },
    },
  } = useContext(GlobalContext);
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_USER_ID)
      .then((result) => {
        if (result.status === 200) {
          setMessage("Thanks for your Message. We will get intouch soon")
          setLoading(false)
        }
      }, (error) => {
        console.log(error.text);
      });
  };

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
          <Link to="/courses" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdCropRotate className={classes.icon} />
              Find Courses
            </Typography>
          </Link>
          <Link to="/contact" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdInfo className={classes.icon} />
              About Us
            </Typography>
          </Link>
          {logger?.registerAs === "Teacher" ? <Link to="/MyProfile/MyLectures" className={classes.links}>
            <Typography
              variant="body2"
              component="p"
              className={classes.stepsubtitle}
            >
              <MdSlideshow className={classes.icon} />
              Create lecture
            </Typography>
          </Link> : ''}


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
          <form ref={form} onSubmit={sendEmail} className="form">

                   <div className="formelement" style={{ marginTop: 16 }}>
              <input type="text" name="user_name" className={classes.input} placeholder="Your Full Name"
              
              
              />

            </div>
            <div className="formelement" style={{ marginTop: 16 }}>
              <input type="email" name="user_email" className={classes.input} placeholder="Your Email Address" />


            </div>
            <div className="formelement" style={{ marginTop: 16 }}>
              <textarea name="message" className={classes.input} placeholder="Your Message" />

            </div>
            <h5 style={{ color: "#60993E", fontFamily: "cursive", marginLeft: 6, marginRight: 6 }}>{message}</h5>
            <div className="formelement">
              <button type="submit" className="emailbtn" style={{ marginTop: 6, backgroundColor: "#DA7B93", borderRadius: 6, width: 80 }}>{loading ? <FiLoader /> : 'SEND'}</button>
            </div>
          </form>

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
