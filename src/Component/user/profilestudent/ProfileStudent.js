
import React, { useState, } from "react";
import { Box, Container, Grid, makeStyles, Avatar, Typography } from "@material-ui/core";
import MyProfile from "./MyProfile";
import EnrolledCourses from "./EnrolledCourses";
import MyDashboard from "./MyDashboard";
import { useHistory } from "react-router-dom"
import SideBar from "./SideBar";
import { Title } from "../../../controls/Input";
import { GroupButton } from "../../../controls/Button";


const useStyles = makeStyles({
    root: {
        marginBottom: 11, marginTop: 42
    },
    title: {
        padding: 8
    },
    logo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 11, marginTop: 8,
        backgroundColor: "#376e6f",
        color: "#1C3334",
        padding: 5,
        height: 151,
        borderRadius: 10
    },
    btn: {
        width: 240, height: 60, borderRadius: 10
    },
    cont: {
        paddingRight: 50, paddingLeft: 50
    },
    "@media (max-width: 960px)": {
        sidebar: {
            width: "100%",
            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
            alignItems: "center",

        },
        grid: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

        },
        header: {

            width: "100%"
        },
        cont: {
            paddingRight: 10, paddingLeft: 10
        },
        title: {
            padding: 0
        },
    },
    "@media (max-width: 440px)": {
        root: {
            marginBottom: 10,
        },
        header: {
            marginBottom: 2,
            backgroundColor: "#376e6f",
        },
    },
});

function ProfileStudent() {
    const classes = useStyles();
    const history = useHistory()
    function getContent(page) {
        switch (page) {
            case "MyDashboard":
                return <MyDashboard setEnrollId={setEnrollId} />;
            case "MyProfile":
                return <MyProfile getPics={getPics} />;
            case "EnrolledCourses":
                return <EnrolledCourses enrollId={enrollId} />;
            default:
                return "UNKNOWN STEP";
        }
    }
    const [content, setContent] = useState("MyProfile");
    const firstName = localStorage.getItem("firstName");
    const [enrollId, setEnrollId] = useState('');
    const [pics, setPics] = useState('');
    const getPics = (photo) => {
        setPics(photo)
    }

    return (
        <Box className={classes.root}>
            <Container className={classes.cont}>

                <Grid container className={classes.grid}>
                    <Grid md="3" sm="12" className={classes.sidebar}>
                        <Box className={classes.title}>
                            <Title>
                                Lectua
                            </Title>
                            <hr />
                        </Box>
                        <SideBar setContent={setContent} />
                    </Grid>

                    <Grid md="9">
                        <Box className={classes.header}>

                            <div className={classes.logo}>
                                <Avatar
                                    style={{ width: 80, height: 80, background: "#2f4454" }}
                                    src={pics}
                                >

                                </Avatar>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                }}>
                                    <Typography
                                        variant="subtitle1"
                                        style={{ color: "#DA7B93", fontFamily: "serif", marginLeft: 10, }}
                                    >
                                        {" "}
                                        Welcome,
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        style={{ color: "#DA7B93", fontFamily: "serif", marginLeft: 10, }}
                                    >
                                        {" "}
                                        {firstName}
                                    </Typography>
                                </Box>

                            </div>
                            <GroupButton
                                className={classes.btn}
                                onClick={() => history.push("/creat")}
                            >
                                Find more courses
                            </GroupButton>
                        </Box>

                        <Box>{getContent(content)}</Box>
                    </Grid>
                </Grid>



            </Container>

        </Box>
    );
}

export default ProfileStudent;
