const mongoose = require('mongoose');

const JobApplySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    cv: { type: String, required: true },
    status: { type: String, require: true, enum: ['applied', 'interviewd', 'rejected', 'hired'], default: 'applied' }, 
    applydate: { type: Date, required: true, default: Date.now },
    jobID: { type:mongoose.Schema.Types.ObjectId, ref: "Jobs", required: true},
    jobposter: { type:mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

const JobApply = mongoose.model('JobApply', JobApplySchema);

module.exports = JobApply;