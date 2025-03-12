const express = require('express');
const { authMiddleware } = require('../middlewares/userMiddleware');
const CompanyController = require('../controllers/CompanyController');
const upload = require('../middlewares/uploadmiddleware');

const router = express.Router();

router.post('/create_company', authMiddleware, upload.single('image'), CompanyController.createComProfile)

module.exports = router;