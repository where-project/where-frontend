import axios from "axios";

export default class CommentService {
  add(comment) {
    return axios.post(`http://localhost:8080/api/v1/comments/add`, comment);
  }
  getAll() {
    return axios.get(`http://localhost:8080/api/v1/comments/getAll`);
  }
  getById(id) {
    return axios.get(
      `http://localhost:8080/api/v1/comments/getById/{id}?id=${id}`
    );
  }
  deleteById(id) {
    return axios.delete(`http://localhost:8080/api/v1/comments/{id}?id=${id}`);
  }
  updateById(updateCommentDto) {
    return axios.put(
      `http://localhost:8080/api/v1/comments/update`,
      updateCommentDto
    );
  }
  getCommentsByPlaceId(id) {
    return axios.get(
      `http://localhost:8080/api/v1/comments/getByPlaceId/{id}?id=${id}`
    );
  }
}
