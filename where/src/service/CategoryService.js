import axios from "axios";

export default class CategoryService {
  add(categoryName) {
    return axios.post(
      `http://localhost:8080/api/v1/categories/add`,
      categoryName
    );
  }
  getAll() {
    return axios.get(`http://localhost:8080/api/v1/categories/getAll`);
  }
  getById(id) {
    return axios.get(
      `http://localhost:8080/api/v1/categories/getById/{id}?id=${id}`
    );
  }
  deleteById(id) {
    return axios.delete(
      `http://localhost:8080/api/v1/categories/{id}?id=${id}`
    );
  }
  updateById(updateCategoryDto) {
    return axios.put(
      `http://localhost:8080/api/v1/categories/update`,
      updateCategoryDto
    );
  }
}
