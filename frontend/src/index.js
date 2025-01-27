import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap

// Use createRoot() instead of render() in React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
