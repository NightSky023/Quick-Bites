import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
function List() {
    const url="http://localhost:8000";
    const [list,setList]=useState([]);
    const fetchList=async()=>{

        const response= await axios.get(`${url}/api/food/list`);
        console.log(response.data);
        if(response.data.success){
            setList(response.data.data);
        }
        else{
            toast.error("error")
        }
    }
    useEffect(()=>{
        fetchList();
    },[])

    const removeFood=async(foodId)=>{
        const response= await axios.post(`${url}/api/food/remove`,{id:foodId});
        await fetchList();
        if(response.data.success){
            toast.success(response.data.message);
        }
        else{
            toast.error("Error");
        }
    }
  return (
    <div className=' p-5 flex flex-col w-[60%] gap-4'>
        <p className='bg-[#f9f9f9] text-xl pl-4 font-medium'> All food list</p>
        <div>
            <div className='grid grid-cols-custom items-center gap-2.5 p-4 border border-[#cacaca] text-lg'>
                <b>Image</b>
                <b>Name</b>
                <b>Price</b>
                <b>Category</b>
                <b>Description</b>
            </div>
            {list.map((item,index)=>{
                return(
                    <div key={index} className='grid grid-cols-custom items-center gap-2.5 p-4 border border-[#cacaca] text-lg'>
                        <img  className='w-[50px]' src={`${url}/images/`+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <p className='cursor-pointer' onClick={()=>{removeFood(item._id)}}>X</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default List
