import axios from "axios";

export default class PlaceService {
  add(place) {
    return axios.post(`http://localhost:8080/api/v1/places/add`, place);
  }
  getAll() {
    return axios.get(`http://localhost:8080/api/v1/places/getAll`);
  }
  getById(id) {
    return axios.get(
      `http://localhost:8080/api/v1/places/getById/{id}?id=${id}`
    );
  }
  deleteById(id) {
    return axios.delete(`http://localhost:8080/api/v1/places/{id}?id=${id}`);
  }
  updateById(updatePlaceDto) {
    return axios.put(
      `http://localhost:8080/api/v1/places/update`,
      updatePlaceDto
    );
  }
}
