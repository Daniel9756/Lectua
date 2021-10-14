import axios from 'axios'

import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    PARTNERLOGIN_LOADING,
    PARTNERLOGIN_SUCCESS,
    PARTNERLOGIN_ERROR
} from "../ActionTypes";


const baseUrl = "http://localhost:5500/users/";



export const loginUser = (values) => (dispatch) => {
    // console.log(values, "values from register")
    dispatch({
        type: LOGIN_LOADING,
    });
    axios
        .post(baseUrl + 'login/', values)
        .then((res) =>
            dispatch(
                {
                    type: LOGIN_SUCCESS,
                    payload: res.data
                }))
        .catch((err) => dispatch({
            type: LOGIN_ERROR,
            error: err.message


        }))
}



export const loginPartner = (values) => (dispatch) => {
    // console.log(values, "values from contex")
    dispatch({
        type: PARTNERLOGIN_LOADING,
    });
    axios
        .post(baseUrl + 'partner/signin/', values)
        .then((res) =>
            dispatch({
                type: PARTNERLOGIN_SUCCESS, 
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: PARTNERLOGIN_ERROR,
            error: err.message
        }))
}