const mongoose = require ('mongoose');
const {MONGODB} = require('.')

exports.connectDB = ()=>{
    mongoose.connect(MONGODB);
    console.log('database connected');
}