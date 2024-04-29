import React, { useState, useEffect } from "react";
import FileUploadForm from "./components/FileUploadForm";
import FilesTable from "./components/FilesTable";
import fileController from "./controller/fileController";

const App = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fileController.getFiles(setFiles);
  }, []);

  return (
    <div>
      <FileUploadForm
        onUpload={(fileData) => fileController.uploadFile(fileData, setFiles)}
      />
      <FilesTable
        files={files}
        onDelete={(id) => fileController.deleteFile(id, setFiles)}
        onEdit={(id, description) =>
          fileController.updateFile(id, description, setFiles)
        }
      />
    </div>
  );
};

export default App;
