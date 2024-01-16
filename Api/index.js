import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import useRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config()

mongoose
.connect(process.env.MONGO)
.then(
    ()=>{
        console.log("connected successfully to the db");
    }
)
.catch(
    (err)=>{
        console.log(err);
    }
);


const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("app is running on port 3000")
});

app.use("/Api/user",useRouter);
app.use("/Api/auth",authRouter);
app.use((err,req,res,next)=>{
    const statuscode = err.statuscode||500;
    const message = err.message||'server internal error'

    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
        
    })
})