import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class ZHURequest {
  //baseUrl
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.response.use(
      (res) => {
        console.log("res=", res);
        return res.data;
      },
      (err) => {
        console.log("err=", err);
        return err;
      }
    );
  }

  request(config) {
    return this.instance(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new ZHURequest(BASE_URL, TIMEOUT);
