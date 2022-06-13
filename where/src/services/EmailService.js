import axiosInstance from "./AxiosInstance";

export default class EmailService {
  sendEmail(reservationModel) {
    return axiosInstance().post(`/email-sender/send-email`, reservationModel);
  }
}
