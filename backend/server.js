import express from "express"
import cors from "cors"
import "dotenv/config"
// import mongoose from "mongoose";
import { connectDB   }  from "./config/db.js";
import { foodRouter  } from "./routes/foodroute.js"
import { userRouter  } from "./routes/userroute.js";
import { cartRouter  } from "./routes/cartroute.js";
import { orderRouter } from "./routes/orderroute.js";


//app config

const app=express();
const port=8000;


//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();



//api endpoint
app.use("/api/food",foodRouter);
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)
app.use("/images",express.static('uploads'));

app.get("/",(req,res)=>{
    res.end("<h1>Api Working</h1>");
})

app.listen(port,()=>{
    console.log(`server has started to listen to http://localhost:${port}`)
})

