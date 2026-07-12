import axiosInstance from "./axiosInstance";

const getTasks = () => {
  return axiosInstance.get("/api/tasks");
};

const createTask = (task) => {
  return axiosInstance.post("/api/tasks", task);
};

const updateTask = (id, task) => {
  return axiosInstance.put(`/api/tasks/${id}`, task);
};

const deleteTask = (id) => {
  return axiosInstance.delete(`/api/tasks/${id}`);
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};