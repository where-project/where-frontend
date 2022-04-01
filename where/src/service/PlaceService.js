import axiosInstance from "./AxiosInstance";

export default class PlaceService {
  add(place) {
    return axiosInstance.post(`/places/add`, place);
  }
  getAll() {
    return axiosInstance.get(`/places/getAll`);
  }
  getById(id) {
    return axiosInstance.get(`/places/getById/{id}?id=${id}`);
  }
  deleteById(id) {
    return axiosInstance.delete(`/places/{id}?id=${id}`);
  }
  updateById(updatePlaceDto) {
    return axiosInstance.put(`/places/update`, updatePlaceDto);
  }
}
