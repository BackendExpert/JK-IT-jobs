const mongoose = require('mongoose');

const UserPassOtpSchema = new mongoose.Schema({
    email: { type: String, required: true},
    otp: { type: String, required: true},
    expire_at: { 
        type: Date, 
        required: true,
        index: { expireAfterSeconds: 0}
    },
}, {timestamps: true });

const UserPassOtp = mongoose.model('UserPassOtp', UserPassOtpSchema);

module.exports = UserPassOtp;