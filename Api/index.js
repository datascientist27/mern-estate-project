import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import useRouter from './routes/user.route.js';


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
app.listen(3000,()=>{
    console.log("app is running on port 3000")
});

app.use("/Api/user",useRouter);
