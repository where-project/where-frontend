import axiosInstance from "./AxiosInstance";

export default class UserService {
  refreshToken() {
    return axiosInstance.post(`http://localhost:8080/api/refreshToken`);
  }
}
