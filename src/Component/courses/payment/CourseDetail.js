import { Container, Box, Typography, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import {  Protitle } from '../../../controls/Input'
import { fetchOneUser } from "../../../Async/users"
import { useQuery } from "react-query";
import { BlockLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert"
import PaymentDetail from './PaymentDetail';
import { FreeClass } from './FreeClass';
import Footer from '../../footer/Footer';

const useStyles = makeStyles(() => ({
    lists: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        margin: 14,
    },
    links: {

        fontSize: 18,
        color: "#376e6f",
        fontFamily: "serif",
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
    "@media (max-width: 960px)": {

    },
    "@media (max-width: 440px)": {
        lists: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            overflow: "hidden"
        },
    },
}));
function CourseDetail(props) {
    const firstName = localStorage.getItem("firstName");
    const classes = useStyles();
    const userID = localStorage.getItem("userID");

    const { item: { orgname, orgstate, orgcountry, subject, id, target, price, per } } = props
    const { data: user, isLoading, isError, isSuccess } = useQuery(["user", userID], () => fetchOneUser(userID), {
        onSuccess: (data) => console.log(data),
    });
    const email = user?.data?.[0]?.email
    return (<Box>

        <Container style={{ paddingLeft: 50, paddingRight: 50, margin: 14, marginBottom: 18, borderBottom: '20px solid #DA7B93' }}>
            <Grid container>
                <Grid item md="6">
                    <Box style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: 14,
                        marginTop: "35%"
                    }}>
                        {
                            price ==='Free' ?
                                <Box>
                                    <FreeClass subject={subject} email={email} id={id} userid={userID} />
                                </Box>
                                :
                                <div>
                                    {isLoading && (<BlockLoading />)}
                                    {isError && (<MessageBox message="Your subjects is not available at the moment " severity="error" />)}
                                    {isSuccess && (
                                        <div>
                                            {user.data.map((item) => (
                                                <PaymentDetail item={item} id={id} key={item.id} subject={subject} price={price} />

                                            ))}
                                        </div>
                                    )}
                                    <Box className={classes.lists}>
                                        <Typography><em style={{ color: "#376e6f", }}>with paystack</em></Typography>
                                    </Box>
                                </div>
                        }
                    </Box>
                </Grid>
                <Grid item md="6">
                    <Box style={{ padding: 10, margin: 14, background: "#dcdde1", borderRadius: 8 }}>
                        <Box className={classes.lists}>
                            <Protitle>Name of Institutoin</Protitle><Typography variant="subtitle1">{orgname}</Typography>
                        </Box>
                        <hr />
                        <Box className={classes.lists}>
                            <Protitle>Address</Protitle><Typography>{orgstate},{' '}{orgcountry}</Typography>
                        </Box>
                        <hr />

                        <Box className={classes.lists}>
                            <Protitle>Subject</Protitle><Typography>{subject}</Typography>
                        </Box>
                        <hr />
                        <Box className={classes.lists}>
                            <Protitle>Subject Id</Protitle><Typography>{id}</Typography>
                        </Box>
                        <hr />
                        <Box className={classes.lists}>
                            <Protitle>Target Student</Protitle><Typography>{target}</Typography>
                        </Box>
                        <hr />

                        <Box className={classes.lists}>
                            <Protitle>Price</Protitle><Typography><em style={{ color: "#6ab04c", }}>$</em>{' '}{price}</Typography>
                        </Box>
                        <hr />

                        <Box className={classes.lists}>
                            <Protitle>Duration</Protitle><Typography>{per}</Typography>
                        </Box>
                        <hr />

                        <Box className={classes.lists}>
                            <Protitle>Student Name</Protitle><Typography>{firstName}</Typography>
                        </Box>      </Box>
                </Grid>

            </Grid>

        </Container>
        <Footer />
        </Box>
    )
}

export default CourseDetail
