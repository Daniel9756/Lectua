import React, { useContext, useEffect } from 'react'
import { GlobalContext } from "../../../Context/Provider";
import { getLectures } from "../../../Context/actions/lesson/lesson"
import AllData from './AllData';
import { BlockLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert"
import {
    makeStyles
} from "@material-ui/core";


const useStyles = makeStyles(() => ({
    root: {   
        marginTop: 100,
       
        marginBottom: 60,
    },
    lists: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "15px",
    },
    "@media (max-width: 960px)": {

    },
    "@media (max-width: 440px)": {
        lists: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            overflow: "hidden"
        },
    },
}));
function All() {
    const classes = useStyles();

    const {
        getlecturesDispatch,
        getlecturesState: {
            lectures: {
                isGettingLectures, lessons, isFetched, isError, error },
        },


    } = useContext(GlobalContext);
    console.log(isGettingLectures, lessons, isFetched, isError, error)


    useEffect(() => {
        getLectures()(getlecturesDispatch)
    }, [getlecturesDispatch]);

    return (
        <div className={classes.root}>
            {isGettingLectures && (<BlockLoading />)}
            {isError && (<MessageBox message="Your subjects is not available at the moment " severity="error" />)}
            {isFetched && (
                <div className={classes.lists}>
                    {lessons.data.map((item) => (
                        <AllData item={item} id={item.id} key={item.id} />

                    ))}
                </div>
            )}

        </div>
    )
}

export default All
