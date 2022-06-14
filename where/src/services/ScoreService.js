import axiosInstance from "./AxiosInstance";

export default class ScoreService {
  getAll() {
    return axiosInstance().get(`/scores/getAll`);
  }

  getById(id) {
    return axiosInstance().get(`/scores/getById/${id}`);
  }

  add(score) {
    return axiosInstance().post(`/scores/add`, score);
  }

  update(id, score) {
    return axiosInstance().put(`/scores/update/${id}`, score);
  }

  deleteById(id) {
    return axiosInstance().delete(`/scores/${id}`);
  }

  getByPlaceId(id) {
    return axiosInstance().get(`/scores/getById/${id}`);
  }
}
