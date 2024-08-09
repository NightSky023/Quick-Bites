import React, { useContext, useState } from 'react' 
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Nav=({Showlogin,setShowLogin})=>{
  const [Menu,setMenu]=useState("Home");

  const {getTotal,token,setToken}=useContext(StoreContext);

  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  const active="pb-0.5 border-b-2 border-red-500";
  return (
    <div className='px-5 flex justify-between items-center'>
      <Link to='/'><img src={assets.logo} alt="" className="w-36" /></Link>

      <ul className='flex gap-5 text-lg text-linkcolor cursor-pointer'>
        <Link to='/' onClick={()=>setMenu("Home")}className={Menu==="Home"?active:""}>Home</Link>
        <a href="#explore-menu"onClick={()=>setMenu("Menu")}className={Menu==="Menu"?active:""}>Menu</a>
        <a href='#app-download'onClick={()=>setMenu("Mobile-App")}className={Menu==="Mobile-App"?active:""}>Mobile App</a>
        <a href="#footer"onClick={()=>setMenu("Contact-Us")}className={Menu==="Contact-Us"?active:""}>Contact Us</a>
      </ul>

      <div className='flex items-center gap-10 text-linkcolor cursor-pointer'>
        <img src={assets.search_icon} alt="" />
        <div>
          <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
          {getTotal()!=0?<div className='absolute min-h-2 min-w-2 bg-red-500 rounded-lg'></div>:<div></div>}
        </div>
        {!token?
        <button onClick={()=>{setShowLogin(true)}} className='bg-transparent text-base text-linkcolor border border-red-500 py-2.5 px-8 rounded-3xl
        hover:bg-gray-100'>Sign In</button>:
        <div className='relative group'>
          <img src={assets.profile_icon} alt="" />
          <ul className='w-[200px] absolute hidden right-0 z-10 group-hover:flex group-hover:flex-col group-hover:bg-[#fff2ef] group-hover:py-4 group-hover:px-6 group-hover:gap-2.5 group-hover:rounded-lg group-hover:border-solid group-hover:border'>
            <li onClick={()=>navigate('/myorders')} className='flex items-center gap-2.5 cursor-pointer hover:text-red-500'><img className='w-[20px]' src={assets.bag_icon} alt="" /><p>Order</p></li>
            <hr />
            <li onClick={logout} className='flex items-center gap-2.5 cursor-pointer hover:text-red-500'><img className='w-[20px]' src={assets.logout_icon} alt="" /><p>Log Out</p></li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Nav
