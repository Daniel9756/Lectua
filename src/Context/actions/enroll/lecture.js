import axios from 'axios'
import {

    ENROLLECTURE_LOADING, ENROLLECTURE_SUCCESS, ENROLLECTURE_ERROR,
    MYENROLLECTURE_LOADING, MYENROLLECTURE_SUCCESS, MYENROLLECTURE_ERROR

} from "../ActionTypes";

const baseUrl = "http://localhost:5500/enrolls/";


export const enrolLecture = (data) => (dispatch) => {
    console.log(data)
    const token = localStorage.getItem("token");
    dispatch({
        type: ENROLLECTURE_LOADING,
    });
    axios
        .post(baseUrl, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
        .then((res) =>
            dispatch({
                type: ENROLLECTURE_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: ENROLLECTURE_ERROR,
            error: err.payload,
        }))
}



export const getMyEnrolled = (id) => (dispatch) => {
    console.log(id)
    const token = localStorage.getItem("token");
    dispatch({
        type: MYENROLLECTURE_LOADING,
    });
    axios
        .get(baseUrl + `${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) =>
            dispatch({
                type: MYENROLLECTURE_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: MYENROLLECTURE_ERROR,
            error: err.payload,
        }))
}