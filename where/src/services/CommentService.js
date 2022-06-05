import axiosInstance from "./AxiosInstance";

export default class CommentService {
  add(comment) {
    return axiosInstance().post(`/comments/add`, comment);
  }
  getAll() {
    return axiosInstance().get(`/comments/getAll`);
  }
  getById(id) {
    return axiosInstance().get(`/comments/getById/{id}?id=${id}`);
  }
  deleteById(id) {
    return axiosInstance().delete(`/comments/{id}?id=${id}`);
  }
  updateById(updateCommentDto) {
    return axiosInstance().put(`/comments/update`, updateCommentDto);
  }
  getCommentsByPlaceId(id) {
    return axiosInstance().get(`/comments/getByPlaceId/${id}`);
  }
}
