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
