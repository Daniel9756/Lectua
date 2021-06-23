import React from "react";
import { Box } from "@material-ui/core";

import { GroupButton } from "../../../controls/Button";
import { GoDiffAdded } from "react-icons/go";

function Sidebar(props) {
  const { setContent } = props;
  return (
    <Box
      style={{
        marginRight: 20,
        padding: 10,
        marginTop: 40,
      }}
    >
      <Box
        style={{
          height: 200,
        }}
      >
        <GroupButton onClick={() => setContent("General")}>
          General Profile
        </GroupButton>
        <GroupButton onClick={() => setContent("MyTable")}>
          My Lecture Table
        </GroupButton>
        <GroupButton onClick={() => setContent("Calendary")}>
          Calendary
        </GroupButton>
      </Box>
      <Box
        style={{
          height: 40,
          borderRadius: 8,
          background: "#2f4454",
          color: "#DA7B93",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 6,
        }}
      >
        <Box>USER</Box>
        <GoDiffAdded
          style={{
            fontSize: 20,
          }}
        />
      </Box>
    </Box>
  );
}

export default Sidebar;
