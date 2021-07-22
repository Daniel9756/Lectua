import axios from 'axios'

import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "../ActionTypes";


const baseUrl = "http://localhost:5500/users/login";



export const loginUser = (values) => (dispatch) => {
    const token = localStorage.getItem("token");
    console.log(values, "values from register")
    dispatch({
        type: LOGIN_LOADING,
    });
    axios
        .post(baseUrl, values)
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



// export const loginUser = (values) => (dispatch) => {
//     console.log(values, "values from register")
//     dispatch({
//         type: LOGIN_LOADING,
//     });
//     axios
//         .post(baseUrl, values, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type": "appilication/json",
//             },
//         })
//         .then((res) =>
//             dispatch({
//                 type: LOGIN_SUCCESS, payload: res.data
//             }))
//         .catch((err) => dispatch({
//             type: LOGIN_ERROR,
//             error: err.message


//         }))
// }