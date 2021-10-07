const { Router } = require("express");

const router = new Router();

const userController = require("../controllers/userController");

// @desc Login Page
// @route  GET  /login
router.get("/login", userController.login);

// @desc Handle login user
// @route  POST  /login
router.post("/login", userController.loginUser);

// @desc Register Page
// @route  GET  /register
router.get("/register", userController.register);

// @dest Create new user
// @route POST /register
router.post("/register", userController.createUser);

module.exports = router;
