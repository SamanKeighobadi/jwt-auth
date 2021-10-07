const path = require("path");

const express = require("express");
const jwt = require("jsonwebtoken");

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const Database = require("./utils/dadtabase");

require("dotenv").config({ path: "./config/.env" });

const app = express();

// middlwares
app.use(express.urlencoded({extended:false}))

// Connect to database
Database()
// set Statcis
app.use(express.static(path.join(__dirname, "public")));


// Template Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use(indexRoutes);
app.use("/", indexRoutes);
app.use("/users", userRoutes);

app.listen(5000, () => console.log(`server run at port ${process.env.PORT}`));
