import React from 'react'
import { Container,  makeStyles, Box,  Typography } from "@material-ui/core";
import { CustomButton } from '../../controls/Button';
import { CustomInput, CustomTextarea } from '../../controls/Input';

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
                       Wish to write to us, you are welcome, just write your message and we will get back to you
                    </Typography>
                </Box>
                <div>
                    <CustomInput
                        placeholder="Your Email"
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
                        style={{ width: "100%", minHeight: "152px", fontFamily: "roboto" }}
                    ></CustomTextarea>
                </div>
                <div>
                    <CustomButton                       
                        style={{
                            width: "20%",
                            color: "#DA7B93",
                            padding: 12,
                            borderRadius: 8,

                        }}
                    >
                        send
                    </CustomButton>
                </div>
            </Box>
        </Container>
    )
}
