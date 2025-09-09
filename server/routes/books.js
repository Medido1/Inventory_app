const express = require("express");
const router = express.Router();
const pool = require("../db/db");

router.get("/", async(req, res) => {
  try {
    const results = await pool.query('SELECT * FROM books');
    const books = results.rows;
    res.json(books) 
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
  
})

module.exports = router;