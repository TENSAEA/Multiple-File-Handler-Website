import React, { useState, useEffect } from "react";
import FileUploadForm from "./components/FileUploadForm";
import FilesTable from "./components/FilesTable";
import fileController from "./controller/fileController";

const App = () => {
  const [files, setFiles] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const [currentDescription, setCurrentDescription] = useState("");

  useEffect(() => {
    fileController.getFiles(setFiles);
  }, []);

  const handleEditDialogOpen = (file) => {
    setCurrentFile(file);
    setCurrentDescription(file.description);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleEdit = async (id, description) => {
    try {
      await fileController.updateFile(id, description, setFiles);
      handleEditDialogClose();
    } catch (error) {
      console.error("Error updating file description:", error);
    }
  };

  return (
    <div>
      <FileUploadForm
        onUpload={(fileData) => fileController.uploadFile(fileData, setFiles)}
        onEdit={handleEdit}
        editDialogOpen={editDialogOpen}
        setEditDialogOpen={setEditDialogOpen}
        handleEditDialogClose={handleEditDialogClose}
        currentDescription={currentDescription}
        setCurrentDescription={setCurrentDescription}
        currentFile={currentFile}
        setCurrentFile={setCurrentFile}
      />
      <FilesTable
        files={files}
        onDelete={(id) => fileController.deleteFile(id, setFiles)}
        onEdit={handleEdit}
        handleEditDialogOpen={handleEditDialogOpen}
      />
    </div>
  );
};

export default App;
