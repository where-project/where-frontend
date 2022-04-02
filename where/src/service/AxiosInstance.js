import axios from "axios";

let accessToken = "accessToken";
let refreshToken = "refreshToken";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken, //the token is a variable which holds the token
  },
});

const axiosRefreshInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + refreshToken, //the token is a variable which holds the token
  },
});

export default axiosInstance;
