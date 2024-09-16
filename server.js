const express = require("express");

const app = express();

app.get("/api/get", (req, res) => {
  res.send({ message: "Hello, World!" });
});

app.listen(8000, () => {
  console.log("App is running  on port 8000");
});
