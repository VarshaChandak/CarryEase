import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const navigate = useNavigate();

  // Hardcoded booking details for testing
  const bookingDetails = {
    bookingId: '1234567890',
    smallLuggage: 1,
    mediumLuggage: 2,
    largeLuggage: 3,
    discountedPrice: 553,
  };

  // Handle confirmation and navigate to the payment page
  const handleConfirmBooking = () => {
    navigate('/payment');
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-success">Booking Confirmation</h2>

      <Card className="shadow-lg rounded-lg mb-4">
        <Card.Body>
          <h5 className="text-center text-secondary">Your Booking is Confirmed!</h5>
          <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
          <p><strong>Luggage Details:</strong></p>
          <ul>
            <li>Small Luggage: {bookingDetails.smallLuggage} items</li>
            <li>Medium Luggage: {bookingDetails.mediumLuggage} items</li>
            <li>Large Luggage: {bookingDetails.largeLuggage} items</li>
          </ul>
          <p><strong>Total Price:</strong> Rs {bookingDetails.discountedPrice}</p>

          {/* Confirm Booking and go to Payment */}
          <Button variant="primary" onClick={handleConfirmBooking} className="w-100 mb-3">
            Confirm Booking and Proceed to Payment
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BookingConfirmation;
