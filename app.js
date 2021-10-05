const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Hello Postman",
  });
});

app.post("/api/posts", (req, res) => {
  res.json({
    message: "Post Created...",
  });
});

app.listen(5000, () => console.log("server run "));
