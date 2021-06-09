import React from "react";
import PropTypes from "prop-types"
import {  LabelText } from "../../../controls/Input";

function Connection(props) {
  // const classes = useStyles();
  // console.log(context, props)

  const { connect } = props;
  const status = connect ? "Connected" : "Disconnected";

  return (
    <div>
      <LabelText style={{textTransform: "uppercase", margin: `0 80 0 80`}}>You are<strong> {status}</strong> </LabelText>
    </div>
  );
}

export default Connection;

Connection.contextTypes={
   session: PropTypes.any,
   streams: PropTypes.any,
}