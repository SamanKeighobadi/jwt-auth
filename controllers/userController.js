const User = require("../models/User");

// @dect render login page view
exports.login = (req, res) => {
  res.render("login", {
    pageTitle: "Login User",
  });
};

// @desc render register page view
exports.register = (req, res) => {
  res.render("register", {
    pageTitle: "Register user",
  });
};

// @desc handle create user and redirect user to login page
exports.createUser = async (req, res) => {
  try {
 
    const { email, password } = req.body;

    const user = await User.create({ email, password });
    res.status(201).json(user);
    res.render("login", {
      pageTitle: "Login page",
      path: "/login",
    });
  } catch (ex) {
    console.log(ex);
    // res.status(400).send("error user not created");
    res.render("register", {
      pageTitle: "Register page",
      path: "/register",
    });
  }
};

// @desct handle login user and redicrect user to dashboard page
exports.loginUser = (req, res) => {
  res.render("dashboard", {
    pageTitle: "Dashbaord",
    path: "/dashboard",
  });
};
