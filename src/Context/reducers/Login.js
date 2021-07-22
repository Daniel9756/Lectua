import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/ActionTypes";

const login = (state, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        login: {
          ...state.login,
          isLoggin: true,
          error: false,
          isPemmitted: false,
          isError: false,
          logger: null
        },
      };
      case LOGIN_SUCCESS:
        return {
          ...state,
          login: {
            ...state.login,
            isLoggin: false,
            error: false,
            isPemmitted: true,
            isError: false,
            logger: action.payload,
          },
        }; 
      case LOGIN_ERROR:
        return {
          ...state,
          login: {
            ...state.login,
            isLoggin: false,
            isPemmitted: false,
            error: action.payload,
            isError: true,
            logger: null

          },
        };
    default:
      return state;
  }
};

export default login;
