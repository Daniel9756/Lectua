import React, { useState, useRef } from 'react'
import { Container, makeStyles, Box, Typography } from "@material-ui/core";


// import emailjs from 'emailjs-com';
import { FiLoader } from 'react-icons/fi';
import {
    MdLocationOn,
    MdPhone,
    MdEmail,
} from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    body: {
        paddingRight: 81,
        paddingLeft: 81,
        marginBottom: 40,
    },
    icon: {
        paddingRight: "10px",
        fontSize: 40,
        color: "#DA7B93",
    },
    contact: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 50,
    },
    input: {
        width: "100%",
        padding: "6px",
        borderRadius: "4px",
        border: "1px solid #A3333D",
        "& .focus": {
            backgroundColor: "#DA7B93",
          },
    },
    contxt: {

        marginTop: 40,
        paddingRight: 151,
        paddingLeft: 151,
    },
    con: {
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 12,
    },

    "@media (max-width: 960px)": {
        contxt: {
            padding: 20,
        },
        body: {
            padding: 0,
        },
        contact: {
            padding: 20,

        },
    },
    "@media (max-width: 440px)": {
        register: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        },
    },
}));
export const Contact = () => {
    const classes = useStyles();
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        message.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_USER_ID)
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
        <Container className={classes.body}>
            <Box className={classes.contact}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
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
            </Box>
            <Box className={classes.contxt}>
                <Box className={classes.con}>
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>
                        Contact Us
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{ fontFamily: "serif" }}
                    >
                        Wish to write to us, you are welcome, just drop your message and we will get back to you
                    </Typography>
                </Box>
                <div>
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
                            <button type="submit" className="emailbtn" style={{ marginTop: 6, backgroundColor: "#DA7B93", borderRadius: 6 }}>{loading ? <FiLoader /> : 'SEND'}</button>
                        </div>
                    </form>
                </div>
            </Box>
        </Container>
    )
}
