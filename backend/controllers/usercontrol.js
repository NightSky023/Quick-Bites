import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const exist=await userModel.findOne({email});
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"});
        }
        if(!exist){
            return res.json({success:false,message:"User doesnot exist"});
        }

        const isMatch=await bcrypt.compare(password,exist.password);
        if(!isMatch){
            return res.json({success:false,message:"Incorrect password"});
        }
        const token=createToken(exist._id);
        res.json({success:true,token})


    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"login user error"})
    }
}

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

//register user

const registerUser=async(req,res)=>{
    const {name,password,email}=req.body;
    try{
        // checking for existence
        const exist=await userModel.findOne({email});
        if(exist){
            return res.json({success:false,message:"User already exits!!"});
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"});
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"});
        }

        //hashing user password
        const salt=await bcrypt.genSalt(10);
        const hashed=await bcrypt.hash(password,salt);

        const newuser=new userModel({
            name:name,
            email:email,
            password:hashed
        })

        const user=await newuser.save();
        const token=createToken(user._id);
        res.json({success:true,token})
    }

    catch(err){
        console.log(err)
        res.json({success:false,message:"error"})
    }
}

export {loginUser,registerUser}