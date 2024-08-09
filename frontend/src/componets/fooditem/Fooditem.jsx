import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

function Fooditem({id,name,price,description,image}) {
    const {cartItems,addToCart,removeToCart,url}=useContext(StoreContext);
  return (
    <div className='w-full m-auto rounded-[15px] shadow-sm hover:shadow-2xl hover:shadow-black'>
        <div className='relative'>
            <img className='w-full rounded-r-[15px] rounded-l-[15px]' src={url+"/images/"+image} alt={"this should have been the image"} />
            {
                !cartItems[id]?<img  className='w-[35px] absolute bottom-4  right-4 cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :
                <div className='absolute bottom-4  right-4 cursor-pointer flex items-center gap-[8px] rounded-[50px] p-1.5 bg-white'>
                    <img className='w-5' onClick={()=>removeToCart(id)} src={assets.remove_icon_red}/>
                    <p>{cartItems[id]}</p>
                    <img className='w-5' onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
                </div>
            }
        </div>
        <div className='p-5'>
            <div className='flex justify-between items-center '>
                <p className='text-2xl font-medium'>{name}</p> 
                <img src={assets.rating_starts} alt="" />
            </div>
            <div className='flex justify-between items-center mb-2.5'>
                <p className='text-gray-800'> {description}</p>
                <p className='text-red-500 font-medium'>${price}</p>
            </div>
        </div>
    </div>
  )
}

export default Fooditem
