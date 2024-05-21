import fileService from "../services/fileService";

const getFiles = async (setFiles) => {
  try {
    const response = await fileService.getFiles();
    setFiles(response.data);
  } catch (error) {
    console.error("Error fetching files:", error);
  }
};

const uploadFile = async (fileData, setFiles) => {
  try {
    const response = await fileService.uploadFile(fileData);
    setFiles((prevFiles) => [...prevFiles, response.data]);
  } catch (error) {
    console.error("Error uploading file:", error.message);
    console.error("Stack trace:", error.stack);
  }
};

const deleteFile = async (id, setFiles) => {
  try {
    await fileService.deleteFile(id);
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};

const updateFile = async (id, description, setFiles) => {
  try {
    const response = await fileService.updateFile(id, description);
    setFiles((prevFiles) =>
      prevFiles.map((file) => (file.id === id ? response.data : file))
    );
  } catch (error) {
    console.error("Error updating file:", error);
  }
};
const fileController = {
  getFiles,
  uploadFile,
  deleteFile,
  updateFile,
};

export default fileController;
