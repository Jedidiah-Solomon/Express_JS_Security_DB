const express = require("express");
const db = require("../db/db_connection");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

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

  try {
    // Check if the email already exists in the database
    const emailCheckQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(emailCheckQuery, [email], async (err, result) => {
      if (err) {
        console.error("Error checking email:", err);
        return res.status(500).send("Error signing up user");
      }

      if (result.length > 0) {
        // Email already exists
        return res.status(409).send("Email already in use");
      }

      // Hash the password before storing
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
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).send("Error signing up user");
  }
});

module.exports = router;
