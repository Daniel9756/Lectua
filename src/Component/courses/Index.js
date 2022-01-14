import React from 'react'
import { BlockLoading } from "../../utils/Progress/Linear";
import MessageBox from "../../utils/Alert"
import AllData from './all/AllData';
import {
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,

        marginBottom: 100,
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
function Design(props) {
 
    const classes = useStyles();

 
    const {data: category, isLoading, isError, isSuccess } = props
    console.log(category, 'category')
    return (
        <div className={classes.root}>
        {isLoading && (<BlockLoading />)}
        {isError && (<MessageBox message="Your subjects is not available at the moment " severity="error" />)}
        {isSuccess && category?.data < 1 && (<MessageBox message="Your subjects is not available at the moment " severity="error" />)}
        {isSuccess && (
            <div className={classes.lists}>
                {category?.data.map((item) => (
                    <AllData item={item} id={item.id} key={item.id} />

                ))}
            </div>
        )}

    </div>
    )
}

export default Design
