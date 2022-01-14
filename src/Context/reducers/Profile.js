import {
  PROFILE_ERROR, PROFILE_LOADING, PROFILE_SUCCESS,
  AWARD_LOADING, AWARD_SUCCESS, AWARD_ERROR, STUDENT_LOADING,
  STUDENT_SUCCESS, STUDENT_ERROR,
  EDITAWARD_LOADING, EDITAWARD_SUCCESS, EDITAWARD_ERROR,
  EDITSTUDENTBIO_LOADING, EDITSTUDENTBIO_SUCCESS, EDITSTUDENTBIO_ERROR,
  EDIT_LOADING, EDIT_SUCCESS, EDIT_ERROR,
} from "../actions/ActionTypes";

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


export const editors = (state, action) => {
  switch (action.type) {
    case EDIT_LOADING:
      return {
        ...state,
        edit: {
          ...state.edit,
          isEditingProfile: true,
          error: false,
          isEdited: false,
          isError: false,
          editor: null
        },
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          isEditingProfile: false,
          error: false,
          isEdited: true,
          isError: false,
          editor: action.payload,
        },
      };
    case EDITAWARD_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          isEditingProfile: false,
          isError: true,
          isEdited: false,
          error: action.payload,
          editor: null
        },
      };
    default:
      return state;
  }
};

export const editedFiles = (state, action) => {
  switch (action.type) {
    case EDITAWARD_LOADING:
      return {
        ...state,
        editAward: {
          ...state.editAward,
          isEditingAwards: true,
          error: false,
          isAwardEdited: false,
          isError: false,
          editedCertificates: null
        },
      };
    case EDITAWARD_SUCCESS:
      return {
        ...state,
        editAward: {
          ...state.editAward,
          isEditingAwards: false,
          error: false,
          isAwardEdited: true,
          isError: false,
          editedCertificates: action.payload,
        },
      };
    case EDIT_ERROR:
      return {
        ...state,
        editAward: {
          ...state.editAward,
          isEditingAwards: false,
          isError: true,
          isAwardEdited: false,
          error: action.payload,
          editedCertificates: null
        },
      };
    default:
      return state;
  }
};

export const editedStudent = (state, action) => {
  switch (action.type) {
    case EDITSTUDENTBIO_LOADING:
      return {
        ...state,
        editstudent: {
          ...state.editstudent,
          isEditingStudent: true,
          error: false,
          isEditEnrolled: false,
          isError: false,
          editscholar: null
        },
      };
    case EDITSTUDENTBIO_SUCCESS:
      return {
        ...state,
        editstudent: {
          ...state.editstudent,
          isEditingStudent: false,
          error: false,
          isEditEnrolled: true,
          isError: false,
          editscholar: action.payload,
        },
      };
    case EDITSTUDENTBIO_ERROR:
      return {
        ...state,
        editstudent: {
          ...state.editstudent,
          isEditingStudent: false,
          isError: true,
          isEditEnrolled: false,
          error: action.payload,
          editscholar: null
        },
      };
    default:
      return state;
  }
};


