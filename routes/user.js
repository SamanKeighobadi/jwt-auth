const { Router } = require("express");

const router = new Router();

// @desc Login Page
// @route  GET  /login
router.get("/login", (req, res) => {});

// @desc Login Page
// @route  POST  /login
router.post("/login", (req, res) => {});

// @desc Register Page
// @route  POST  /register
router.get("/register", (req, res) => {});

router.post("/register", (req, res) => {});

module.exports = router;
