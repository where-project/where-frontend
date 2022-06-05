import axiosInstance from "./AxiosInstance";

export default class BusinessHourService {
  add(businessHour) {
    console.log(businessHour);
    return axiosInstance().post(`http://localhost:8080/api/v1/business-hours/add`, businessHour);
  }
}