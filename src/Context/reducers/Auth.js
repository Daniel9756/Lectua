import {
  REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS, PARTNER_ERROR,
  PARTNER_LOADING,
  PARTNER_SUCCESS, GETPARTNERS_LOADING,
  GETPARTNERS_SUCCESS,
  GETPARTNERS_ERROR,  DELETEPARTNER_LOADING,
  DELETEPARTNER_SUCCESS,
  DELETEPARTNER_ERROR
} from "../actions/ActionTypes";



export const deletepartner = (state, action) => {
  console.log('auth')
  switch (action.type) {
    case DELETEPARTNER_LOADING:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: true,
          error: false,
          isSuccess: false,
          isError: false,
          data: null
        },
      };
    case DELETEPARTNER_SUCCESS:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: false,
          error: false,
          isSuccess: true,
          data: action.payload,
          isError: false,
        },
      };
    case DELETEPARTNER_ERROR:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: false,
          isSuccess: false,
          error: action.payload,
          isError: true,
          data: null
        },
      };
    default:
      return state;
  }
};

export const getpartners = (state, action) => {
  console.log('auth')

  switch (action.type) {
    case GETPARTNERS_LOADING:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: true,
          error: false,
          isSuccess: false,
          isError: false,
          data: null
        },
      };
    case GETPARTNERS_SUCCESS:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: false,
          error: false,
          isSuccess: true,
          data: action.payload,
          isError: false,
        },
      };
    case GETPARTNERS_ERROR:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: false,
          isSuccess: false,
          error: action.payload,
          isError: true,
          data: null
        },
      };
    default:
      return state;
  }
};

export const partner = (state, action) => {
  console.log('auth')

  switch (action.type) {
    case PARTNER_LOADING:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: true,
          error: false,
          isSuccess: false,
          isError: false,
          data: null
        },
      };
    case PARTNER_SUCCESS:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: false,
          error: false,
          isSuccess: true,
          data: action.payload,
          isError: false,
        },
      };
    case PARTNER_ERROR:
      return {
        ...state,
        partner: {
          ...state.partner,
          isLoading: false,
          isSuccess: false,
          error: action.payload,
          isError: true,
          data: null
        },
      };
    default:
      return state;
  }
};


export const auth = (state, action) => {
  console.log('auth')

  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          isCreatingUser: true,
          error: false,
          isAuthenticated: false,
          isError: false,
          user: null
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          isCreatingUser: false,
          error: false,
          isAuthenticated: true,
          user: action.payload,
          isError: false,
        },
      };
    case REGISTER_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          isCreatingUser: false,
          isAuthenticated: false,
          error: action.payload,
          isError: true,
          user: null
        },
      };
    default:
      return state;
  }
};
