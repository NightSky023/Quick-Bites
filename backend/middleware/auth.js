import jwt from "jsonwebtoken";



export const authMiddleware=async (req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({success:false,message:"Not authorised Try Loging in"})
    }
    try {
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=token_decode.id;
        next();
    } catch (error) {
        console.log("Error auth.js");
        return res.json({success:false,message:"Unidentified Error"})
    }
}