import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const FileUploadForm = () => {
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const [currentDescription, setCurrentDescription] = useState("");

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleUpload = () => {
    const filesWithDescription = Array.from(files).map((file) => {
      return {
        ...file,
        description: description,
      };
    });

    setFiles(filesWithDescription);

    setDescription("");
  };

  // ... rest of your component

  const handleDelete = (fileToDelete) => {
    setFiles(files.filter((file) => file !== fileToDelete));
  };

  const handleEditDialogOpen = (file) => {
    setCurrentFile(file);
    setCurrentDescription(description);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditDescription = () => {
    // Here you would normally send the updated description to the backend
    // For now, we'll just close the dialog
    setDescription(currentDescription);
    handleEditDialogClose();
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      <Typography variant="h6" gutterBottom>
        File Upload
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <input
          type="file"
          onChange={handleFileChange}
          inputProps={{ "aria-label": "Upload files" }}
          style={{ marginBottom: "20px" }}
          multiple
        />
        <TextField
          label="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Box>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {file.name}
                </TableCell>
                <TableCell align="right">
                  {(file.size / 1024).toFixed(2)} KB
                </TableCell>
                <TableCell align="right">{file.type}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEditDialogOpen(file)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(file)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Description</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the description of the file, please enter the new
            description here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Description"
            type="text"
            fullWidth
            value={currentDescription}
            onChange={(e) => setCurrentDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditDescription} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default FileUploadForm;
