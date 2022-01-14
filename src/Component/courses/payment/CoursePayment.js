import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { GlobalContext } from "../../../Context/Provider";
import { getOneLecture } from "../../../Context/actions/lesson/lesson";
import CourseDetail from "./CourseDetail";
import { BlockLoading } from "../../../utils/Progress/Linear";
import MessageBox from "../../../utils/Alert";

function CoursePayment() {
  const { id } = useParams();
  const {
    getAlectureDispatch,
    getAlectureState: {
      lecture: { isGettingLecture, lesson, isFetched, isError },
    },
  } = useContext(GlobalContext);
  // console.log(isGettingLecture, lesson, isFetched, isError, error)
  useEffect(() => {
    getOneLecture(id)(getAlectureDispatch);
  }, []);
const subject = lesson?.response
  return (
    <div>
      {isGettingLecture && <BlockLoading />}
      {isError && (
        <MessageBox
          message="Your subjects is not available at the moment "
          severity="error"
        />
      )}
      {isFetched && (
        <div>
         
            <CourseDetail item={subject}  key={subject.id} />
        
        </div>
      )}
    </div>
  );
}

export default CoursePayment;
