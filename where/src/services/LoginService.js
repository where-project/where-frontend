import axios from "axios";
export default class LoginService {
  login(username, password) {
    return axios.post(
      `http://localhost:8080/api/login?username=${username}&password=${password}`
    );
  }
  register(User) {
    return axios.post(`http://localhost:8080/api/user/save`, User);
  }
}
