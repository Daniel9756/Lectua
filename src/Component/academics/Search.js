import React from 'react'
import { makeStyles,  Toolbar, InputAdornment } from "@material-ui/core";
import { CustomInput,  } from "../../controls/Input";
import { GroupButton } from "../../controls/Button";
import { GoDiffAdded,  } from "react-icons/go";

const useStyles = makeStyles((theme) => ({
    agentCont: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        paddingBottom: theme.spacing(4),
      
    },
    serchInput: {
        flexGrow: 1,
    },
    // newButton: {
    //     position: "absolute",

    // },

}));



function Search() {
    const classes = useStyles();

    return (

        <Toolbar  style={{ width: "60%", marginTop: 20}} >
            <CustomInput
                placeholder="Search"
                className={classes.serchInput}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <GoDiffAdded />
                        </InputAdornment>
                    )
                }}

            />
            <GroupButton
                text="New Agent"

                style={{ disableRipple: true, width: 120, color: "#DA7B93", borderRadius: 8, height: 50, backgroundColor: "#2f4454",  }}
              
                startIcon={<GoDiffAdded />}
            // onClick={() => {
            //   setOpenPopUp(true);
            //   setRecordsForEdit(null);
            // }}
            >Search</GroupButton>
        </Toolbar>


    )
}

export default Search
