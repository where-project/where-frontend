import axiosInstance from "./AxiosInstance";

export default class EmailService {
  sendEmail(email) {
    return axiosInstance.post(`/email-sender/send-email?email=`, email);
  }
}
