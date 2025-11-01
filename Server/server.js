const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
require ('dotenv').config();
const userRoutes = require('./Routes/userRoutes');
const carRoutes = require('./Routes/carRoutes');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT
const app = express();
//MIDWARE
app.use(cors({
  origin: ['https://drive-spot.vercel.app'], // your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());
const uploadsDir = path.join(__dirname, 'uploads/cars');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Created uploads/cars folder automatically');
}
//DB
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.error("connection faild" ,err));
//ROUTES
app.use('/api/users',userRoutes);
app.use('/api/cars', carRoutes);
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use('/public', express.static(path.resolve(__dirname, 'public')));


app.get('/test-upload', (req, res) => {
  res.send('Uploads folder is configured!');
});

app.listen(PORT,()=>{
    console.log(` Server running on port ${PORT}`)
})

