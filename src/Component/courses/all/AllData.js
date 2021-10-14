import React from 'react'
import { Link, useHistory } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import {

    makeStyles, Box, Card, CardContent, Typography, Avatar, CardHeader
} from "@material-ui/core";
import { CustomButton } from "../../../controls/Button";

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: "250px",
        height: "550px",

        elevation: "0",

    },
    icon: {
        width: "100%",
        height: "200px",
        borderRadius: 8,
        textAlign: "center",
    },
    why: {
        textAlign: "flex-start",
        fontWeight: "bold",
        fontFamily: "serif",
        textTransform: "capitalize",
        marginTop: theme.spacing(0.4),
        opacity: "0.5",
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
    rating: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    status: {
        fontFamily: "Helvetica Neue",
        color: "#130f40",
        fontWeight: "bold",
        marginLeft: 12,
    },
    avatar: {
        fontFamily: "Helvetica Neue",
    },
    "@media (max-width: 960px)": {

    },
    "@media (max-width: 440px)": {
        card: {
            width: "280px",
            height: "550px",
            margin: theme.spacing(1),
            elevation: "0",

        },
    },
}));


function AllData(props) {
    const classes = useStyles();
    const { item: { orgname, orgstate, orgcountry, per, price, picsurl, subject, target, userid, id } } = props
    const history = useHistory()
   

    const handleTarget = () => {           
            history.push(`/courses/${subject}/${id}`)   

    }

    return (<Card className={classes.card}>
        <CardHeader
            avatar={
                <Typography variant="h5" className={classes.avatar}>
                    <em style={{ color: "#DA7B93", fontSize: 18, }}>for</em> {target} <em style={{ color: "#DA7B93", fontSize: 18, }}>students</em>
                </Typography>
            }
        />
        <hr />
        <Box className={classes.icon}>
            <Avatar alt="banner" src={picsurl} square className={classes.icon} />
        </Box>
        <CardContent>
            <div className={classes.title}>
                <Typography variant="subtitle2" className={classes.status}>
                    {subject}
                </Typography>
                <Link
                    to={`/institution/${orgname}/${userid}`}
                    className={classes.links}
                >
                    {orgname}
                </Link>
                <Typography variant="subtitle2" className={classes.status}>
                    {orgstate}, {orgcountry}
                </Typography>
            </div>
            <hr />
            <Box className={classes.rating}>

                <Rating name="size-small" defaultValue={2} size="small"


                />
                <Box className={classes.rating}>
                    <Box style={{ fontWeight: "bold" }}>  ${price}</Box><small>/{per}</small>
                </Box>
            </Box>


            <CustomButton
                style={{ marginTop: 18, borderRadius: 8, color: "#DA7B93", }}
                onClick={handleTarget}
            >
                Enroll
            </CustomButton>

        </CardContent>
    </Card>
    )
}

export default AllData
