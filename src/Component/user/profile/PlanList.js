import { Container, makeStyles, Box } from "@material-ui/core";
import React, { useState } from "react";
import Pricing from "../../membership/Pricing";
import { FaSchool } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { Title } from "../../../controls/Input";
import Footer from "../../footer/Footer"
import { GroupButton } from "../../../controls/Button";

import { MdCropFree } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

function PlanList(props) {
    const getBack = () => {
        history.goBack()
    }
    const classes = useStyles();
    const plans = [
        {
            id: "1",
            icon: <MdCropFree />,
            title: "Basic",
            price: "Free",
            rootUser: "One root Account",
            singleClass: "One free Single Class",
            groupClass: "One free Group Class",

            sms: "No Free SMS messages",
        },
        {
            id: "2",
            icon: <ImProfile />,
            title: "Professional",
            price: 2000,
            rootUser: "One root Account",
            singleClass: "Billed Single Classes",
            groupClass: "Billed group class",

            sms: "Free SMS messages",
        },
        {
            id: "3",
            icon: <FaSchool />,
            title: "Institutional",
            price: 5000,
            rootUser: "One root Account",
            singleClass: "Unlimited Single Classes",
            groupClass: "Unlimited group class",

            sms: "Free SMS messages",
        },

    ];
    const history = useHistory();


    return (
        <>
            <Container
                style={{
                    marginBottom: 150,
                    paddingBottom: 10,
                    paddingTop: 20,
                    background: "#dcdde1",
                }}
            >
                <Box style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                }}>
                    <Title> Plan Choices</Title>
                    <GroupButton
                        onClick={getBack}
                        style={{
                            width: "121px",
                            background: "#376e6f",
                            height: 40,
                            color: "#DA7B93",
                          
                            borderRadius: 10,
                        }}
                    >
                        Go Back
                    </GroupButton>
                </Box>
                <Box container className={classes.container}>
                    {plans.map((item) => (
                        <Pricing
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            price={item.price}
                            rootUser={item.rootUser}
                            singleClass={item.singleClass}
                            groupClass={item.groupClass}
                            sms={item.sms}

                        />
                    ))}
                </Box>

            </Container>
            <Footer />
        </>
    );
}

export default PlanList;
