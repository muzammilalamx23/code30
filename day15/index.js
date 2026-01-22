const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my first Express server!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
