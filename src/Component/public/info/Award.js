import React from 'react'
import { Box, Container } from "@material-ui/core";
import { Info } from "../../../controls/Input";
import { Protitle } from '../../../controls/Input';
import { ImageBox } from '../../user/info/ImageBox';

function Award({ item }) {
    const awardFiles = item?.awardFiles
    // const data = JSON.parse(awardFiles)
    console.log(awardFiles)
    return (
        <Container>
            <hr />

            <Box style={{ marginTop: 30 }}>
                <Protitle>Specialty:</Protitle>
                <Info>
                    <em style={{ color: "#376e6f", marginLeft: 30 }}>{item?.specialty}</em>

                </Info>
            </Box>
            <hr />
            <Box style={{ marginTop: 30 }}>
                <Protitle>Certificates:</Protitle>
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
            <hr />
            <Box style={{ display: "inline", alignItems: "center", marginTop: 30 }}>
                <Protitle>Subjects:</Protitle>
                <ul>
                    <Info>


                        {
                            JSON.parse(item?.subjects).map((x) => (
                                <ul>
                                    <li>
                                        <em style={{ color: "#376e6f", }}> {x.split('')}</em>

                                    </li>
                                </ul>
                            ))


                        }



                    </Info>
                </ul>
            </Box>
            <hr />
            <Box >
                <Protitle>Certificates:</Protitle>
                <Box style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(142px, 1fr))",
                    gap: "44px",
                }}>
                    {item?.awardFiles.map((image) => (
                        <ImageBox image={image} key={image} />
                    ))}
                </Box>
            </Box>{" "}


        </Container>
    )
}

export default Award
