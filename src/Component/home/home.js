import React from "react";
import HeroSwipe from "./HeroSwipe";
import HowIt from "./HowIt";
import Instructor from "./Instructor";

import { Box, Container } from "@material-ui/core";
import LessonTable from "../Lession/Table";

function home() {
  return (
    <Box>
      <HeroSwipe />
      <HowIt />
      <Instructor />
      <Container style={{paddingTop:40}}>
        <LessonTable />
      </Container>
    </Box>
  );
}

export default home;
