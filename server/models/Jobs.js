const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobID: { type: String, required: true, unique: true},
    jobposter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    desc: { type: String, required: true, unique: true},
    qulification: [{ type: String }],
    skills: { type: String, required: true },
    applocations: [{ type, String }],
});

const Job = mongoose.model('Jobs', JobSchema);

module.exports = Job;