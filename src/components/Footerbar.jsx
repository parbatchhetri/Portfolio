import React from 'react'
import {BsFacebook,BsInstagram} from 'react-icons/bs'
import {FiTwitter} from "react-icons/fi"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
const Footerbar = () => {
  return (
    <div className='mt-16 border-[3px]'>
      <div className='flex flex-col items-center mt-8'>
        <h1 className='font-semibold text-black text-2xl'> Chhetri</h1>
        <div className='flex  justify-center items-center gap-8 mt-5 '>
          <h1 className='text-gray-500'>About</h1>
          <h1 className='text-gray-500'>Projects</h1>
          <h1 className='text-gray-500'>Testimonials</h1>
        </div>
       
      </div>
      <div className='flex justify-center items-center gap-5 mt-6'>
          <div className='w-[25px] h-[25px] rounded-md bg-black flex justify-center items-center'>
            <BsFacebook className='text-white text-lg '/></div>
            <div className='w-[25px] h-[25px] rounded-md bg-black flex justify-center items-center'>
            <BsInstagram className='text-white text-lg '/></div>
            <div className='w-[25px] h-[25px] rounded-md bg-black flex justify-center items-center'>
            <FiTwitter className='text-white text-lg '/></div>
         </div>
         <div className='flex justify-center items-center mt-10 gap-1'>
          <AiOutlineCopyrightCircle className=' text-[10px]'/>
          <p className='text-gray-500 text-xs font-medium'>ParvatChhetri. All rights reserved</p>
          
         </div>
    </div>
  )
}

export default Footerbar
