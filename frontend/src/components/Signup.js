import React, { useState } from 'react';
import { Button, Form, Container, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa'; // Signup icon

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || password !== confirmPassword) {
      setError('Passwords do not match or required fields are empty.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }), // Only send necessary fields
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.msg || 'Signup successful!');
        setTimeout(() => navigate('/login'), 2000); // Redirect to Login after 2 seconds
      } else {
        setError(data.msg || 'An error occurred during signup.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">
          <FaUserPlus /> Sign Up
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSignup}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3 w-100">
            Sign Up
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Signup;
