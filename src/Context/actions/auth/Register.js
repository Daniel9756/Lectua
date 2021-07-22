import axios from 'axios'

import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../ActionTypes";


const baseUrl = "http://localhost:5500/users";



export const addUser = (values)=> (dispatch) => {
    console.log(values, "values from register")
    dispatch({
        type: REGISTER_LOADING,
    });
    axios
    .post(baseUrl, values)
    .then((res) => 
    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch((err) => dispatch({
        type: REGISTER_ERROR,
        error: err.message
        

    }))
}

