// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware'); // Correct the import

// Example route with middleware protection
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'Profile data' });
});

module.exports = router;
