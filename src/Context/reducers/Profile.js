import { PROFILE_ERROR, PROFILE_LOADING, PROFILE_SUCCESS, AWARD_LOADING, AWARD_SUCCESS, AWARD_ERROR,STUDENT_LOADING,STUDENT_SUCCESS,STUDENT_ERROR } from "../actions/ActionTypes";

export const profile = (state, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        profile: {
          ...state.profile,
          isCreatingProfile: true,
          error: false,
          isProfiled: false,
          isError: false,
          folder: null
        },
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          isCreatingProfile: false,
          error: false,
          isError: false,
          isProfiled: true,
          folder: action.payload,
        },
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          isCreatingProfile: false,
          isError: true,
          isProfiled: false,
          error: action.payload,
          folder: null

        },
      };
    default:
      return state;
  }
};

export const awards = (state, action) => {
  switch (action.type) {
    case AWARD_LOADING:
      return {
        ...state,
        award: {
          ...state.award,
          isCreatingAward: true,
          isError: false,
          error: false,
          isCertified: false,
          certificates: null
        },
      };
    case AWARD_SUCCESS:
      return {
        ...state,
        award: {
          ...state.award,
          isCreatingAward: false,
          error: false,
          isCertified: true,
          isError: false,
          certificates: action.payload,
        },
      };
    case AWARD_ERROR:
      return {
        ...state,
        award: {
          ...state.award,
          isCreatingAward: false,
          isCertified: false,
          isError: true,
          error: action.payload,
          certificates: null

        },
      };
    default:
      return state;
  }
};
 

//  Create Student reducers

export const students = (state, action) => {
  switch (action.type) {
    case STUDENT_LOADING:
      return {
        ...state,
        student: {
          ...state.student,
          isCreatingStudent: true,
          error: false,
          isEnrolled: false,
          isError: false,
          scholar: null
        },
      };
    case STUDENT_SUCCESS:
      return {
        ...state,
        student: {
          ...state.student,
          isCreatingStudent: false,
          error: false,
          isEnrolled: true,
          isError: false,
          scholar: action.payload,
        },
      };
    case STUDENT_ERROR:
      console.log(action, "error action");
      return {
        ...state,
        student: {
          ...state.student,
          isCreatingStudent: false,
          isError: true,
          isEnrolled: false,
          error: action.payload,
          scholar: null

        },
      };
    default:
      return state;
  }
};