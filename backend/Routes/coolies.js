// Routes/coolies.js
const express = require('express');
const Coolie = require('../models/coolies'); // Make sure the path is correct
const router = express.Router();

// GET all coolies
router.get('/', async (req, res) => {
  try {
    const coolies = await Coolie.find(); // Fetch all coolies from the DB
    res.json(coolies); // Return coolies as a JSON response
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch coolies' });
  }
});

// POST a new coolie
router.post('/', async (req, res) => {
  const { name, rating, status } = req.body; // Extract the data from the request body

  const newCoolie = new Coolie({
    name,
    rating,
    status,
  });

  try {
    const savedCoolie = await newCoolie.save(); // Save the new coolie to the database
    res.status(201).json(savedCoolie); // Return the saved coolie
  } catch (err) {
    res.status(500).json({ error: 'Failed to create coolie', message: err.message });
  }
});

module.exports = router;
