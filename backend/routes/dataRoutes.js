// backend/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Route to fetch data from the database
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM customers');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
