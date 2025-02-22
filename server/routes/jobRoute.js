const express = require('express');
const { authMiddleware } = require('../middlewares/userMiddleware');
const JobController = require('../controllers/JobController');

const router = express.Router();

router.post('/createjob/:email', authMiddleware, JobController.createJob)
router.get('/alljobs', JobController.alljobs)
router.get('/getcomjobs/:email', authMiddleware, JobController.getmyjobscompany)
router.delete('/deletejob/:email/:id', authMiddleware, JobController.deletejob)
router.post('/applyjob/:id', JobController.applyforajob)

module.exports = router;