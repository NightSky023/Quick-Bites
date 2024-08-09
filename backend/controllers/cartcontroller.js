import userModel from "../models/userModel.js";

// add to cart 

const addtoCart=async(req,res)=>{
    try {
        let userData=await userModel.findOne({_id:req.body.userId});
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"addtocart error"});
        
    }
}

// remove items from user cart


const removeFromCart=async(req,res)=>{
    try {
        let userData=await userModel.findOne({_id:req.body.userId});
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true,message:"removed from cart"});
        }
        else{
            res.json({success:false,message:"Not available in the cart"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"remove from cart error"});
        
    }
}

//fetch user cart data

const getCart=async(req,res)=>{
    try 
    {
        let userData=await userModel.findOne({_id:req.body.userId});
        let cartData=await userData.cartData;
        res.json({success:true,cartData});
    } 
    catch(error)
    {
        console.log(error);
        res.json({success:false,message:"get cartdata error"});
    }
}

export {addtoCart,removeFromCart,getCart}