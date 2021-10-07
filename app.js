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




app.post("/api/login", (req, res) => {
 

});

app.listen(5000, () => console.log(`server run at port ${process.env.PORT}`));
