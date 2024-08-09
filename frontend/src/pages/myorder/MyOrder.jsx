import React, { useContext, useDebugValue, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

function MyOrder() {
    const {url,token}=useContext(StoreContext);
    const [data,setData]=useState([]);

    const fetchOrders=async()=>{
        const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[token])
  return (
    <div className='my-10 mx-0'>
      <h2 className='text-3xl'>My Orders</h2>
      <div className='flex flex-col  gap-5 mt-6'>
        {
            data.map((order,index)=>{
                return(
                    <div className='grid grid-cols-secondary gap-6 items-center text-sm text-[#454545] border border-solid border-gray-400' key={index}>
                        <img className='w-[50px]'src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name+"x"+item.quantity;
                            }
                            else{
                                return item.name+"x"+item.quantity+",";
                            }
                        })}</p>
                        <p>${order.amount}</p>
                        <p>Items:{order.items.length}</p>
                        <p><span className='text-red-500'>&#x25cf;</span><b className='font-medium'>{order.status}</b></p>
                        <button onClick={fetchOrders} className='bg-red-300 my-4  rounded text-white h-8 mx-3 cursor-pointer'>Track Order</button>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default MyOrder
