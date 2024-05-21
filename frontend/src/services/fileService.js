import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Adjust this as needed
const API_URL = `${API_BASE_URL}/files`;

const getFiles = () => axios.get(API_URL);
const uploadFile = (fileData) => axios.post(API_URL, fileData);

const deleteFile = (id) => axios.delete(`${API_URL}/${id}`);
const updateFile = (id, description) =>
  axios.put(`${API_URL}/${id}`, { description });

const fileService = {
  getFiles,
  uploadFile,
  deleteFile,
  updateFile,
};

export default fileService;
