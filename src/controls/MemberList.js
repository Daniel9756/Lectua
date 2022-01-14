import React from "react";
import {  makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
 
    memberlist: {
        textAlign: "left",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        marginLeft: 40
      },
      paragraph: {
        fontFamily: "Helvetica Neue",
        textTransform: "capitalize",
        fontSize: "1rem",
        opacity: "0.8",
      },
}));

function MemberList(props) {
  const classes = useStyles();
  const { text, icon, } = props;
  return (
    <div className={classes.memberlist}>
   {icon}
    <Typography variant="subtitle1" className={classes.paragraph}>
      {text}
    </Typography>
  </div>
  );
}

export default MemberList;
