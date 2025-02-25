import axios from "axios";


const BASE_URL = "http://localhost:3009";

const getAuthToken = () => {
  const userData = localStorage.getItem("token");
  return userData;
};

export const API_URL = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
    Accept: "/",
  },
});

API_URL.interceptors.request.use((config:any) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const API_FORM_URL = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,

  headers: {
    "content-type": "multipart/form-data",
  },
});


API_FORM_URL.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});