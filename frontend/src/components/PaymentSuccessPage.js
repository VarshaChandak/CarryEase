import React from 'react';
import { Container, Card } from 'react-bootstrap';

const PaymentSuccessPage = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-success">Payment Successful</h2>

      <Card className="shadow-lg rounded-lg mb-4">
        <Card.Body>
          <h5 className="text-center text-secondary">Your payment was successful!</h5>
          <p>Your booking is confirmed and we will notify you with the next steps shortly.</p>
          <p>Thank you for choosing CarryEase!</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentSuccessPage;
