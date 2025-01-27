const express = require('express');
const Booking = require('../models/Booking');  // Import the Booking model
const router = express.Router();

// POST route for creating a new booking
router.post('/', async (req, res) => {
  const { pnr, luggage } = req.body;

  if (!pnr || !luggage) {
    return res.status(400).json({ message: 'PNR and luggage details are required' });
  }

  try {
    // Create new booking instance
    const newBooking = new Booking({
      pnr,
      luggage,
    });

    // Save the booking to the database
    await newBooking.save();
    res.status(201).json({
      message: 'Booking created successfully',
      booking: newBooking,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;
