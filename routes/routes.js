const express = require("express");
const path = require("path");
const router = express.Router();

// Import route modules
const loginRoute = require("./loginRoute");
const signupRoute = require("./signupRoute");
const allUsersRoute = require("./allUsersRoute");

// Define routes
router.use(loginRoute);
router.use(signupRoute);
router.use(allUsersRoute);

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/signup.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/login.html"));
});

router.get("/news", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/news.html"));
});

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/dashboard.html"));
});

module.exports = router;
