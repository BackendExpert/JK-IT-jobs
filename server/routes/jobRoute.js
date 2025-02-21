const express = require('express');
const { authMiddleware } = require('../middlewares/userMiddleware');
const JobController = require('../controllers/JobController');

const router = express.Router();

router.post('/createjob', authMiddleware, JobController.createJob)

module.exports = router;