import axios from "axios";

import {
  MESSAGE_LOADING,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
  FETCHMESSAGE_LOADING,
  FETCHMESSAGE_SUCCESS,
  FETCHMESSAGE_ERROR,
} from "../ActionTypes";

const baseUrl = "http://localhost:5500/messages/";

export const deleteChat = (id) => (dispatch) => {
  console.log(id, "to delete");
  dispatch({
    type: MESSAGE_LOADING,
  });
  axios
    .delete(baseUrl + id)
    .then((res) =>
      dispatch({
        type: MESSAGE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: MESSAGE_ERROR,
        error: err,
      })
    );
};

export const fetchFriendMessage = (id) => (dispatch) => {
  console.log(id, "id from fetchFriendMessage");
  const token = localStorage.getItem("token");

  dispatch({
    type: FETCHMESSAGE_LOADING,
  });
  axios
    .get(baseUrl + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) =>
      dispatch({
        type: FETCHMESSAGE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: FETCHMESSAGE_ERROR,
        error: err.message,
      })
    );
};

export const sendChat = (message) => (dispatch) => {
  console.log(message, "message from context");
  dispatch({
    type: MESSAGE_LOADING,
  });
  axios
    .post(baseUrl, message)
    .then((res) =>
      dispatch({
        type: MESSAGE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: MESSAGE_ERROR,
        error: err,
      })
    );
};
