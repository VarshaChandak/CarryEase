require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const authRoutes = require('./Routes/auth');
const bookingRoutes = require('./Routes/bookings');
const cooliesRoutes = require('./Routes/coolies');

const app = express(); // Declare the app variable

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests (no need for body-parser anymore)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Root test route
app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/coolies', cooliesRoutes);

// MongoDB connection
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('MongoDB URI is not defined. Please check your .env file.');
  process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error: ', err);
    process.exit(1);
  });
