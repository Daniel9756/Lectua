import React from "react";
import HeroSwipe from "./HeroSwipe";
import HowIt from "./HowIt";
import Instructor from "./Instructor";
import Process from "./Process"
import { Box, Container } from "@material-ui/core";
import LectureChart from "./LectureChart";

function home() {
  return (
    <Box>
      <HeroSwipe />
      <Process />
      <Instructor />
      <Box style={{paddingTop:40, marginRight: 40, marginLeft: 40}}>
        <LectureChart />
      </Box>
    </Box>
  );
}

export default home;
