import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
function Verify() {
    const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get("success");
    const orderId=searchParams.get("orderId");
    const {url}=useContext(StoreContext);
    const navigate=useNavigate()

    const verifyPayment=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])
  return (
    <div className='mt-10 min-h-[60vh] grid'>
        <div className='w-[100px] h-[100px] place-self-center border-[5px] border-solid border-[#bdbdbd] border-t-red-500 rounded-[100%] animate-spin'></div>
    </div>
  )
}

export default Verify
