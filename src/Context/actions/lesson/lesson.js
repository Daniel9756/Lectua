import axios from 'axios'
import {
    LESSON_LOADING,
    LESSON_SUCCESS,
    LESSON_ERROR, GETLECTURESBYAUSER_LOADING, GETLECTURESBYAUSER_SUCCESS, GETLECTURESBYAUSER_ERROR,
    DELETEASUBJECT_LOADING, DELETEASUBJECT_SUCCESS, DELETEASUBJECT_ERROR,
    EDITASUBJECT_LOADING, EDITASUBJECT_SUCCESS, EDITASUBJECT_ERROR,
    GETLECTURES_LOADING, GETLECTURES_SUCCESS, GETLECTURES_ERROR,
    GETONELECTURE_LOADING, GETONELECTURE_SUCCESS, GETONELECTURE_ERROR,
  
} from "../ActionTypes";

const baseUrl = "http://localhost:5500/";





export const getOneLecture = (id) => (dispatch) => {
    dispatch({
        type: GETONELECTURE_LOADING,
    });
    axios
        .get(baseUrl + `lectures/courses/${id}`)
        .then((res) =>
            dispatch({
                type: GETONELECTURE_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: GETONELECTURE_ERROR,
            error: err.payload,
        }))
}


export const addLecture = (values) => (dispatch) => {
    console.log(values, "vaues frm cntext")
    const token = localStorage.getItem("token");
    dispatch({
        type: LESSON_LOADING,
    });
    axios
        .post(baseUrl + 'lectures/', values, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
        .then((res) =>
            dispatch(
                {
                    type: LESSON_SUCCESS,
                    payload: res.data
                }))
        .catch((err) => dispatch({
            type: LESSON_ERROR,
            error: err.message


        }))
}

export const getLectures = () => (dispatch) => {
    dispatch({
        type: GETLECTURES_LOADING,
    });
    axios
        .get(baseUrl + 'lectures')
        .then((res) =>
            dispatch({
                type: GETLECTURES_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: GETLECTURES_ERROR,
            error: err.payload,
        }))
}

export const getLecturesByATeacher = (id) => (dispatch) => {
    dispatch({
        type: GETLECTURESBYAUSER_LOADING,
    });
    axios
        .get(baseUrl + `lectures/${id}`)
        .then((res) =>
            dispatch({
                type: GETLECTURESBYAUSER_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: GETLECTURESBYAUSER_ERROR,
            error: err.payload,
        }))
}


export const deleteASubject = (id) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: DELETEASUBJECT_LOADING,
    });
    axios
        .delete(baseUrl + `lectures/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) =>
            dispatch({
                type: DELETEASUBJECT_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: DELETEASUBJECT_ERROR,
            error: err.payload,
        }))
}



export const editASubject = (data) => (dispatch) => {
    const token = localStorage.getItem("token");
    const { values, id } = data
    dispatch({
        type: EDITASUBJECT_LOADING,
    });
    axios
        .put(baseUrl + `lectures/${id}`, values, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
        .then((res) =>
            dispatch({
                type: EDITASUBJECT_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: EDITASUBJECT_ERROR,
            error: err.payload,
        }))
}