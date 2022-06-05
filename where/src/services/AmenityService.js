import axiosInstance from "./AxiosInstance";

export default class AmenityService {
  getAll() {
    return axiosInstance().get(`/amenities/getAll`);
  }
}
