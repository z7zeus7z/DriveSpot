const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
require ('dotenv').config();
const userRoutes = require('./Routes/userRoutes');
const carRoutes = require('./Routes/carRoutes');
const path = require('path');
const PORT = process.env.PORT
const app = express();
//MIDWARE
app.use(cors());
app.use(express.json());

//DB
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.error("connection faild" ,err));
//ROUTES
app.use('/api/users',userRoutes);
app.use('/api/cars', carRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT,()=>{
    console.log(` Server running on port ${PORT}`)
})

