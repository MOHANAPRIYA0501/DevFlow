import axiosInstance from "./axiosInstance";

const getTasks = () => {
  return axiosInstance.get("/api/tasks");
};

const createTask = (task) => {
  return axiosInstance.post("/api/tasks", task);
};

export default {
  getTasks,
  createTask,
};
