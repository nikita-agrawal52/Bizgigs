const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your name is required to contact us"]
    },
    email: {
        type: String,
        required: [true, "Your Email is required to contact us"],

    },
    phone: {
        type: Number,
        required: [true, "your Phone Number is required to contact us"],
        min: [1000000000, "phone number must contain 10 digits"],
        max: [9999999999, "phone number must contain 10 digits"]
    },
    message: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('customer', customerSchema)