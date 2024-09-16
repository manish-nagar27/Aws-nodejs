const express = require("express");
const app = express();

require("dotenv").config();

app.get("/api/get", (req, res) => {
  res.send({ message: "Hello, new dsfdsfWorld!" });
});
app.get("/api/get-details", (req, res) => {
  res.send({ Name: process.env.NAME });
});
app.get("/api/user-details", (req, res) => {
  res.send({ Name: "its me jayant" });
});
app.listen(process.env.PORT, () => {
  console.log("App is running  on port 8000");
});
