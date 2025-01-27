// src/components/Home.js
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <div className="bg-primary text-white text-center py-5" style={{ background: "linear-gradient(to right, #00c6ff, #0072ff)" }}>
        <Container className="px-5">
          <Row>
            <Col md={12}>
              <h1 className="display-3 font-weight-bold mb-3">Welcome to CarryEase</h1>
              <p className="lead mb-4">Your seamless porter service for a stress-free travel experience.</p>
              <Button variant="light" size="lg" href="/signup" className="mt-3 shadow-lg">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4 text-primary">Why Choose CarryEase?</h2>
        <Row>
          {/* Feature 1 */}
          <Col md={4} className="mb-4">
            <Card className="text-center shadow-lg border-light rounded">
              <Card.Body>
                <h3 className="text-success">Easy Booking</h3>
                <p>Book a porter at any time with just a few clicks.</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 2 */}
          <Col md={4} className="mb-4">
            <Card className="text-center shadow-lg border-light rounded">
              <Card.Body>
                <h3 className="text-warning">Real-Time Tracking</h3>
                <p>Track your luggage and porter in real-time via GPS.</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 3 */}
          <Col md={4} className="mb-4">
            <Card className="text-center shadow-lg border-light rounded">
              <Card.Body>
                <h3 className="text-danger">Affordable Rates</h3>
                <p>Get transparent and affordable pricing for every service.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="bg-dark text-white text-center py-4 mt-5">
        <Container>
          <h3>Ready to make your travel easier?</h3>
          <Button variant="info" size="lg" href="/signup" className="mt-3 shadow-lg">Sign Up Now</Button>
        </Container>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-light mt-5">
        <p className="text-muted">&copy; 2024 CarryEase. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
