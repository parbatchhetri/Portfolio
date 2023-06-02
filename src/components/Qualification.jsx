import React from 'react'
import {BsSend, BsArrowRightShort,BsWhatsapp,BsMessenger} from 'react-icons/bs'
import {BiMailSend} from 'react-icons/bi'

const Qualification = () => {
  return (
    <div>
       <div className="flex flex-col mt-[135px] items-center gap-1">
        <h1 className="font-bold text-3xl">Get in Touch</h1>
        <p className="text-sm text-gray-400">Contact Me</p>
      </div>
      <div className=' flex gap-16 justify-center mt-8'>
        <div className='flex flex-col gap-5 items-center'>
        <h1 className=''>Talk to me</h1>
        <div className='w-[230px] h-[120px] bg-white rounded-xl border-[1.5px] flex flex-col justify-center items-center'>
          <BiMailSend className=''/>
          <h1 className=''>Email</h1>
          <p className=''>user@gmail.com</p>
          <div className='flex '>
          <p className='text-xs '>write me</p>
          <BsArrowRightShort className='text-sm'/>
          </div>
           </div>
           <div className='w-[230px] h-[120px] bg-white rounded-xl border-[1.5px] flex flex-col justify-center items-center'>
          <BsWhatsapp className=''/>
          <h1 className=''>Whatsapp</h1>
          <p className=''>9865027677</p>
          <div className='flex '>
          <p className='text-xs '>write me</p>
          <BsArrowRightShort className='text-sm'/>
          </div>
           </div>
           <div className='w-[230px] h-[120px] bg-white rounded-xl border-[1.5px] flex flex-col justify-center items-center'>
          <BsMessenger className=''/>
          <h1 className=''>Messenger</h1>
          <p className=''>user123.fb</p>
          <div className='flex '>
          <p className='text-xs '>write me</p>
          <BsArrowRightShort className='text-sm'/>
          </div>
           </div>
       
          </div>



       
        <div className='flex flex-col gap-5'>
        <h1 className='ml-20'>Write me a project</h1>
        <div className='w-[300px] h-[50px] bg-white rounded-xl border-[3px]'> 
        <h1 className='mt-2 ml-3 text-gray-400'>Insert Your Name</h1>
        </div>
        <div className='w-[300px] h-[50px] bg-white rounded-xl border-[3px]'>
        <h1 className='mt-2 ml-3 text-gray-400'>Insert Your Email</h1>
        </div>
        <div className='w-[300px] h-[230px] bg-white rounded-xl border-[3px]'>
         <h1 className='mt-2 ml-3 text-gray-400'> Write your Project</h1>
        </div>
        <div className='w-[180px] h-[50px] bg-black rounded-2xl flex items-center  gap-2 justify-center'>
          <h1 className='font-semibold text-white'>Send Messages</h1>
        <BsSend className=' text-white text-xl'/>
          </div>

        </div>
      </div>
    </div>

    
  )
}

export default Qualification