const mongoose = require('mongoose');
const Counter = require('./Counter');  // Import the counter schema

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: Number,
    unique: true,  // Ensure bookingId is unique
  },
  pnr: {
    type: String,
    required: true,
  },
  luggage: [
    {
      size: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

// Pre-save hook to assign a new bookingId before saving
bookingSchema.pre('save', async function(next) {
  if (this.isNew) {
    // Get the next counter value for bookingId
    const counter = await Counter.findOneAndUpdate(
      { _id: 'bookingId' },
      { $inc: { seq: 1 } },  // Increment the counter by 1
      { new: true, upsert: true }  // If no counter, create one
    );

    this.bookingId = counter.seq;  // Assign the new bookingId
  }
  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
