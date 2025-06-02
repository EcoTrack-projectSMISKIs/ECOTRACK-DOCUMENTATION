const express = require('express');
const router = express.Router();
const asisAPIcontroller = require('../controllers/asisAPIcontroller');
const authenticateUser = require('../middleware/authenticateUser');

// Get recommendation based on specific plug ID
router.post('/:id/recommend', authenticateUser, asisAPIcontroller.getRecommendationByPlug);

module.exports = router;
