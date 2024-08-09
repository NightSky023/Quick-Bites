import {foodModel} from "../models/foodModel.js";
import fs from 'fs';


//add food items

 const addFood=async (req,res)=>{
    let image_filename=`${req.file.filename}`;
    const food= new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food added"});
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"addFood controller error"})
    }
}

const listFood=async (req,res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({success:true,data:foods});
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"listFood controller error"});
    }
}

const removeFood=async (req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,(err)=>{
            console.log(err);
        })
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"deleted"})
    }
    catch(err){
        console.log("error in remove food");
        res.json({success:false,message:"removeFood controller error"});
    }
}

export { addFood,listFood,removeFood }