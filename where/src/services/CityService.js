import axiosInstance from "./AxiosInstance";

export default class CityService {
  getAll() {
    return axiosInstance().get(`/cities/getAll`);
  }
  getById(id) {
    return axiosInstance().get(`/cities/getById/{id}?id=${id}`);
  }
}