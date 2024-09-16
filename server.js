const express = require("express");
const app = express();

require("dotenv").config();

app.get("/api/get", (req, res) => {
  res.send({ message: "Hello, World!" });
});
app.get("/api/get-details", (req, res) => {
  res.send({ Name: process.env.NAME });
});
app.listen(process.env.PORT, () => {
  console.log("App is running  on port 8000");
});
