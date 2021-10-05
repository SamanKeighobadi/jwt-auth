const express = require("express");
const jwt = require("jsonwebtoken");

const dotEnv = require("dotenv").config({ path: "./config/.env" });

const SECRET_KEY = process.env.SECRET_KEY;

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

app.post("/api/login", (req, res) => {
  const user = {
    id: 1,
    username: "Saman",
    email: "saman.keighobadi@gmail.com",
  };

  jwt.sign({ user: user }, SECRET_KEY, (err, token) => {
    if (err) throw err;
    res.json({
      token,
    });
  });
});

app.listen(5000, () => console.log(`server run at port ${process.env.PORT}`));
