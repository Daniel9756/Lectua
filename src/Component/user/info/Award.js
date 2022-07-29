import React from 'react'
import { Box,} from "@material-ui/core";
import { Info, Subtitle } from "../../../controls/Input";
import { ImageBox } from './ImageBox';

function Award({ item }) {

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
                    {JSON?.parse(item?.certifications).map((x) => (
                        <ul>
                            <li>
                                {x?.awardTitle}{' '}: <em style={{ color: "#376e6f", }}>{x?.awardOrg}</em>
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
                            JSON?.parse(item?.subjects).map((x) => (
                                <ul>
                                    <li>
                                        <em style={{ color: "#376e6f", }}> {x?.split('')}</em>

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
                    {JSON?.parse(item?.awardFiles).map((image) => (
                        <ImageBox image={image} key={image} />
                    ))}
                </Box>
            </Box>{" "}
        </Box>
    )
}

export default Award
