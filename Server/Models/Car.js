const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  type: { type: String, required: true },
  seats: { type: Number, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }],
});


module.exports=mongoose.model('Car',carSchema);