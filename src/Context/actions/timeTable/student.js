import axios from 'axios'

import {
  
    GETTIMETABLE_LOADING, GETTIMETABLE_SUCCESS, GETTIMETABLE_ERROR,
   
} from "../ActionTypes";
const baseUrl = "http://localhost:5500/";

export const getAStudentTimeTable = (id) => (dispatch) => {
    dispatch({
        type: GETTIMETABLE_LOADING,
    });
    axios
        .get(baseUrl + `topics/student/${id}`)
        .then((res) =>
            dispatch({
                type: GETTIMETABLE_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: GETTIMETABLE_ERROR,
            error: err.payload,
        }))
}