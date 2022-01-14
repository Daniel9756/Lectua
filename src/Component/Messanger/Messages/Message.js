import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex", flexDirection: "column", maxWidth: "70%", margin: 4,
    },

    text: {
        backgroundColor: "#376e6f", color: "#FBFFF1", padding: 4, borderRadius: 4
    },
    time: {
        display: "flex", justifyContent: "space-between"
    },
    name: {
        color: "#376e6f", fontWeight: "bold"
    },
    open: {
        opacity: 0.4, fontSize: 66
    },
    "@media (min-width: 960px)": {


    },
    "@media (max-width: 960px)": {

        root: {
            display: "flex", flexDirection: "column", margin: 2
        },
    },
    "@media (max-width: 440px)": {

    },
}));
function Message({ friend, tutor, leaner }) {
    const classes = useStyles();
    const { id, senderid, receiverid } = friend

    console.log( tutor, )


    return (<Box style={{ overflowY: "scroll", position: 'relative' }}>
        {receiverid ? <div className={classes.root}>
            <em className={classes.text}>

                {receiverid}
            </em>

            <p className={classes.time}>
                <small className={classes.name}>2121-12-12</small>
                <em className={classes.name}>Eze Cornelius</em>

            </p>

        </div> : <p className={classes.open}>
            Open Chat to send message

        </p>}



    </Box>
    )
}

export default Message
