import axios from "axios";
import {toast} from "react-toastify";
import {domainRoot} from "../constants";

const apiEndpoint = domainRoot + "/users";
const tokenKey = "token";
const refKey = "refresh"

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occurrred.");
  }

  if (error.response && error.response.status === 401) {
    verifyToken();
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
  }
}

export async function refreshToken() {
  const res = await http.post(apiEndpoint + "/token/refresh/", {"refresh": localStorage.getItem(refKey)});
  if (res.status !== 200) {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(refKey);
  } else {
    localStorage.setItem(tokenKey, res.data.access);
  }
}

export async function verifyToken() {
  const res = await http.post(apiEndpoint + "/token/verify/", {"token": localStorage.getItem(tokenKey)});
  if (res.status === 200) {
    console.log("Logged in")
  } else if (res.status === 401) {
    await refreshToken();
  } else {
    console.error(res.status);
  }
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};

export default http;
