import React from "react";
import HeroSwipe from "./HeroSwipe";
import Instructor from "./Instructor";
import Process from "./Process"
import { Box } from "@material-ui/core";
import LectureChart from "./LectureChart";
import CompanyLogo from "./CompanyLogo";
import Footer from "../footer/Footer";
import CourseLinks from "../academics/CourseLinks"
function home() {
  return (
    <Box>
      <HeroSwipe />
      <Process />
      <Instructor />
      <CourseLinks />
      <Box style={{paddingTop:40, marginRight: 40, marginLeft: 40}}>
        <LectureChart />
      </Box>
      <CompanyLogo />
      <Footer />
    </Box>
  );
}

export default home;
