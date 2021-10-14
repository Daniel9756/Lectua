import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    box: {
        display: "flex",
        justifyContent: "space-between",
        margin: 8

    },
    type: {
        opacity: 0.8, fontFamily: "serif"
    }
});
function StudentInfo({ item, id }) {
    const regdate = new Date(parseInt(item?.createdAt)).toDateString()
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.box}>
                <Typography
                    variant="h6"
                    className={classes.type}
                >
                    State
                </Typography>
                <Typography
                    variant="h6"
                >
                    {item?.stuState}
                </Typography>
                <Box></Box>

            </Box>
            <Box className={classes.box}>
                <Typography
                    variant="h6"
                    className={classes.type}
                >
                    Country
                </Typography>
                <Typography
                    variant="h6"

                >
                    {item?.stuCountry}
                </Typography>
                <Box></Box>

            </Box>
            <Box className={classes.box}>
                <Typography
                    variant="h6"
                    className={classes.type}
                >
                    Specialization
                </Typography>
                <Typography
                    variant="h6"
                >
                    {item?.specialty}
                </Typography>
                <Box></Box>

            </Box>
            <Box className={classes.box}>
                <Typography
                    variant="h6"
                    className={classes.type}
                >
                    Registration Date
                </Typography>
                <Typography
                    variant="h6"
                >
                    {regdate}
                </Typography>
                <Box></Box>

            </Box>
        </Box>
    )
}

export default StudentInfo
