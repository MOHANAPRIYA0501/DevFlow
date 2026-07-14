import axiosInstance from "./axiosInstance";

const getSnippets = () => {
  return axiosInstance.get("/api/snippets");
};

const createSnippet = (snippet) => {
  return axiosInstance.post("/api/snippets", snippet);
};

const updateSnippet = (id, snippet) => {
  return axiosInstance.put(`/api/snippets/${id}`, snippet);
};

const deleteSnippet = (id) => {
  return axiosInstance.delete(`/api/snippets/${id}`);
};

export default {
  getSnippets,
  createSnippet,
  updateSnippet,
  deleteSnippet,
};
