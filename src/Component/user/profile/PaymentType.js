import React from "react";

import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { GroupButton } from "../../../controls/Button";
// import { GroupButton } from "../../../controls/Button";

function PaymentType(props) {
  const history = useHistory();

  console.log(props);
  return (
    <div>
      <Box>Card</Box>
      <Box>Bank Transfer</Box>
      <Box>USSD</Box>
      <GroupButton
        onClick={() => history.goBack()}
        style={{
          width: 70,
          background: "#376e6f",

          height: 40,
          color: "#DA7B93",
          margin: 10,
          borderRadius: 10,
        }}
      >
        Back
      </GroupButton>
    </div>
  );
}

export default PaymentType;
