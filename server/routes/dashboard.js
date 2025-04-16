const express = require('express');
const auth = require('../middleware/auth');  // Your JWT middleware to protect routes
const router = express.Router();

// Protected route for the dashboard
router.get('/', auth, (req, res) => {
  res.json({ message: 'Welcome to your dashboard!', userId: req.user.id });
});

module.exports = router;
