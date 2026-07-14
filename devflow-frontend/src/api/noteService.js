import axiosInstance from "./axiosInstance";

const getNotes = () => {
  return axiosInstance.get("/api/notes");
};

const createNote = (note) => {
  return axiosInstance.post("/api/notes", note);
};

const updateNote = (id, note) => {
  return axiosInstance.put(`/api/notes/${id}`, note);
};

const deleteNote = (id) => {
  return axiosInstance.delete(`/api/notes/${id}`);
};

export default {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
