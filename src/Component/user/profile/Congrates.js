import React from "react";

import { Box } from "@material-ui/core";
import { GroupButton } from "../../../controls/Button";
function Congrates(props) {
  const { handleNext, handleBack } = props;
  return (
    <div>
      Congrates component
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
  );
}

export default Congrates;
