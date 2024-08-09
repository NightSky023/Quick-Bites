import  express from "express"
import {loginUser,registerUser} from "../controllers/usercontrol.js";
export const userRouter=express.Router();


userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
