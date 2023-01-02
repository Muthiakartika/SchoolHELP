const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {type: String, require:true, unique: true},
    password: {type: String, require:true},
    fullname: {type: String, require:true},
    email: {type: String, require:true, unique: true},
    phone: {type: Number, require:true},
    role : { type: String, 
            enum:["volunteer", "schoolAdmin", "schoolHelp"],
            default:"schoolHelp"}, // Using Role model for assigning the user's role
    dob: {type: Date},
    occupation: {type: String},
    staffID: {type: String},
    position: {type: String},
    schoolName:  {type: String, ref: 'School'},
    schoolCity:  {type: String, ref: 'School'},
    },
    { timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);