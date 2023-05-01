const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
    },
    phoneNumber: String,
    dateOfBirth: {
        type: Date, 
        default: Date.now()
    }
});

module.exports = mongoose.model('Person', personSchema);