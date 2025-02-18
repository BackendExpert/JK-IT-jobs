const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup)
router.post('/signin', authController.signin)
router.post('/forgetpass', authController.forgetpass)
router.post('/verifyotp/:email', )

module.exports = router;