import React, { useState } from "react";
import PropTypes from "prop-types"
import { CustomInput, InputLabel } from "../../controls/Input";

function Connection(props, context) {
  // const classes = useStyles();
  // console.log(context, props)

  const { connect, session, stream } = props;
  const status = connect ? "Connected" : "Disconnected";

  return (
    <div>
      <InputLabel style={{textTransform: "uppercase", margin: `0 80 0 80`}}>You are<strong> {status}</strong> </InputLabel>
    </div>
  );
}

export default Connection;

Connection.contextTypes={
   session: PropTypes.any,
   streams: PropTypes.any,
}