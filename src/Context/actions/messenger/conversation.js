import axios from 'axios'

import {
    CONVERSATION_LOADING,
    CONVERSATION_SUCCESS,
    CONVERSATION_ERROR,
    GETUSERCONVERSATION_LOADING, GETUSERCONVERSATION_SUCCESS, GETUSERCONVERSATION_ERROR
} from "../ActionTypes";

const baseUrl = "http://localhost:5500/conversations/";

export const getUserConversations = (id) => (dispatch) => {
    const token = localStorage.getItem("token");

    dispatch({
        type: GETUSERCONVERSATION_LOADING,
    });
    axios
        .get(baseUrl + id, {
            headers: {
                Authorization: `Bearer ${token}`,
              
            },
        })
        .then((res) =>
            dispatch({
                type: GETUSERCONVERSATION_SUCCESS, 
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: GETUSERCONVERSATION_ERROR,
            error: err.message


        }))
}

export const addConversations = (ids) => (dispatch) => {
    console.log(ids, "values from register")
    dispatch({
        type: CONVERSATION_LOADING,
    });
    axios
        .post(baseUrl, ids)
        .then((res) =>
            dispatch(                {
                    type: CONVERSATION_SUCCESS,
                    payload: res.data
                }))
        .catch((err) =>
            dispatch({
                type: CONVERSATION_ERROR,
                error: err


            })
        )
}

