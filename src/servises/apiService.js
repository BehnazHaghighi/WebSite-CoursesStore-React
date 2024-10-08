import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // دریافت JWT از localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // تنظیم هدر Authorization
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
