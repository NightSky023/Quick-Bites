import React, { useState } from 'react'
import Header from '../../componets/header/Header'
import Exploremenu from '../../componets/exploremenu/Exploremenu'
import FoodDisplay from '../../componets/fooddisplay/FoodDisplay';

function Home() {
  const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
