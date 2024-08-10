require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../db/db_connection");
const session = require("express-session");

const router = express.Router();

// Initialize Passport.js
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], (err, results) => {
      if (err) return done(err);

      if (results.length === 0) {
        return done(null, false, { message: "Incorrect email or password." });
      }

      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return done(err);

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect email or password." });
        }
      });
    });
  })
);

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser((id, done) => {
  const sql = `SELECT * FROM users WHERE id = ?`;
  db.query(sql, [id], (err, results) => {
    if (err) return done(err);
    done(null, results[0]);
  });
});

// Handle login route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      // Return a JSON response for failed login
      return res.status(401).json({ error: info.message || "Login failed." });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      // Store token in a cookie with security flags
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      // Send a JSON response with the user’s first name
      res.json({ redirectTo: "/dashboard", firstName: user.first_name });
    });
  })(req, res, next);
});

// Error handler for login
router.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: "Something went wrong. Please try again later." });
});

module.exports = router;
