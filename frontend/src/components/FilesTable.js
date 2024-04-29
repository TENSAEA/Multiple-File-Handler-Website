import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  CloudDownload as CloudDownloadIcon,
} from "@mui/icons-material";

const dividerColor = "black"; // Example color, change it to the color you want

const FilesTable = ({ files, onDelete, onEdit }) => (
  <TableContainer
    component={Paper}
    sx={{
      maxWidth: 650,
      margin: "auto",
      mt: 4,
      mb: 4,
      bgcolor: "primary.main",
    }}
  >
    <Table
      sx={{ minWidth: 500, borderCollapse: "collapse" }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow sx={{ bgcolor: "primary.dark" }}>
          <TableCell
            sx={{ border: 1, borderColor: dividerColor, color: "white" }}
          >
            Description
          </TableCell>
          <TableCell
            align="right"
            sx={{ border: 1, borderColor: dividerColor, color: "white" }}
          >
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {files.map((file) => (
          <TableRow
            key={file.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              bgcolor: "primary.light",
              "&:hover": { bgcolor: "primary.dark", opacity: [0.9, 0.8, 0.7] },
            }}
          >
            <TableCell
              component="th"
              scope="row"
              sx={{
                border: 1,
                borderColor: dividerColor,
                color: "primary.contrastText",
              }}
            >
              {file.description}
            </TableCell>
            <TableCell
              align="right"
              sx={{ border: 1, borderColor: dividerColor }}
            >
              <IconButton
                href={file.filePath}
                download
                sx={{ color: "primary.contrastText" }}
              >
                <CloudDownloadIcon />
              </IconButton>
              <IconButton
                onClick={() => onEdit(file.id)}
                sx={{ color: "primary.contrastText" }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => onDelete(file.id)}
                sx={{ color: "primary.contrastText" }}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default FilesTable;
