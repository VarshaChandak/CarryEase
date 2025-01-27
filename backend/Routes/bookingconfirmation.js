import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';  // Use useParams to get booking ID from URL

const BookingConfirmationPage = () => {
  const { bookingId } = useParams();  // Get booking ID from URL params
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`/api/bookings/${bookingId}`);
        setBooking(response.data);
      } catch (err) {
        console.error('Error fetching booking:', err);
      }
    };

    if (bookingId) {
      fetchBooking();
    }
  }, [bookingId]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmation</h2>
      <p>Booking ID: {booking._id}</p>
      <p>Coolie Assigned: {booking.coolieId}</p>
      <p>Location: {booking.location}</p>
      <p>Luggage Size: {booking.luggage}</p>
      <p>Quantity: {booking.quantity}</p>
      <p>Status: {booking.status}</p>
    </div>
  );
};

export default BookingConfirmationPage;
