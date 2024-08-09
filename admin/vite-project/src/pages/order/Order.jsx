import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
function Order() {
  const url='http://localhost:8000'
  const [orders,setOrders]=useState([]);
  const fetchAllOrders=async()=>{
    const response=await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      toast.error("Error");
    }
  }

  const statusHandler=async(event,orderId)=>{
    const response=await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div className='order add mt-20 ml-20'>
      <h3>Order Page</h3>
      <div>
        {orders.map((order,index)=>(
          <div className='grid grid-cols-custom items-center gap-8 border my-5 w-full p-5 mx-0 font-sm border-gray-400' key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='font-medium'>
                {order.items.map((item,index)=>{
                  if(index===order.length-1){
                    return item.name+"X"+item.quantity;
                  }
                  else{
                    return item.name+"x"+item.quantity+",";
                  }
                })}
              </p>
              <p className='font-medium' > {order.address.firstName+" "+order.address.lastName}</p>
              <div className='mb-2.5 '>
                <p>{order.address.street}</p>
                <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>
              </div>
              <p className=''>{order.address.phone}</p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)}  value={order.status} className='border-[#f7f8f4]  text-[#f7f8f4] border bg-red-500 w-[max(10vw,120px)] p-2.5 outline-none' name="" id="">Food Processing
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
