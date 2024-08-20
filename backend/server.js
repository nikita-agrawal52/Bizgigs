const express = require('express');
const { connectDB } = require('./config/db');
const {PORT} = require('./config');
const customerRoute = require('./routes/customerROutes');
const cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json());
connectDB();



app.use("/api/v1",customerRoute);


app.listen(PORT,()=>[
    console.log('server started')
])