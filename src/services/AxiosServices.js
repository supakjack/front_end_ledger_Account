import axios from "axios";

export default class AxiosServices {
  #url;
  #config;
  #http;
  constructor(url = "") {
    this.#url = "http://localhost:3000/" + url;
    this.#config = {
      headers: {
        "accept-version": "1.0.0",
        "Content-Type": "application/json"
      }
    };
    this.#http = axios;
  }

  async getHttp(path = "") {
    return this.#http.get(this.#url + path, this.#config).then(response => {
      return response.data;
    });
  }

  postHttp(path = "", params = null) {
    return this.#http
      .post(this.#url + path, params, this.#config)
      .then(response => {
        return response.data;
      });
  }

  putHttp(path = "", params = null) {
    return this.#http
      .put(this.#url + path, params, this.#config)
      .then(response => {
        return response.data;
      });
  }

  patchHttp(path = "", params = null) {
    return this.#http
      .patch(this.#url + path, params, this.#config)
      .then(response => {
        return response.data;
      });
  }

  deleteHttp(path = "") {
    return this.#http.delete(this.#url + path, this.#config).then(response => {
      return response.data;
    });
  }
}
