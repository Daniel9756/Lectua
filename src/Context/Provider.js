import React, { createContext, useReducer } from "react";
import AuthInitialState from "./initials/AuthInitialState";
import ProfileInitialState from "./initials/ProfileInitialState";
import AwardInitialState from "./initials/AwardInitialState";
import LoginInitialState from "./initials/LoginInitialState";
import StudentInitialState from "./initials/StudentInitialState";

import auth from "./reducers/Auth";
import { profile, awards, students } from "./reducers/Profile";
import login from "./reducers/Login";


export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, AuthInitialState);
  const [profileState, profileDispatch] = useReducer(profile, ProfileInitialState);
  const [awardState, awardDispatch] = useReducer(awards, AwardInitialState)
  const [loginState, loginDispatch] = useReducer(login, LoginInitialState)
  const [scholarState, studentDispatch] = useReducer(students, StudentInitialState)



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
        studentDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
