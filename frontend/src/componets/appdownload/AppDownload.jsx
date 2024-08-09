import React from 'react'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='w-full mt-5' id='app-download'>
      <div className='flex flex-row gap-5 justify-start'>
        <p className='text-3xl mx-auto mb-5'>For Better Experience Download The App Tomato</p>
      </div>
      <div className='flex flex-row gap-20 items-center justify-center'>
        <img className='hover:scale-105 animate-[1s]'src={assets.play_store} alt="" />
        <img className='hover:scale-105 animate-[1s]'src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
