const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/authRoutes");
const taskRoute = require("./routes/taskRoutes");

dotenv.config({ path: "src/.env" });
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Connection failed to MongoDB", err);
  });

app.use("/api/auth", authRoute);

app.use("/api/tasks", taskRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
