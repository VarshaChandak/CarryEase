const mongoose = require('mongoose');

const bookingConfirmationSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  confirmationNumber: { type: String, required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
});

const BookingConfirmation = mongoose.model('BookingConfirmation', bookingConfirmationSchema);

module.exports = BookingConfirmation;
