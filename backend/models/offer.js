const mongoose = require('mongoose');

const offerSchema = mongoose.Schema({
    date: {type: Date},
    remarks: {type: String, require:true},
    status : { type: String, 
            enum:["pending", "accepted"],
            default:"pending"}, 
    fullname: {type: String, ref: 'User'},
    },
    { timestamps: true }
);


module.exports = mongoose.model('Offer', offerSchema);