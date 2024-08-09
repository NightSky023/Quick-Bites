import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-[18%] min-h-[100vh] border-[#a9a9a9] border-[1.5px] text-[max(1vw,10px)]'>
      <div className="pt-[50px] pl-[20%] flex flex-col gap-5">
        <NavLink  to='/add' className="flex items-center border gap-3 border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer ">
            <img src={assets.add_icon} alt="" />
            <p>Add Item</p>
        </NavLink>
        <NavLink to='/list' className="flex items-center border gap-3 border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer ">
            <img src={assets.order_icon} alt="" />
            <p>List Item</p>
        </NavLink>
        <NavLink to='/order' className="flex items-center border gap-3 border-[#a9a9a9] border-r-0 py-[8px] px-[10px] cursor-pointer ">
            <img src={assets.order_icon} alt="" />
            <p>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
