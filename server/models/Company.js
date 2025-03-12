const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    com_name: { type: String, required: true, unique: true},
    com_email: { type: String, required: true, unique: true},
    com_logo: { type: String, required: true },
    com_cover: { type: String, required: true },
    com_desc: { type: String, required: true },
    com_links: [{ type: String, required: true }],
    
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;