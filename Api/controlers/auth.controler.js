import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req,res,next)=>{
   const {userName,email,password} = req.body;
   const hashPassword= bcryptjs.hashSync(password,10)
   const newUser = new User({userName,email,password:hashPassword});
   try {
    
  await newUser.save();
  res.status(201).json("user create sueccessfully")
   } catch (error) {
   next(error);
   }
   
};

// create sign in conroler

export const  signin = async ( req , res , next )=> {

   const { email,password} = req.body;
   try {
      const valideUser = await User.findOne({email});
      if(!valideUser) return next(errorHandler(404,'user not found'));
      const validPassword= bcryptjs.compareSync(password, valideUser.password);
      if(!validPassword) return next(errorHandler(401,'wrong credenial'));
      const token = jwt.sign({id: valideUser._id}, process.env.JWT_SECRET);
      const {password:pass ,...userInfo}= valideUser._doc;
      res
      .cookie('access_token',token,{ httpOnly: true })
      .status(200)
      .json(userInfo);
   } catch (error) {
      next(error);
   }
   
}