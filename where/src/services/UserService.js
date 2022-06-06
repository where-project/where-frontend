import axiosInstance from "./AxiosInstance";

export default class UserService {
  refreshToken() {
    return axiosInstance.post(`http://localhost:8080/api/refreshToken`);
  }

  getUserByUserId(id) {
    return axiosInstance().get(`/users/getByUserId/${id}`);
  }

  getUserByUsername(name) {
    return axiosInstance().get(`/users/getByUsername/${name}`);
  }
}
