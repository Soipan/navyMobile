import axios from "axios";
import { authHeader } from "./auth.header";
import store from "../redux";
import BASE_URL from "../config";
const { dispatch } = store;

//Create axios instance
const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

//Intercept the request for error handling
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      dispatch({ type: "authentication/setAuthStatusLoggedOut", payload: {} });
      dispatch({ type: "alert/setFailureAlert", payload: "Session expired!" });
    }
    return Promise.reject(error);
  }
);

export function publicPostRequest(URL, payload) {
    return axiosClient
      .post(URL, payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => response);
  }
  

//Set up axios verbs
export function getRequest(URL) {
  return axiosClient
    .get(`/${URL}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: authHeader(),
      },
    })
    .then((response) => response);
}

export function postRequest(URL, payload) {
  return axiosClient
    .post(URL, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: authHeader(),
      },
    })
    .then((response) => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

export function putRequest(URL, payload) {
  return axiosClient
    .put(`/${URL}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: authHeader(),
      },
    })
    .then((response) => response);
}

export function deleteRequest(URL) {
  return axiosClient
    .delete(`/${URL}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: authHeader(),
      },
    })
    .then((response) => response);
}

export function customPostRequest(URL, payload) {
  return axiosClient
    .post(URL, payload.values, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${payload.token}`,
      },
    })
    .then((response) => response);
}
