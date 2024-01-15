import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req,res)=>{
   const {userName,email,password} = req.body;
   const hashPassword= bcrypt.hashSync(password,10)
   try {
    const newUser = new User({userName,email,password:hashPassword});
  await newUser.save();
   } catch (error) {
    res.status(500).json(error.message);
   }
   
  res.status(201).json("user create sueccessfully")
};