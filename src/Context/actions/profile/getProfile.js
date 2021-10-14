import { GETPROFILE_LOADING, GETPROFILE_SUCCESS, GETPROFILE_ERROR } from "../ActionTypes"
import axios from 'axios'

const baseUrl = "http://localhost:5500/profile/"

export const getOneProfile = (id) => (dispatch) => {    
    dispatch({
        type: GETPROFILE_LOADING,
    });
    axios
        .get(baseUrl + id)
        .then((res) =>
            dispatch({
                type: GETPROFILE_SUCCESS,
                payload: res.data
            }))
        .catch((err) => dispatch({
            type: GETPROFILE_ERROR,
            error: err.payload,
        }))
}