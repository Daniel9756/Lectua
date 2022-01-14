import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    box: {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "",
        margin: 8

    },
    type: {
        opacity: 0.8, fontFamily: "serif"
    }
});
function Student({ item, id }) {
    const classes = useStyles();

    return (
        <Box style={{ marginTop: 24 }}>
            <Box className={classes.box}>
                <Typography
                    variant="h6"
                    className={classes.type}
                >
                    First Name
                </Typography>
                <Typography
                    variant="h6"
                >
                    {item?.firstName}
                </Typography>
                <Box></Box>

            </Box>
            <Box className={classes.box}>
                <Typography
                    variant="h6"
                    className={classes.type}
                >
                    Last Name
                </Typography>
                <Typography
                    variant="h6"

                >
                    {item?.lastName}
                </Typography>
                <Box></Box>

            </Box> 
            <Box className={classes.box}>
                <Typography
                    variant="h6"
                    className={classes.type}
                >
                    Email
                </Typography>
                <Typography
                    variant="h6"
                >
                    {item?.email}
                </Typography>
                <Box></Box>

            </Box>
        </Box>
    )
}

export default Student
