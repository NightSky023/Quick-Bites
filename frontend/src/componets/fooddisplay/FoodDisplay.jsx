import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../fooditem/Fooditem'

function FoodDisplay({category}) {

    const {food_list}=useContext(StoreContext);
  return (

        <div className='mt-[30px]'>
          <h2 className='text-[max(2vw,24px)] font-medium'>Top dishes near you</h2>
            <div className='grid grid-cols-4 mt-[30px] gap-[30px] gap-y-[50px]'>
                {food_list.map((item,index)=>{
                    // console.log(category)
                    if(category==='All'||category===item.category){
                        return(
                            <Fooditem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                        )
                    }
                })}
            </div>
        </div>
  )
}

export default FoodDisplay
