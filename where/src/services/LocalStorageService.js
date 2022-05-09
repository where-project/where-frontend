export default class LocalStorageService {
  // eslint-disable-next-line no-useless-constructor
  constructor() { }
  setLocalStorage(token, data) {
    localStorage.setItem(token, data);
  }
  deleteLocalStorage(token) {
    localStorage.removeItem(token);
  }

  getLocalStorage(token) {
    if (localStorage.getItem(token)) {
      return localStorage.getItem(token);
    } else {
     console.log("No token found");
    }
  }
}
