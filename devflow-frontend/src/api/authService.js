import axiosInstance from "./axiosInstance";

const register = (userData) => {
  return axiosInstance.post("/api/auth/register", userData);
};

const login = (loginData) => {
  return axiosInstance.post("/api/auth/login", loginData);
};

export default {
  register,
  login,
};
