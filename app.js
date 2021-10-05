const express = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "./config/.env" });

const SECRET_KEY = process.env.SECRET_KEY;

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Hello Postman",
  });
});

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
  } else {
    res.sendStatus(403);
  }
};

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, (err, authData) => {
    if (err) {
      req.sendStatus(403);
    } else {
      res.json({
        message: "Post Created...",
        authData
      });
    }
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
