import React, { useState } from 'react';
import { Button, Form, Container, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.msg); 
        navigate('/booking'); 
      } else {
        setError(data.msg || 'Login failed.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">
          <FaSignInAlt /> Login
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
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

          <Button variant="primary" type="submit" className="mt-3 w-100">
            Login
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
