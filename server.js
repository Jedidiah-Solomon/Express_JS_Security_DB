require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const routes = require("./routes/routes");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); // Add this line

// Middleware for sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Middleware to verify JWT token
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token; // Assuming token is stored in a cookie

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Protect the /dashboard route
app.get("/dashboard", authenticateJWT, (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/dashboard.html"));
});

// Use the routes defined in routes.js
app.use(routes);

// Serve static files
app.use(express.static(path.join(__dirname, "public"))); // For general static files

// Serve static files from the 'src/' directory
app.use("/js", express.static(path.join(__dirname, "src/js")));
app.use("/styles", express.static(path.join(__dirname, "src/styles")));
app.use("/img", express.static(path.join(__dirname, "src/img")));

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Handle server errors
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
