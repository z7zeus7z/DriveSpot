const Car = require('../Models/Car');

const addCar = async(req,res)=>{
    try{
        const {make,model,year,type,seats,price}=req.body;
        const images =req.files ? req.files.map(file=>file.filename):[];

        const newCar = new Car({make,model,year:Number(year),type,seats:Number(seats),price:Number(price),images});
        await newCar.save();
        res.status(201).json({message:'Car listed successfully ',car:newCar});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({message: 'Server error', error: err.message})
    }
}
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports={addCar,getCars,deleteCar};