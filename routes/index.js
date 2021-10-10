const { Router } = require("express");

const router = new Router();

// @desc Home Page
// @route GET /
router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Home",
    path: "/",
  });
});

// @desc Products page
// @routes GET /products
router.get("/products", (req, res) => {
  res.render("products", {
    pageTitle: "products",
    path: "products",
  });
});

module.exports = router;
