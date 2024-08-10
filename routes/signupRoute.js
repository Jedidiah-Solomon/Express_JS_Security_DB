const express = require("express");
const db = require("../db/db_connection");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

// Get all users route
router.get("/users", (req, res) => {
  const query = `
    SELECT 
      CONCAT(first_name, ' ', last_name) AS fullName, 
      gender, 
      state, 
      photo 
    FROM users`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).send("Error fetching users");
    } else {
      res.json(results);
    }
  });
});

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4();
    cb(null, uniqueSuffix + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Handle the signup form submission
router.post("/signup", upload.single("photo"), async (req, res) => {
  // Access non-file form data
  const {
    first_name,
    last_name,
    gender,
    email,
    phone,
    state,
    country,
    password,
  } = req.body;
  // Access file data
  const photo = req.file ? req.file.filename : null;

  // Hash the password before storing
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password with a salt rounds of 10

    const sql = `INSERT INTO users (first_name, last_name, gender, email, phone, state, country, photo, password) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
      sql,
      [
        first_name,
        last_name,
        gender,
        email,
        phone,
        state,
        country,
        photo,
        hashedPassword,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting user data:", err);
          res.status(500).send("Error signing up user");
        } else {
          res.redirect("/login");
        }
      }
    );
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).send("Error signing up user");
  }
});

module.exports = router;
