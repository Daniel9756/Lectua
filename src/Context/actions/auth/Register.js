import axios from "axios";

import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS, 
  PARTNER_LOADING,
  GETPARTNERS_LOADING,
  GETPARTNERS_SUCCESS,
  GETPARTNERS_ERROR,
  DELETEPARTNER_LOADING,
  DELETEPARTNER_SUCCESS,
  DELETEPARTNER_ERROR,
} from "../ActionTypes";

const baseUrl = "http://localhost:5500/users/";

export const deletePartner = (id) => (dispatch) => {
  console.log(id, "values from context");
  const { orgId, partnerId } = id;
  const token = localStorage.getItem("token");
  dispatch({
    type: DELETEPARTNER_LOADING,
  });
  axios
    .delete(baseUrl + `partner/${orgId}/${partnerId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) =>
      dispatch({
        type: DELETEPARTNER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETEPARTNER_ERROR,
        error: err.message,
      })
    );
};

export const getPartners = (id) => (dispatch) => {
  // console.log(id, "values from context")

  const token = localStorage.getItem("token");
  dispatch({
    type: GETPARTNERS_LOADING,
  });
  axios
    .get(baseUrl + `partner/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) =>
      dispatch({
        type: GETPARTNERS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GETPARTNERS_ERROR,
        error: err.message,
      })
    );
};

export const addUser = (values) => (dispatch) => {
  // console.log(values, "values from register")
  dispatch({
    type: REGISTER_LOADING,
  });
  axios
    .post(baseUrl, values)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_ERROR,
        error: err.message,
      })
    );
};

export const addPartner = (values) => (dispatch) => {
 
  dispatch({
    type: PARTNER_LOADING,
  });
  axios
    .post(baseUrl + "partner/", values)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_ERROR,
        error: err.message,
      })
    );
};
