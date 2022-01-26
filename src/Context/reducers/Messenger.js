
import {
    CONVERSATION_LOADING,
    CONVERSATION_SUCCESS,
    CONVERSATION_ERROR,
    GETUSERCONVERSATION_LOADING, GETUSERCONVERSATION_SUCCESS, GETUSERCONVERSATION_ERROR,
    MESSAGE_LOADING,
    MESSAGE_SUCCESS,
    MESSAGE_ERROR,
    FETCHMESSAGE_LOADING,
    FETCHMESSAGE_SUCCESS,
    FETCHMESSAGE_ERROR

} from "../actions/ActionTypes";

// message: {
//   isLoading: false,
//   data: null,
//   error: null,
//   isError: false,
//   isSend: false
// },


export const fetchChat = (state, action) => {
  switch (action.type) {
    case FETCHMESSAGE_LOADING:
      return {
        ...state,
        fetchmessage: {
          ...state.fetchmessage,
          isLoading: true,
          error: false,
          isSend: false,
          isError: false,
          data: null
        },
      };
      case FETCHMESSAGE_SUCCESS:
        return {
          ...state,
          fetchmessage: {
            ...state.fetchmessage,
            isLoading: false,
            error: false,
            isSend: true,
            data: action.payload,
            isError: false,
          },
        }; 
      case FETCHMESSAGE_ERROR:
        return {
          ...state,
          fetchmessage: {
            ...state.fetchmessage,
            isLoading: false,
            isSend: false,
            error: action.payload,
            isError: true,
            data: null

          },
        };
    default:
      return state;
  }
};

export const addChat = (state, action) => {
  switch (action.type) {
    case MESSAGE_LOADING:
      return {
        ...state,
        message: {
          ...state.message,
          isLoading: true,
          error: false,
          isSend: false,
          isError: false,
          data: null
        },
      };
      case MESSAGE_SUCCESS:
        return {
          ...state,
          message: {
            ...state.message,
            isLoading: false,
            error: false,
            isSend: true,
            data: action.payload,
            isError: false,
          },
        }; 
      case MESSAGE_ERROR:
        return {
          ...state,
          message: {
            ...state.message,
            isLoading: false,
            isSend: false,
            error: action.payload,
            isError: true,
            data: null

          },
        };
    default:
      return state;
  }
};












export const getFriends = (state, action) => {
  switch (action.type) {
    case GETUSERCONVERSATION_LOADING:
      return {
        ...state,
        conversation: {
          ...state.conversation,
          isLoading: true,
          error: false,
          isAFriend: false,
          isError: false,
          member: null
        },
      };
      case GETUSERCONVERSATION_SUCCESS:
        return {
          ...state,
          conversation: {
            ...state.conversation,
            isLoading: false,
            error: false,
            isAFriend: true,
            member: action.payload,
            isError: false,
          },
        }; 
      case GETUSERCONVERSATION_ERROR:
        return {
          ...state,
          conversation: {
            ...state.conversation,
            isLoading: false,
            isAFriend: false,
            error: action.payload,
            isError: true,
            member: null

          },
        };
    default:
      return state;
  }
};

export const friend = (state, action) => {
  switch (action.type) {
    case CONVERSATION_LOADING:
      return {
        ...state,
        conversation: {
          ...state.conversation,
          isLoading: true,
          error: false,
          isAFriend: false,
          isError: false,
          member: null
        },
      };
      case CONVERSATION_SUCCESS:
        return {
          ...state,
          conversation: {
            ...state.conversation,
            isLoading: false,
            error: false,
            isAFriend: true,
            member: action.payload,
            isError: false,
          },
        }; 
      case CONVERSATION_ERROR:
        return {
          ...state,
          conversation: {
            ...state.conversation,
            isLoading: false,
            isAFriend: false,
            error: action.payload,
            isError: true,
            member: null

          },
        };
    default:
      return state;
  }
};


