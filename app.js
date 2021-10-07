const express = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "./config/.env" });

const SECRET_KEY = process.env.SECRET_KEY;

const app = express();

// Template Engine
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Home",
  });
});

app.listen(5000, () => console.log(`server run at port ${process.env.PORT}`));
