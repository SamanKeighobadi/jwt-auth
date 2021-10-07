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

exports.createUser = (req,res) => {
    res.send('user created')
}

exports.loginUser = (req,res) => {
    res.send('user has successfully login')
}