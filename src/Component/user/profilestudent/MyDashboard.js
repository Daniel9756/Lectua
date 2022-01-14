import React, { useContext } from 'react'
import { Box, makeStyles, Avatar, Typography } from "@material-ui/core";
import { MdSubscriptions, MdSchool } from "react-icons/md";
import { SiWebcomponentsDotOrg } from "react-icons/si";
import StudentLesson from "../../Lession/StudentLesson"
import { GlobalContext } from '../../../Context/Provider';
const useStyles = makeStyles({
    root: {
        display: "flex",

        flexDirection: 'column',
        justifyContent: "space-between",

    },
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 2,

        backgroundColor: "#2f4454",
        color: "#1C3334",
        padding: 5,
        height: 151,
        width: 280,
        borderRadius: 10
    },

    logo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

    },
    icon: {
        color: "#376e6f",
        fontSize: 50
    },

    cont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    "@media (max-width: 960px)": {
        box: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            //  backgroundColor: "#376e6f",
            backgroundColor: "#2f4454",
            color: "#1C3334",
            padding: 5,
            height: 151,
            width: 280,
            borderRadius: 10
        },
    },
    "@media (max-width: 440px)": {
        cont: {
            display: "flex",
            alignItems: "center",
            flexDirection: 'column',
            justifyContent: "space-between",
        },
    },
});
function MyDashboard() {
    const classes = useStyles();   
     
  const {  
    myEnrolledlecturesState: {
      myenrollecture: {  myenrolled },
    },

} = useContext(GlobalContext);




    return (
        <Box className={classes.root}>
            <Typography
                variant="h6"
                style={{ color: "#DA7B93", fontFamily: "serif", float: 'left', fontWeight: 'bold' }}
            >
                {" "}
                Dashboard
            </Typography>

            <Box className={classes.cont}>
                <Box className={classes.box}>

                    <Box className={classes.logo}>
                        <Avatar
                            style={{ width: 80, height: 80, background: "#2f4454" }}

                        >
                            <MdSubscriptions className={classes.icon} />
                        </Avatar>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}>
                            <Typography
                                variant="h4"
                                style={{ color: "#DA7B93", fontFamily: "serif", marginLeft: 10, }}
                            >
                                {" "}
                                {myenrolled?.response?.length}
                            </Typography>

                            <Typography
                                variant="h6"
                                style={{ color: "#DA7B93", fontFamily: "serif", marginLeft: 10, }}
                            >
                                {" "}
                                Active Courses
                            </Typography>
                        </Box>

                    </Box>
                </Box> <Box className={classes.box}>

                    <Box className={classes.logo}>
                        <Avatar
                            style={{ width: 80, height: 80, background: "#2f4454" }}

                        >
                            <SiWebcomponentsDotOrg className={classes.icon} />
                        </Avatar>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}>
                            <Typography
                                variant="h4"
                                style={{ color: "#DA7B93", fontFamily: "serif", marginLeft: 10, }}
                            >
                                {" "}
                                2
                            </Typography>

                            <Typography
                                variant="h6"
                                style={{ color: "#DA7B93", fontFamily: "serif", marginLeft: 10, }}
                            >
                                {" "}

                                Completed Courses
                            </Typography>
                        </Box>

                    </Box>
                </Box>
                <Box className={classes.box}>

                    <Box className={classes.logo}>
                        <Avatar
                            style={{ width: 80, height: 80, background: "#2f4454" }}

                        >
                            <MdSchool className={classes.icon} />
                        </Avatar>
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}>
                            <Typography
                                variant="h4"
                                style={{ color: "#DA7B93", fontFamily: "serif", marginLeft: 10, }}
                            >
                                {" "}
                             {myenrolled?.response.length}
                            </Typography>

                            <Typography
                                variant="h6"
                                style={{ color: "#DA7B93", fontFamily: "serif", marginLeft: 10, }}
                            >
                                {" "}
                                Enrolled Courses
                            </Typography>
                        </Box>

                    </Box>
                </Box>
            </Box>
            <StudentLesson  />
        </Box>
    )
}

export default MyDashboard

