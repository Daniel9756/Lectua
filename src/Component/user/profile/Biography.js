import { Box,Container } from '@material-ui/core';
import React from 'react'

import { GroupButton } from "../../../controls/Button";
function Biography(props) {
  const { handleNext} = props;

    return (
        <Box>
            <Container>

            THis biography Conponent
        
       
          Back
      
        <GroupButton
          onClick={handleNext}
          style={{
            width: 70,
            background: "#376e6f",
            float: "right",
            height: 40,
            color: "#DA7B93",
            margin: 10,
            borderRadius: 10,
          }}
          >
          Next
        </GroupButton>
            </Container>
        </Box>
    )
}

export default Biography
