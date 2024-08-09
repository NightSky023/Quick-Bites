import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-20' id="footer">
      <div className='w-full grid grid-cols-footer gap-20'>
        <div className='flex flex-col items-start gap-5'>
            <img src={assets.logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quaerat ea molestias. Consequatur distinctio vel nostrum facilis consectetur ipsum perspiciatis sapiente, architecto labore repudiandae, assumenda enim recusandae corrupti sed. Facere suscipit reiciendis saepe quod accusantium.</p>
            <div className='footer-social-item flex flex-row gap-5 '>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='flex flex-col items-start gap-5' >
            <h2 className='text-white text-3xl'>Company</h2>
            <ul>
                <li className='mb-3'>Home</li>
                <li className='mb-3'>About Us</li>
                <li className='mb-3'>Delivery</li>
                <li className='mb-3'>Privacy Policy</li>
            </ul>
        </div>
        <div className='flex flex-col items-start gap-5'>
            <h2 className='text-white text-3xl'>Get in touch</h2>
            <ul>
                <li className='mb-3'>+1-212-211-5723</li>
                <li className='mb-3'>ContactUS@Tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-2 my-5  mx-auto bg-gray-400 border-none'/>
      <p>Copyright 2024 @Tomato.com-All Rights Reserved</p>
    </div>
  )
}

export default Footer
