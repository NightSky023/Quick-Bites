import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Place() {
  const {getTotal,token,food_list,cartItems,url}=useContext(StoreContext);

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHanlder=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(pre=>({...pre,[name]:value}));
  }
  
  const placeOrder=async(e)=>{
    e.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData={
      address :data,
      items:orderItems,
      amount:getTotal()+2,
    }
    let response=await axios.post(url+'/api/order/place',orderData,{headers:{token}})
    console.log(response);
    
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
  }
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/cart');
    }
    else if(getTotal()===0){
      navigate('/cart');
    }
  },[token])


 
  return (
    <form onSubmit={placeOrder} className='flex justify-between items-start gap-[50px] mt-[100px]'>
      <div className="w-full max-[max(30%),500px]:">
        <p className="text-4xl font-bold mb-[50px]">Delivery Info</p>
        <div className='flex gap-2.5'>
          <input name='firstName' onChange={onChangeHanlder} value={data.firstName} className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="text" placeholder='First Name'/>
          <input name='lastName' onChange={onChangeHanlder} value={data.lastName}  className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="text" placeholder='Last Name'/>
        </div>
        <input name='email' onChange={onChangeHanlder} value={data.email} className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="email" placeholder='Email'/>
        <input name='street' onChange={onChangeHanlder} value={data.street} className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="text" placeholder='House No'/>
        <div className='flex gap-2.5'>
          <input name='city' onChange={onChangeHanlder} value={data.city} className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="text" placeholder='City'/>
          <input name='state' onChange={onChangeHanlder} value={data.state} className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-2.5'>
          <input name='zipcode' onChange={onChangeHanlder} value={data.zipcode} className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="text" placeholder='Zip-Code'/>
          <input name='country' onChange={onChangeHanlder} value={data.country} className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="text" placeholder='Country'/>
        </div>
        <input name='phone' onChange={onChangeHanlder} value={data.phone} className='mb-4 w-full p-2.5 border border-[#c5c5c5] rounder-[4px] outline-red-500 border-solid' type="text" placeholder='Phone' />
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
        <div className='flex flex-1 flex-col gap-5'>
          <h2 className='text-4xl font-bold mb-[50px] mt-3'>Cart total</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr className='my-2.5'/>
            <div className='flex justify-between text-[#555]'>
              <p>Delivery</p>
              <p>${getTotal()===0?0:2}</p>
            </div>
            <hr className='my-2.5'/>
            <div className='flex justify-between text-[#555]'>
              <p>Total</p>
              <p>${getTotal()===0?0:2+getTotal()}</p>
            </div>
            <hr className='my-2.5'/>
          </div>
          <button  type="submit" className='mt-30px border-none bg-red-500 w-[max(15vw,20px)] text-white py-[12px] rounded-md cursor-pointer'>Procced to pay</button>
        </div>
      </div>
    </form>
  )
}

export default Place
