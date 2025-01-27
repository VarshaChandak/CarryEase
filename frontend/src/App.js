import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Booking from './components/Booking';
import BookingConfirmation from './components/BookingConfirmation';  
import CooliesList from './components/CooliesList';
import PaymentPage from './components/PaymentPage';  // Payment Page import
import PaymentSuccessPage from './components/PaymentSuccessPage';  // Payment Success Page import

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookingconfirmation" element={<BookingConfirmation />} />
          <Route path="/coolies" element={<CooliesList />} />
          <Route path="/payment" element={<PaymentPage />} />  {/* Payment page route */}
          <Route path="/payment-success" element={<PaymentSuccessPage />} />  {/* Payment Success route */}
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
