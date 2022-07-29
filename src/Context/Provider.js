import React, { createContext, useReducer } from "react";
import AuthInitialState from "./initials/AuthInitialState";
import ProfileInitialState from "./initials/ProfileInitialState";
import LoginInitialState from "./initials/LoginInitialState";
import StudentInitialState from "./initials/StudentInitialState";
import LectureInitialState from "./initials/LectureInitialState";
import EnrolInitialState from "./initials/EnrolInitialState";
import { auth, partner, getpartners, deletepartner } from "./reducers/Auth";
import {
  profile,
  awards,
  students,
  editors,
  editedFiles,
  editedStudent,
} from "./reducers/Profile";
import { fetchProfile } from "./reducers/Getprofile";
import { login, loginpartner } from "./reducers/Login";
import {
  lectures,
  teacherLectures,
  deleteSubject,
  editSubject,
  getlectures,
  getAlecture,
} from "./reducers/Lecture";
import { enrollAlecture, myEnrolledlectures } from "./reducers/Enroll";
import {
  tables,
  timetable,
  deleteTopic,
  editedTopic,
  studenttimetable,
} from "./reducers/TimeTable";
import { friend, getFriends, addChat, fetchChat, deletedChat } from "./reducers/Messenger";
import MessageInitialState from "./initials/MessageInitialState";

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, AuthInitialState);
  const [partnerState, partnerDispatch] = useReducer(partner, AuthInitialState);
  const [getpartnerState, getpartnerDispatch] = useReducer(
    getpartners,
    AuthInitialState
  );
  const [deletepartnerState, deletepartnerDispatch] = useReducer(
    deletepartner,
    AuthInitialState
  );
  const [profileState, profileDispatch] = useReducer(
    profile,
    ProfileInitialState
  );
  const [awardState, awardDispatch] = useReducer(awards, ProfileInitialState);
  const [loginState, loginDispatch] = useReducer(login, LoginInitialState);
  const [loginpartnerState, loginpartnerDispatch] = useReducer(
    loginpartner,
    LoginInitialState
  );
  const [scholarState, studentDispatch] = useReducer(
    students,
    StudentInitialState
  );
  const [editState, editDispatch] = useReducer(editors, ProfileInitialState);
  const [editAwardState, editAwardDispatch] = useReducer(
    editedFiles,
    ProfileInitialState
  );
  const [editStudentState, editStudentDispatch] = useReducer(
    editedStudent,
    ProfileInitialState
  );
  const [lectureState, lectureDispatch] = useReducer(
    lectures,
    LectureInitialState
  );
  const [topicState, topicDispatch] = useReducer(tables, LectureInitialState);
  const [deleteSubjectState, deleteSubjectDispatch] = useReducer(
    deleteSubject,
    LectureInitialState
  );
  const [deleteTopicState, deleteTopicDispatch] = useReducer(
    deleteTopic,
    LectureInitialState
  );
  const [editedTopicState, editedTopicDispatch] = useReducer(
    editedTopic,
    LectureInitialState
  );
  const [getlecturesState, getlecturesDispatch] = useReducer(
    getlectures,
    LectureInitialState
  );
  const [getAlectureState, getAlectureDispatch] = useReducer(
    getAlecture,
    LectureInitialState
  );
  const [editSubjectState, editSubjectDispatch] = useReducer(
    editSubject,
    LectureInitialState
  );
  const [enrollAlectureState, enrollAlectureDispatch] = useReducer(
    enrollAlecture,
    EnrolInitialState
  );
  const [myEnrolledlecturesState, myEnrolledlecturesDispatch] = useReducer(
    myEnrolledlectures,
    EnrolInitialState
  );
  const [timetableState, timetableDispatch] = useReducer(
    timetable,
    LectureInitialState
  );
  const [teacherLectureState, teacherLectureDispatch] = useReducer(
    teacherLectures,
    LectureInitialState
  );
  const [getprofileState, getprofileDispatch] = useReducer(
    fetchProfile,
    ProfileInitialState
  );
  const [addfriendState, addfriendDispatch] = useReducer(
    friend,
    MessageInitialState
  );
  const [getFriendsState, getFriendsDispatch] = useReducer(
    getFriends,
    MessageInitialState
  );
  const [addChatState, addChatDispatch] = useReducer(
    addChat,
    MessageInitialState
  );
  const [fetchChatState, fetchChatDispatch] = useReducer(
    fetchChat,
    MessageInitialState
  );
  const [deleteChatState, deleteChatDispatch] = useReducer(
    deletedChat,
    MessageInitialState
  );

  const [getStudentTableState, getStudentTableDispatch] = useReducer(
    studenttimetable,
    EnrolInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        profileState,
        profileDispatch,
        awardState,
        awardDispatch,
        loginState,
        loginDispatch,
        scholarState,
        studentDispatch,
        editState,
        editDispatch,
        editAwardState,
        editAwardDispatch,
        editStudentState,
        editStudentDispatch,
        lectureState,
        lectureDispatch,
        getprofileState,
        getprofileDispatch,
        teacherLectureState,
        teacherLectureDispatch,
        topicState,
        topicDispatch,
        timetableState,
        timetableDispatch,
        deleteSubjectState,
        deleteSubjectDispatch,
        editSubjectState,
        editSubjectDispatch,
        deleteTopicState,
        deleteTopicDispatch,
        editedTopicState,
        editedTopicDispatch,
        getlecturesState,
        getlecturesDispatch,
        getAlectureState,
        getAlectureDispatch,
        enrollAlectureState,
        enrollAlectureDispatch,
        myEnrolledlecturesState,
        myEnrolledlecturesDispatch,
        addfriendState,
        addfriendDispatch,
        partnerState,
        partnerDispatch,
        getpartnerState,
        getpartnerDispatch,
        loginpartnerState,
        loginpartnerDispatch,
        deletepartnerState,
        deletepartnerDispatch,
        getFriendsState,
        getFriendsDispatch,
        getStudentTableState,
        getStudentTableDispatch,
        addChatDispatch,
        addChatState,
        fetchChatState,
        fetchChatDispatch,
        deleteChatState,
         deleteChatDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
