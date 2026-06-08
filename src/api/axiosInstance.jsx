import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "BASE_URL",
  timeout: 1000000,
});

export default axiosInstance;
