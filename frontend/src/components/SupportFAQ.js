// src/components/SupportFAQ.js
import React from 'react';

const SupportFAQ = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Support & FAQ</h2>
      <h4>Frequently Asked Questions</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>How do I book a porter?</strong>
          <p>To book a porter, simply enter your details and select the porter you need.</p>
        </li>
        <li className="list-group-item">
          <strong>What if I need to cancel my booking?</strong>
          <p>You can cancel your booking through the app or contact support for assistance.</p>
        </li>
        <li className="list-group-item">
          <strong>How do I pay for the service?</strong>
          <p>You can pay through various online payment options available in the app.</p>
        </li>
        <li className="list-group-item">
          <strong>How do I contact support?</strong>
          <p>You can reach our support team through the 'Contact Us' section or email us at support@carryease.com.</p>
        </li>
      </ul>
    </div>
  );
};

export default SupportFAQ;
