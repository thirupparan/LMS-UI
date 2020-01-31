import axios from "axios";
import authService from "./auth-service";
import { API_BASE_URL } from "../_constants/index";

class AxiosService {
  axiosInstance = {};

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstance = axios.create({
      baseURL: `${API_BASE_URL}`,
      timeout: 1000
    });
    this.axiosInstance.interceptors.request.use(config => {
      const token = authService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    return this.axiosInstance;
  }
  getInstance() {
    return this.axiosInstance || this.axiosInstance();
  }
}
export default new AxiosService();
