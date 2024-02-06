import mongoose, { Schema } from "mongoose";

const  userSchema = new mongoose.Schema({
    userName:{
        type :String,
        required: true,
        unique : true
        
    },
    
    email:{
        type :String,
        required: true,
        unique : true
        
    },
    password:{
        type :String,
        required: true
        
        
    },
    avatar:{
        type:String ,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fprofile-icon-png&psig=AOvVaw3brYzP5-9iYGaQL-sIh9fv&ust=1707145492303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMirvtj6kYQDFQAAAAAdAAAAABAE"
    },
},{timestamps:true}
);

const User = mongoose.model("user",userSchema);
export default User;