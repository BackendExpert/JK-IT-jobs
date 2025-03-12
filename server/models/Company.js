const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    com_name: { type: String, required: true, unique: true},
    com_email: { type: String, required: true, unique: true},
    com_logo: { type: String, required: true },
    com_cover: { type: String, required: true },
    com_desc: { type: String, required: true },
    com_links: {
        facebook: { type: String, default: '' },
        linkedin: { type: String, default: '' },
        twitter: { type: String, default: '' },
        instagram: { type: String, default: '' },
        website: { type: String, default: '' },
        other: { type: String, default: '' }
    }
}, { timestamps: true });

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;