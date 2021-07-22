import React from "react";
import HeroSwipe from "./HeroSwipe";
import Instructor from "./Instructor";
import Process from "./Process";
import { Box } from "@material-ui/core";
import CompanyLogo from "./CompanyLogo";
import Footer from "../footer/Footer";
import CourseLinks from "../academics/CourseLinks";
import Why from "./Why";

function home() {
  return (
    <Box>
      <HeroSwipe />
      <Why />
      <Process />
      <Instructor />
      <CourseLinks />
      <CompanyLogo />
      <Footer />
    </Box>
  );
}

export default home;
