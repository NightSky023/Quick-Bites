import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
function Add() {
    const url="http://localhost:8000";
    const [img,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        price:"",
        description:"",
        category:"Salad"
    });

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const onSubmithandler=async(event)=>{
        event.preventDefault();
        console.log(data);
        const formdata=new FormData();
        formdata.append("name",data.name);
        formdata.append("description",data.description);
        formdata.append("price",Number(data.price));
        formdata.append("category",data.category);
        formdata.append("image",img);
        const response=await axios.post(`${url}/api/food/add`,formdata);
        if(response.data.success){
            setData({
                name:"",
                price:"",
                description:"",
                category:"Salad"
            })
            setImage(false);
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message)
        }
    }
    //  useEffect(()=>{
    //     console.log(data);
    //  },[data])
  return (
    <div className='w-[70%] ml-[max(5vw,20px)] mt-[50px] text-[#6d6d6d] text-base'>
      <form className='gap-5 flex flex-col' onSubmit={onSubmithandler}>
        <div className='flex flex-col gap-2.5'>
            <p>Upload image</p>
            <label htmlFor="image">
                <img className='w-32'src={img?URL.createObjectURL(img):assets.upload_area} alt="" />
            </label>
            <input  onChange={(e)=>{setImage(e.target.files[0])}} type="file" id='image' hidden required />
        </div>
        <div className='flex flex-col w-[max(40%,280px] gap-2.5'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} className='p-2.5' type="text" name='name' placeholder='Name'/>
        </div>
        <div  className='flex flex-col w-[max(40%,280px] gap-2.5'>
            <p>Product description</p>
            <textarea  onChange={onChangeHandler} value={data.description} className='p-2.5'  name="description" rows="6" placeholder='Write content here'></textarea>
        </div>
        <div className='flex gap-8'>
            <div className='flex flex-col gap-2.5'>
                <p>Product category</p>
                <select onChange={onChangeHandler}  className='max-w-[120px] p-2.5' name="category">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className='flex flex-col gap-2.5'> 
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} className='max-w-[120px] p-2.5' type="number" name='price' placeholder='$20'/>
            </div>
        </div>
        <button className='bg-black text-white cursor-pointer border-none max-w-32 p-2.5' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Add
