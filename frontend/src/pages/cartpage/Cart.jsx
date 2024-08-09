import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {cartItems,food_list,removeToCart,getTotal,url}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='mt-24'>
      <div className="">
        <div className="grid grid-cols-cart items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return(
                <div key={index}>
                  <div  className='grid grid-cols-cart items-center text-gray-500 text-[max(1vw,12px)] my-2.5 mx-0 '>
                    <img className="max-w-12"src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeToCart(item._id)} className='cursor-pointer'>X</p>
                  </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                </div>
          )}})}
      </div>
      <div className='mt-20 flex justify-between gap-[max(12vw,20px)]'>
        <div className='flex flex-1 flex-col gap-5'>
          <h2>Cart total</h2>
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
          <button onClick={()=>{navigate('/place')}} className='border-none bg-red-500 w-[max(15vw,20px)] text-white py-[12px] rounded-md cursor-pointer'>Procced to Checkout</button>
        </div>
        <div>
          <p>Enter Promo Code</p>
          <div className='mt-2.5 flex justify-between bg-[#eaeaea] items-center rounded-md'>
              <input type="text" className='border-2 w-[max(15vw,20px] py-[12px] rounded-md cursor-pointer outline-none' placeholder='Promo-Code'/>
              <button className='border-none bg-red-500 w-[max(15vw,20px)] text-white py-[12px] rounded-md cursor-pointer'>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
