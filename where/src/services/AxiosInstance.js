import axios from "axios";
import LocalStorageService from "./LocalStorageService";

let localStorageService = new LocalStorageService();
let accessToken = localStorageService.getLocalStorage("accessToken");
let refreshToken = localStorageService.getLocalStorage("refreshToken");

const axiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`, //the token is a variable which holds the token
    },
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      if (typeof response.data === "string") {
        window.location.href = "/";
        return null;
      } else {
        return response;
      }
    },
    (error) => {
      if (error.response?.status === 403) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

const axiosRefreshInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${refreshToken}`, //the token is a variable which holds the token
  },
});

export default axiosInstance;
