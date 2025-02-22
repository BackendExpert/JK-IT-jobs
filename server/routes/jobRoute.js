const express = require('express');
const { authMiddleware } = require('../middlewares/userMiddleware');
const JobController = require('../controllers/JobController');

const router = express.Router();

router.post('/createjob/:email', authMiddleware, JobController.createJob)
router.get('/alljobs', JobController.alljobs)

module.exports = router;