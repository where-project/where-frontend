import axiosInstance from "./AxiosInstance";

export default class CategoryService {
  add(categoryName) {
    return axiosInstance.post(`/categories/add`, categoryName);
  }
  getAll() {
    return axiosInstance.get(`/categories/getAll`);
  }
  getById(id) {
    return axiosInstance.get(`/categories/getById/{id}?id=${id}`);
  }
  deleteById(id) {
    return axiosInstance.delete(`/categories/{id}?id=${id}`);
  }
  updateById(updateCategoryDto) {
    return axiosInstance.put(`/categories/update`, updateCategoryDto);
  }
}
