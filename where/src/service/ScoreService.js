import axios from "axios";

export default class ScoreService {
  getAll() {
    return axios.get(`http://localhost:8080/api/v1/scores/getAll`);
  }

  getById(id) {
    return axios.get(
      `http://localhost:8080/api/v1/scores/getById/{id}?id=${id}`
    );
  }

  add(score) {
    return axios.post(`http://localhost:8080/api/v1/scores/add`, score);
  }

  update(id, score) {
    return axios.put(
      `http://localhost:8080/api/v1/scores/update/{id}?id=${id}`,
      score
    );
  }
  deleteById(id) {
    return axios.delete(
      `http://localhost:8080/api/v1/scores/{id}?id=${id}`
    );
  }
  
}
