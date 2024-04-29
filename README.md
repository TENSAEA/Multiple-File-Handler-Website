# Multi-File Uploader Application

## Overview
This application allows users to upload multiple files with descriptions. It provides functionality to view, edit, and delete the uploaded files. The user interface is built with React, while the backend is powered by Node.js, Express, Sequelize, and MySQL.

## Features
- **Multiple File Uploads**: Users can upload multiple files with descriptions.
- **File Management**: Users can view, edit, and delete uploaded files.
- **Table Display**: Uploaded files are displayed in a table with descriptions, download/view links, and edit/delete actions.
- **File Size Validation**: Client-side validation ensures that files do not exceed the 10MB size limit.

## Technical Stack
- **Front-end**: React
- **Back-end**: Node.js , Express, Sequelize, MySQL

## User Interface
- **File Upload Form**: Allows input of the file and description.
  - Optional file selection input.
  - Required description input.
  - Submission button.
- **Files Table**: Displays uploaded files with options to download, view, edit, and delete.

## API Endpoints
- `GET /files`: Retrieves all files.
- `POST /files`: Uploads a new file.
- `DELETE /files/:id`: Deletes a file.
- `PUT /files/:id`: Updates file information.

## MVC Architecture
The backend is structured using the Model-View-Controller (MVC) architecture to ensure a clean separation of concerns.

## ORM
Sequelize ORM is used for database interactions, providing a robust layer for managing data.

## Front-End and Back-End Linking
- Axios or Fetch API is used in the React application to communicate with the backend.

## Development and Contribution
- Use Git for version control and host the code on GitHub.
- Maintain a clear commit history with descriptive messages.


![Screenshot from 2024-04-29 23-20-11](https://github.com/TENSAEA/Multiple-File-Handler-Website/assets/106927635/8156cd56-aef2-424a-8de2-d6a0aa8be6f8)
![Screenshot from 2024-04-29 23-20-22](https://github.com/TENSAEA/Multiple-File-Handler-Website/assets/106927635/fae23af2-3c12-49fd-8d3e-4c204479dd8a)

## Done by Tensae
