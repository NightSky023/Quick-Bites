import React from 'react'

function Header() {
  return (
    <div className='h-[34vw] my-8 mx-auto bg-no-repeat bg-contain relative img'>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s]'>
        <h2 className='text-6xl font-medium text-white placeholder:'>Order your favorite food from the confort of your home</h2>
        <p className='text-white text-[1vw] '>Choose from the diverse menu featuring a delectable array of dishes crafted with finest of ingredient and culinary expertise.Our Mission is to satisfy your craving and elevate your dininig experience,one delecious meal at a time.</p>
        <button className='border-none text-[#747474] font-medium bg-white py-[1vw] px-[2.3vw] text-[1vw] rounded-full'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
