import axios from "axios";

export default class LoginService {
  login(username, password) {
    return axios.get(
      `http://localhost:8080/api/login?username=${username}&password=${password}`
    );
  }
}
