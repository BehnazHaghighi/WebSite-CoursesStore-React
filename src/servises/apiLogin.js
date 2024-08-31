import axios from "axios";

const apiLogin = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiLogin.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiLogin.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiLogin;
