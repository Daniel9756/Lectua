import React, { useContext, useState, useEffect } from "react";
import { enrolLecture } from "../../../Context/actions/enroll/lecture";
import { GlobalContext } from "../../../Context/Provider";
import { CircularProgress } from "@material-ui/core";

import { CustomButton } from "../../../controls/Button";
import PopUp from "../../../utils/PopUp";

import { useHistory } from "react-router-dom";

export const FreeClass = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const { userId, courseId, subject, email } = props;
  const {
    enrollAlectureDispatch,
    enrollAlectureState: {
      enrollecture: { isEnrolling, enrolled, isEnroll, isError, error },
    },
  } = useContext(GlobalContext);

  const joinClass = () => {
      console.log(userId, courseId, subject, email, "email")
    const values = {
      email,
      userId,
      courseId,
      subject,
    };
    enrolLecture(values)(enrollAlectureDispatch);
  };
  console.log(isEnrolling, enrolled, isEnroll, isError, error);

  useEffect(() => {
    setIsOpen(true);
  }, [enrolled]);

  return (
    <>
      <div>
        <CustomButton
          style={{
            marginTop: 18,
            borderRadius: 8,
            color: "#DA7B93",
            minWidth: 250,
          }}
          onClick={joinClass}
        >
          {isEnrolling ? <CircularProgress /> : "Join the Free Class"}
        </CustomButton>
      </div>
      <PopUp
        openPopUp={isOpen}
        setOpenPopUp={setIsOpen}
        title={`${enrolled?.message}`}
      >
        <CustomButton
          style={{
            marginTop: 18,
            borderRadius: 8,
            color: "#DA7B93",
            width: 250,
          }}
          onClick={() => history.goBack()}
        >
          OK
        </CustomButton>
      </PopUp>
    </>
  );
};
