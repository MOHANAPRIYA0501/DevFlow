import axiosInstance from "./axiosInstance";

const getTasks = () => {
  return axiosInstance.get("/api/tasks");
};

export default {
  getTasks,
};
