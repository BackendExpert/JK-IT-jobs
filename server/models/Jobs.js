const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobposter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    jobTitle: { type: String, required: true },
    desc: { type: String, required: true },
    qulification: { type: String },
    skills: { type: String, required: true },
    salary: { type: String },
    applications: [
        {
            name: { type: String, required: true },
            email: { type: String, required: true },
            cv: { type: String, required: true },
            status: { type: String, require: true, enum: ['applied', 'interviewd', 'rejected', 'hired'], default: 'applied' }, 
            applydate: { type: Date, required: true, default: Date.now }
        }
    ],
    closingdate: { type: Date, required: true },
}, {timestamps: true});

const Job = mongoose.model('Jobs', JobSchema);

module.exports = Job;