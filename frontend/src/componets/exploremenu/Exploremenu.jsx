import React from 'react'
import { menu_list } from '../../assets/assets'
function Exploremenu({category,setCategory}) {
  return (
    <div className='flex flex-col gap-5' id="explore-menu">
      <h1 className='text-[#262626] font-medium text-5xl'>Explore Our Menu</h1>
      <p className='max-w-[60%]'>Choose from the diverse menu featuring a delectable array of dishes crafted with finest of ingredient and culinary expertise.Our Mission is to satisfy your craving and elevate your dininig experience,one delecious meal at a time.</p>
      <div className="flex justify-between items-center gap-8 my-5 mx-0 overflow-x-scroll">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className="">
                    <img className={category===item.menu_name?"border-orange-500 border-4 p-0.5 rounded-full ":"NO "+"w-[7.5vw] min-w-20 cursor-pointer rounded-[50%]"} src={item.menu_image} alt="" />
                    <p className='mt-2.5 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer flex justify-center'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr  className='my-10 mx-0 h-0.5 bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default Exploremenu
