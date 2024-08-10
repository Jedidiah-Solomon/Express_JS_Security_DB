const express = require("express");
const db = require("../db/db_connection");

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

module.exports = router;
