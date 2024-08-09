import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"
function SignUp({setShowLogin}) {

  const [curstate,setCurState]=useState("Sign Up");
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  const {url,setToken}=useContext(StoreContext);
  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(prev=>({
      ...prev,[name]:value
    }))
  }

  const onLogin=async(e)=>{
    e.preventDefault();
    let NewUrl=url;
    if(curstate==='Login'){
      NewUrl+="/api/user/login";
    }
    else{
      NewUrl+="/api/user/register";
    }
    const response=await axios.post(NewUrl,data);
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false);
    }
    else{
      alert(response.data.message)
    }

  }
  return (
    <div className='absolute z-10 w-full h-full bg-[#00000090] grid'>
      <form  onSubmit={onLogin}className='place-self-center w-[max(20vw,330px)]  text-[#808080] bg-white flex flex-col gap-6 py-[25px] px-[30px] rounded-[8px] text-sm animate-[fadeIn_0.5s]'>
        <div className='flex justify-between items-center text-black'>
          <h2>{curstate}</h2>
          <img className="w-[16px] cursor-pointer" onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
        </div>
        <div className='flex flex-col gap-5'>
          {curstate==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} className="outline-none border-[#c9c9c9] border-[1.5px] p-2.5 rounded-lg" type="text" placeholder='Name' required/>}
          <input  name='email' onChange={onChangeHandler} value={data.email} className="outline-none border-[#c9c9c9] border-[1.5px] p-2.5 rounded-lg" type="email" placeholder='Email' required/>
          <input  name='password' onChange={onChangeHandler} value={data.password} className="outline-none border-[#c9c9c9] border-[1.5px] p-2.5 rounded-lg" type="password" placeholder='Password' required />
        </div>
        <button type='submit' className='border-none p-2.5 rounded-md bg-red-500 text-[15px] text-white'>{curstate==="Sign Up"?"Create account":"Login"}</button>
        <div className='flex items-start gap-[8px] -mt-[15px]'>
          <input type="checkbox" required />
          <p>By continuing,i agree to the terms of use& privacy policy</p>
        </div>
        {curstate==='Login'?<p className='animate-[fadeIn_3s]'>Create a new account?<span className='text-red-500 font-medium' onClick={()=>{setCurState("Sign Up")}}> Click here</span></p>
        :<p className='animate-[fadeIn_3s]'>Already have a account?<span className='text-red-500 font-medium' onClick={()=>{setCurState("Login")}}> Login here</span></p>}
      </form>
    </div>
  )
}

export default SignUp
