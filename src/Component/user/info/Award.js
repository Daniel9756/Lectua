import React from 'react'
import { Box, Grid, Avatar, makeStyles } from "@material-ui/core";
import { Info, Subtitle } from "../../../controls/Input";
import { ImageBox } from './ImageBox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 6,

    },
    lists: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "15px",
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

function Award({ item }) {
    const classes = useStyles();

    return (
        <Box>

            <Box style={{ display: "flex", alignItems: "center" }}>
                <Subtitle>Specialty:</Subtitle>
                <Info>
                    <em style={{ color: "#376e6f", }}>{item?.specialty}</em>

                </Info>
            </Box>
            <Box style={{ display: "inline-block", alignItems: "center" }}>
                <Subtitle>Certificates:</Subtitle>
                <Info>
                    {JSON.parse(item?.certifications).map((x) => (
                        <ul>
                            <li>
                                {x.awardTitle}{' '}: <em style={{ color: "#376e6f", }}>{x.awardOrg}</em>
                            </li>
                        </ul>
                    ))
                    }</Info>
            </Box>{" "}

            <Box style={{ display: "inline", alignItems: "center", marginTop: 42 }}>
                <Subtitle>Subjects:</Subtitle>
                <ul>
                    <Info>
                        {
                            JSON.parse(item?.subjects).map((x) => (
                                <ul>
                                    <li>
                                        <em style={{ color: "#376e6f", }}> {x.split('')}</em>

                                    </li>
                                </ul>
                            ))}
                    </Info>
                </ul>
            </Box>
            <Box >
                <Subtitle>Certificates:</Subtitle>
                <Box style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                    gap: "60px",
                    maxWidth: 'auto'
                }}>
                    {JSON.parse(item?.awardFiles).map((image) => (
                        <ImageBox image={image} key={image} />
                    ))}
                </Box>
            </Box>{" "}
        </Box>
    )
}

export default Award
