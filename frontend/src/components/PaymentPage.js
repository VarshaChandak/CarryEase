// src/components/Payment.js
import React, { useState } from 'react';
import { Container, Card, Button, Form, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  // State for payment method and card details
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // Handle input changes for card details
  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Handle payment method change
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // Handle payment submission
  const handlePaymentSubmit = () => {
    // Simulate a successful payment
    navigate('/payment-success');
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-primary">Payment</h2>

      <Card className="shadow-lg rounded-lg mb-4">
        <Card.Body>
          {/* Booking Summary */}
          <h5 className="text-center text-secondary mb-4">Booking Summary</h5>
          <p><strong>Booking ID:</strong> 1234567890</p>
          <p><strong>Total Price:</strong> $400</p>

          {/* Payment Method Selection */}
          <h5 className="text-secondary mt-4">Choose Payment Method:</h5>
          <Row className="mb-3">
            <Col>
              <Button
                variant={paymentMethod === 'creditCard' ? 'primary' : 'outline-primary'}
                onClick={() => handlePaymentMethodChange('creditCard')}
                className="w-100"
              >
                Credit Card
              </Button>
            </Col>
            <Col>
              <Button
                variant={paymentMethod === 'paypal' ? 'primary' : 'outline-primary'}
                onClick={() => handlePaymentMethodChange('paypal')}
                className="w-100"
              >
                PayPal
              </Button>
            </Col>
            <Col>
              <Button
                variant={paymentMethod === 'googlePay' ? 'primary' : 'outline-primary'}
                onClick={() => handlePaymentMethodChange('googlePay')}
                className="w-100"
              >
                Google Pay
              </Button>
            </Col>
          </Row>

          {/* Credit Card Form (if selected) */}
          {paymentMethod === 'creditCard' && (
            <div>
              <Form.Group controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Card Number"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardInputChange}
                  maxLength="16"
                  required
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group controlId="formExpiryDate">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YY"
                      name="expiryDate"
                      value={cardDetails.expiryDate}
                      onChange={handleCardInputChange}
                      maxLength="5"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formCVV">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="CVV"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardInputChange}
                      maxLength="3"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          )}

          {/* PayPal or Google Pay method */}
          {paymentMethod === 'paypal' && (
            <p className="text-center">You will be redirected to PayPal to complete your payment.</p>
          )}

          {paymentMethod === 'googlePay' && (
            <p className="text-center">You will be redirected to Google Pay to complete your payment.</p>
          )}

          {/* Submit Button */}
          <Button
            variant="success"
            onClick={handlePaymentSubmit}
            className="w-100 mt-4"
            disabled={paymentMethod === 'creditCard' && (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv)}
          >
            Complete Payment
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Payment;
