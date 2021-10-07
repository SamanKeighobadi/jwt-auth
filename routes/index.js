const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Home",
    path: "/",
  });
});

router.get("/products", (req, res) => {
  res.render("products", {
    pageTitle: "products",
    path: "products",
  });
});

module.exports = router;
