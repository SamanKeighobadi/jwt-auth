const User = require('../models/User');

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
exports.createUser = (req, res) => {
  res.render('login',{
    pageTitle:'Login page',
    path:'/login'
  });
};

// @desct handle login user and redicrect user to dashboard page
exports.loginUser = (req, res) => {
  res.render('dashboard',{
    pageTitle:'Dashbaord',
    path:'/dashboard'
  });
};
