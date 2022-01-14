import axios from 'axios'

import {
    TIMETABLE_LOADING, TIMETABLE_SUCCESS, TIMETABLE_ERROR,
    GETTIMETABLE_LOADING, GETTIMETABLE_SUCCESS, GETTIMETABLE_ERROR,
    DELETEATOPIC_LOADING, DELETEATOPIC_SUCCESS, DELETEATOPIC_ERROR,
    EDITATOPIC_LOADING, EDITATOPIC_SUCCESS, EDITATOPIC_ERROR
} from "../ActionTypes";
const baseUrl = "http://localhost:5500/";

export const addTimetable = (values) => (dispatch) => {
    const token = localStorage.getItem("token");
    console.log(values, "values from timetabe")
    dispatch({
        type: TIMETABLE_LOADING,
    });
    axios
        .post(baseUrl + 'topics/', values, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
        .then((res) =>
            dispatch(
                {
                    type: TIMETABLE_SUCCESS,
                    payload: res.data
                }))
        .catch((err) => dispatch({
            type: TIMETABLE_ERROR,
            error: err.message


        }))
}


export const getTimetable = (id) => (dispatch) => {
    dispatch({
        type: GETTIMETABLE_LOADING,
    });
    axios
        .get(baseUrl + `topics/${id}`)
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


export const getAStudentTable = (id) => (dispatch) => {
    dispatch({
        type: GETTIMETABLE_LOADING,
    });
    axios
        .get(baseUrl + `topics/${id}`)
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


export const deleteATopic = (id) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: DELETEATOPIC_LOADING,
    });
    axios
        .delete(baseUrl + `topics/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) =>
            dispatch({
                type: DELETEATOPIC_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: DELETEATOPIC_ERROR,
            error: err.payload,
        }))
}


export const editATopic = (data) => (dispatch) => {
    const token = localStorage.getItem("token");
    const { values, id, courseid } = data
    const topic = { values, courseid }
    dispatch({
        type: EDITATOPIC_LOADING,
    });
    axios
        .put(baseUrl + `topics/${id}`, topic, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
        .then((res) =>
            dispatch({
                type: EDITATOPIC_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: EDITATOPIC_ERROR,
            error: err.payload,
        }))
}