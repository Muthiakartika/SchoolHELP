const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({
    schoolName: {type: String, require:true},
    address: {type: String, require:true},
    city: {type: String, require:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model('School', schoolSchema);