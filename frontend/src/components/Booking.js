import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';

const BookingPage = () => {
  const navigate = useNavigate();

  // State for luggage details
  const [smallLuggage, setSmallLuggage] = useState(0);
  const [mediumLuggage, setMediumLuggage] = useState(0);
  const [largeLuggage, setLargeLuggage] = useState(0);

  // State for PNR and user input
  const [pnrNumber, setPnrNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle luggage changes
  const handleLuggageChange = (size, value) => {
    const parsedValue = Math.max(0, Math.floor(value)); // Prevent negative or non-integer values
    if (size === 'small') setSmallLuggage(parsedValue);
    if (size === 'medium') setMediumLuggage(parsedValue);
    if (size === 'large') setLargeLuggage(parsedValue);
  };

  // Check if the form is valid (luggage quantity and PNR number)
  const isFormValid = () => {
    return pnrNumber && (smallLuggage > 0 || mediumLuggage > 0 || largeLuggage > 0);
  };

  // Handle form submission (simulate booking)
  const handleSubmit = () => {
    if (!isFormValid()) {
      setErrorMessage('Please enter a PNR number and at least one luggage item.');
      return;
    }

    const bookingDetails = {
      smallLuggage,
      mediumLuggage,
      largeLuggage,
      pnrNumber,
      originalPrice: 500, // Static price for testing
      discountedPrice: 400, // Discounted price for testing
      bookingId: "1234567890", // Mock booking ID
    };

    // Simulate the redirection to the booking confirmation page with the mock data
    navigate('/bookingconfirmation', { state: { bookingData: bookingDetails } });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-primary">Book Your Luggage Transport</h2>

      {/* PNR Section with enhanced UI */}
      <Card className="mb-4 shadow-lg rounded-lg">
        <Card.Body>
          <h5 className="text-center text-secondary">PNR Number</h5>
          <Form.Group controlId="formPnrNumber" className="position-relative">
            <Form.Label className="font-weight-bold">Enter PNR Number</Form.Label>
            <Form.Control
              type="text"
              value={pnrNumber}
              onChange={(e) => setPnrNumber(e.target.value)}
              placeholder="Enter PNR Number"
              required
              className="form-control-lg p-3"
            />
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Luggage Details Form with improved styling */}
      <Card className="mb-4 shadow-lg rounded-lg border-0">
        <Card.Body>
          <h5 className="mb-3 text-center">Luggage Details</h5>

          {/* Row of Luggage Inputs */}
          <Row className="g-4">
            <Col md={4}>
              <Card className="border-0 rounded-lg shadow-sm">
                <Card.Body className="p-3 text-center">
                  <h6>Small Luggage (2-5 kg)</h6>
                  <Form.Control
                    type="number"
                    value={smallLuggage}
                    onChange={(e) => handleLuggageChange('small', e.target.value)}
                    min="0"
                    className="form-control-lg"
                    placeholder="Quantity"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 rounded-lg shadow-sm">
                <Card.Body className="p-3 text-center">
                  <h6>Medium Luggage (6-12 kg)</h6>
                  <Form.Control
                    type="number"
                    value={mediumLuggage}
                    onChange={(e) => handleLuggageChange('medium', e.target.value)}
                    min="0"
                    className="form-control-lg"
                    placeholder="Quantity"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 rounded-lg shadow-sm">
                <Card.Body className="p-3 text-center">
                  <h6>Large Luggage (13-20 kg)</h6>
                  <Form.Control
                    type="number"
                    value={largeLuggage}
                    onChange={(e) => handleLuggageChange('large', e.target.value)}
                    min="0"
                    className="form-control-lg"
                    placeholder="Quantity"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Error message */}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {/* Submit Button */}
      <Button
        variant="primary"
        onClick={handleSubmit}
        disabled={!isFormValid()}
        className="w-100 mb-3 py-2"
      >
        Submit Booking
      </Button>

      {/* Footer */}
      <footer className="footer bg-light text-dark py-3 mt-5">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 CarryEase. All Rights Reserved.</p>
              <p>
                <a href="/privacy-policy" className="text-dark">Privacy Policy</a> | 
                <a href="/terms-conditions" className="text-dark"> Terms & Conditions</a> | 
                <a href="/about-us" className="text-dark"> About Us</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

export default BookingPage;
