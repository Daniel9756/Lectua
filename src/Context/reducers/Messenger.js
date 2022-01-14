
import {
    CONVERSATION_LOADING,
    CONVERSATION_SUCCESS,
    CONVERSATION_ERROR,
    GETUSERCONVERSATION_LOADING, GETUSERCONVERSATION_SUCCESS, GETUSERCONVERSATION_ERROR

} from "../actions/ActionTypes";

// conversation: {
//     isLoading: false,
//     member: null,
//     error: null,
//     isError: false,
//     isAFriend: false
// },


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

