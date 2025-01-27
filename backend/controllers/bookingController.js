const Counter = require('../models/Counter');
const Booking = require('../models/Booking');
const Coolie = require('../models/coolies');

exports.createBooking = async (req, res) => {
  try {
    const { userId, luggage, location, original_price, booking_count, day_of_week, time_of_day, season } = req.body;

    // Step 1: Find an available and online coolie
    const coolie = await Coolie.findOne({
      availability: true,
      status: 'online', // Ensure the coolie is online
    });

    if (!coolie) {
      return res.status(404).json({ message: 'No available coolie found' });
    }

    // Step 2: Get the next bookingId using the counter collection
    const counter = await Counter.findOneAndUpdate(
      { name: 'bookingId' },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }  // If no document, create a new one
    );

    if (!counter) {
      return res.status(500).json({ message: 'Failed to fetch counter' });
    }

    const bookingId = counter.sequence_value; // Get the incremented bookingId

    // Step 3: Create a new booking with the assigned coolie and bookingId
    const newBooking = new Booking({
      bookingId,  // Automatically assign the incremented bookingId
      userId,
      luggage,
      location,
      coolieId: coolie._id,  // Assign the coolie to the booking
      original_price,
      final_price: original_price,  // Calculate final price based on your logic
      status: 'pending',
      booking_count,
      day_of_week,
      time_of_day,
      season
    });

    await newBooking.save();

    // Step 4: Update the coolie's availability and status
    coolie.availability = false; // Mark the coolie as unavailable
    coolie.status = 'offline'; // Optionally mark the coolie as offline
    await coolie.save();

    // Return booking and coolie details
    res.status(201).json({
      message: 'Booking created successfully',
      booking: newBooking,
      coolie: coolie,
      final_price: newBooking.final_price
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
