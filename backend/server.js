const express = require("express");
const routes = require("./routes/routes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
