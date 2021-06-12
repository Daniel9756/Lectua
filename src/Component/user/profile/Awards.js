import React from 'react'

import {  Box } from "@material-ui/core";
import { GroupButton } from "../../../controls/Button";

function Awards(props) {
  const { handleNext, handleBack } = props;

    return (
        <div>
            This ia award components
            <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10
        }}
      >
        <GroupButton
          onClick={handleBack}
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
        <GroupButton
          onClick={handleNext}
          style={{
            width: 70,
            background: "#376e6f",
          
            height: 40,
            color: "#DA7B93",
            margin: 10,
            borderRadius: 10,
          }}
        >
          Next
        </GroupButton>
      </Box>
        </div>
    )
}

export default Awards
