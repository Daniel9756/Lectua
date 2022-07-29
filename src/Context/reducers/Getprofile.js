import { GETPROFILE_LOADING, GETPROFILE_SUCCESS, GETPROFILE_ERROR } from "../actions/ActionTypes"

export const fetchProfile = (state, action) => {
  console.log('auth')

    switch (action.type) {
      case GETPROFILE_LOADING:
        return {
          ...state,
          getprofile: {
            ...state.getprofile,
            isGettingprofile: true,
            error: false,
            isFetched: false,
            isError: false,
            folder: null
          },
        };
      case GETPROFILE_SUCCESS:
        return {
          ...state,
          getprofile: {
            ...state.getprofile,
            isGettingprofile: false,
            error: false,
            isFetched: true,
            isError: false,
            folder: action.payload,
          },
        };
      case GETPROFILE_ERROR:
        return {
          ...state,
          getprofile: {
            ...state.getprofile,
            isGettingprofile: false,
            isError: true,
            isFetched: false,
            error: action.payload,
            folder: null
          },
        };
      default:
        return state;
    }
  };