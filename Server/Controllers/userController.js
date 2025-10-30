const User = require("../Models/User");
const bcrypt = require('bcrypt');


const registerUser = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(400).json({message:"Please fill all fields"});
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
        });
        if (email===process.env.ADMIN_EMAIL){
            newUser.role='admin';
        }
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    }
    catch(error)
    {
        console.error("Register error:",error);
        res.status(500).json({message: 'Server error', error: error.message })
    }

};
const loginUser = async (req,res)=>{
    try
    {
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({message: "Please provide email and password"})
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: "Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid credentials"})
        }
        const {password: _, ...userData}=user._doc;
        res.json({message: "Login successful", user: userData});
    }
    catch(error)
    {
        console.error("Login error:",error);
        res.status(500).json({message: "Server error", error: error.message})
    }
}
module.exports = {registerUser,loginUser};