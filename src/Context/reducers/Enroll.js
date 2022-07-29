import {
   
    ENROLLECTURE_LOADING, ENROLLECTURE_SUCCESS, ENROLLECTURE_ERROR,
    MYENROLLECTURE_LOADING, MYENROLLECTURE_SUCCESS, MYENROLLECTURE_ERROR

  
} from "../actions/ActionTypes";


export const enrollAlecture = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case ENROLLECTURE_LOADING:
            return {
                ...state,
                enrollecture: {
                    ...state.enrollecture,
                    isEnrolling: true,
                    error: false,
                    isEnroll: false,
                    isError: false,
                    enrolled: null
                },
            };
        case ENROLLECTURE_SUCCESS:
            return {
                ...state,
                enrollecture: {
                    ...state.enrollecture,
                    isEnrolling: false,
                    error: false,
                    isEnroll: true,
                    isError: false,
                    enrolled: action.payload,
                },
            };
        case ENROLLECTURE_ERROR:
            return {
                ...state,
                enrollecture: {
                    ...state.enrollecture,
                    isEnrolling: false,
                    isEnroll: false,
                    error: action.payload,
                    isError: true,
                    enrolled: null

                },
            };
        default:
            return state;
    }
};



export const myEnrolledlectures = (state, action) => {
  console.log('auth')

    switch (action.type) {
        case MYENROLLECTURE_LOADING:
            return {
                ...state,
                myenrollecture: {
                    ...state.myenrollecture,
                    isEnrolling: true,
                    error: false,
                    isFetched: false,
                    isError: false,
                    myenrolled: null
                },
            };
        case MYENROLLECTURE_SUCCESS:
            return {
                ...state,
                myenrollecture: {
                    ...state.myenrollecture,
                    isEnrolling: false,
                    error: false,
                    isFetched: true,
                    isError: false,
                    myenrolled: action.payload,
                },
            };
        case MYENROLLECTURE_ERROR:
            return {
                ...state,
                myenrollecture: {
                    ...state.myenrollecture,
                    isEnrolling: false,
                    isFetched: false,
                    error: action.payload,
                    isError: true,
                    myenrolled: null

                },
            };
        default:
            return state;
    }
};
