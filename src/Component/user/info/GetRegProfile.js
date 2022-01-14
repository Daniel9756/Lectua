import React from 'react'
import { GroupButton } from "../../../controls/Button";
import { Box, makeStyles, Typography, Avatar, Grid } from "@material-ui/core";
import { LabelText, Protitle } from "../../../controls/Input";
import { Partner } from '../../partner/Partner';

const useStyles = makeStyles((theme) => ({
    list: {
        display: "flex",
        alignItems: "center",
        marginTop: 6,
    },
    lists: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "15px",
    },

    image: {
        width: theme.spacing(28),
        height: theme.spacing(38),
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

function GetRegProfile({ item, getPics }) {
    const classes = useStyles();
    getPics(item?.picsUrl)
    // console.log(item?.picsUrl)
    return (

        <Box>
            <Grid container>
                <Grid item md='4' sm='12'>

                    <Box style={{ margin: 6 }}>
                        <Avatar
                            variant="rounded"
                            src={item?.picsUrl}
                            alt="company logo"
                            className={classes.image}
                        ></Avatar>
                    </Box>


                </Grid>
                <Grid item md='8' sm='12'>
                    <Box>
                        <Box>
                            <Typography variant="subtitle1" className={classes.title1}>
                                {item?.bio}
                            </Typography>{" "}
                        </Box>
                        <Box>
                            <Box>
                                <Box className={classes.list}>
                                    <Protitle>Name:</Protitle>
                                    <LabelText>{item?.orgName}</LabelText>
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
                                        {item?.plan !== "Institutional" && (<GroupButton style={{ color: "#376e6f", borderRadius: 8 }}>
                                            <em>Upgrade </em>
                                        </GroupButton>)}
                                    </Box>
                                </Box>
                                <Box className={classes.list}>
                                    {(item?.plan === "Co-operate" || item?.plan === "Institutional") && (<Partner />)}

                                </Box>{" "}
                            </Box>
                        </Box>
                    </Box>

                </Grid>



            </Grid>

        </Box>
    )
}

export default GetRegProfile
