import axiosInstance from "./AxiosInstance";

export default class PlaceService {
  add(place) {
    return axiosInstance().post(`/places/add`, place);
  }
  getAll() {
    return axiosInstance().get(`/places/getAll`);
  }
  getById(id) {
    return axiosInstance().get(`/places/getById/${id}`);
  }
  deleteById(id) {
    return axiosInstance().delete(`/places/${id}`);
  }
  updateById(updatePlaceDto) {
    return axiosInstance().put(`/places/update`, updatePlaceDto);
  }
  getPlaceFilteredByCityId(id) {
    return axiosInstance().get(`/places/filterByCityId/${id}`);
  }
  getPlaceFilteredByCategoryId(id) {
    return axiosInstance().get(`/places/filterByCategoryId/${id}`);
  }
  filterByCityIdAndCategoryId(cityId, categoryId) {
    return axiosInstance().get(
      `/places/filterByCityIdAndCategoryId/${cityId}/${categoryId}`
    );
  }
}
