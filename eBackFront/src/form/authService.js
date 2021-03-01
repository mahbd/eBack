import jwtDecode from "jwt-decode";
import http from "./httpService";
import {domainRoot} from "../constants";

const apiEndpoint = domainRoot + "/users";
const tokenKey = "token";
const refKey = "refresh"

http.setJwt(getJwt());

export async function login(email, password) {
  const { data } = await http.post(apiEndpoint + "/token/", { email, password });
  const {refresh, access: jwt} = data;
  localStorage.setItem(tokenKey, jwt);
  localStorage.setItem(refKey, refresh);
}

export async function register(email, password) {
  const res = await http.post(apiEndpoint + "/register/", {email, password});
  if(res.status === 201) {

  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const auth = {
  login,
  logout,
  getCurrentUser
}

export default auth;
