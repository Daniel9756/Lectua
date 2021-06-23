import React, { createContext, useReducer } from "react";
import AuthInitialState from "./initials/AuthInitialState";
import auth from "./reducers/Auth";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, AuthInitialState);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
      
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
