const User = require('../models/User');

exports.login = (req, res) => {
  res.render("login", {
    pageTitle: "Login User",
  });
};

exports.register = (req, res) => {
  res.render("register", {
    pageTitle: "Register user",
  });
};

exports.createUser = (req, res) => {
  res.json({
    message: "user create...",
  });
};

exports.loginUser = (req, res) => {
  res.json({
    message: "user Login...",
  });
};
