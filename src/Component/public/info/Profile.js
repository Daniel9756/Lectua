import React from 'react'

import { Box, makeStyles, Typography, Avatar, Grid, Container } from "@material-ui/core";
import {  LabelText,  Subtitle } from "../../../controls/Input";
import { Protitle } from '../../../controls/Input';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 6,

    },
    list: {
        display: "flex",
        alignItems: "baseline",
        marginTop: 6,
    },

    image: {
        width: theme.spacing(38),
        height: theme.spacing(40),
        float: "right",
        marginTop: theme.spacing(2)

    },
    links: {
        fontSize: 18,
        color: "#376e6f",
        fontFamily: "serif",
        textDecoration: "none",
        padding: "10px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        "&:hover": {
            background: "#dcdde1",
            color: "#376e6f",
            borderRadius: 8,
        },
    },
    link: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#376e6f",
        fontFamily: "serif",
        textDecoration: "none",
        padding: "10px",
       justifySelf: "center",
       alignSelf: "center",

        "&:hover": {
            background: "#dcdde1",
            color: "#376e6f",
            borderRadius: 8,
        },
    },
    "@media (max-width: 960px)": {
        image: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    "@media (max-width: 440px)": {

    },
}));

function TeacherPro({ teacherId, item }) {
    const classes = useStyles();

    return (<Container>
        <Grid container>
            <Grid item md='4' sm='12'>
                <Box style={{ margin: 6 }}>
                    <Avatar
                        src={item?.picsUrl}
                        alt="company logo"
                        className={classes.image}
                    ></Avatar>
                </Box>
            </Grid>
            <Grid item md='8' sm='12'>
                <Box style={{
                    marginBottom: 25,
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>

                    <Subtitle >{item?.orgName}</Subtitle>
                    <Link
                        to={`/initConversation/${item?.orgName}/${teacherId}`}
                      
                        className={classes.links}
                    >Message Us</Link>
                </Box>
                <Box>
                    <Box>
                        <Typography variant="subtitle1" className={classes.title1}>
                            {item.bio}
                        </Typography>{" "}
                    </Box>
                    <Box>
                        <Box>
                            <Box className={classes.list}>
                            </Box>{" "}
                            <Box className={classes.list}>
                                <Protitle>Location:</Protitle>
                                <LabelText>{item?.orgAddress},{' '}{item?.city},{' '}{item?.orgState},{' '}{item?.orgCountry}</LabelText>
                            </Box>{" "}
                            <Box className={classes.list}>
                                <Protitle>Contact:</Protitle>
                                <LabelText>{item?.phone}</LabelText>
                            </Box>{" "}
                            <Box className={classes.list}>
                                <Protitle>Plan:</Protitle>
                                <Box className={classes.list}>
                                    <LabelText>{item?.plan}</LabelText>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid>
      
    </Container>
    )
}

export default TeacherPro
