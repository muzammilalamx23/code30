const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// connect DB
mongoose.connect("mongodb://127.0.0.1:27017/day17")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
