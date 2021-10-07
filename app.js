const express = require("express");
const jwt = require("jsonwebtoken");

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");

require("dotenv").config({ path: "./config/.env" });

const app = express();

// Template Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use(indexRoutes);
app.use("/", indexRoutes);
app.use("/users", userRoutes);

app.listen(5000, () => console.log(`server run at port ${process.env.PORT}`));
