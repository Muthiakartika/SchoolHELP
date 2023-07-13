const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    type: {type: String, 
        enum:['resource', 'assistance']},
    date: {type: Date, require:true},   
    status: {type: String, 
        enum:['new', 'closed'],
        default:'new',
        require:true},
    description: {type: String, require:true},
    proposedDate: {type: Date},
    time: {type: String},
    level: {type: String},
    numStudent: {type: Number},
    resourceType: {type: String},
    numRequired: {type: String},
    school: {type: String, ref: 'School'},
    schoolCity: {type: String, ref: 'School'}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Request', requestSchema);