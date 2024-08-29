import axios from "axios";
import {
  DELETETHREAD_FAIL,
  DELETETHREAD_REQ,
  DELETETHREAD_SUCCESS,
  LOGINREQ,
  LOGINSUCCESS,
  THREADIDFAIL,
  THREADIDREQ,
  THREADIDSUCCESS,
} from "./types";
import { useDispatch } from "react-redux";

export const Getallmails = (token) => (dispatch) => {
  useDispatch({ type: LOGINREQ });
  return axios
    .get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/:thread_id`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      useDispatch({ type: LOGINSUCCESS, payload: res.data.data });
      console.log(res.data, "Maildata");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchThread = (id, token) => (dispatch) => {
  useDispatch({ type: THREADIDREQ });
  return axios
    .get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      useDispatch({ type: THREADIDSUCCESS, payload: res.data.data });
      console.log(res.data);
    })
    .catch((err) => {
      useDispatch({ type: THREADIDFAIL });
    });
};

export const DeleteThread = (thread_id, token) => (dispatch) => {
  useDispatch({ type: DELETETHREAD_REQ });

  return axios
    .delete(
      'https://hiring.reachinbox.xyz/api/v1/onebox/messages/:thread_id',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      useDispatch({ type: DELETETHREAD_SUCCESS });
      alert(res.data.message);
    })
    .catch((err) => {
      useDispatch({ type: DELETETHREAD_FAIL });
    });
};