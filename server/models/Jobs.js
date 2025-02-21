const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobID: { type: String, required: true, unique: true},
    jobposter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    desc: { type: String, required: true, unique: true},
    qulification: [{ type: String }],
    skills: { type: String, required: true },
    salary: { type: Number },
    applications: [
        {
            name: { type: String, required: true },
            email: { type: String, required: true },
            cv: { type: String, required: true } 
        }
    ],
    closingdata: { type: Date, required: true },
}, {timestamps: true});

const Job = mongoose.model('Jobs', JobSchema);

module.exports = Job;