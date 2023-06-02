import React from 'react'
import{ AiOutlineInstagram,AiFillLinkedin} from "react-icons/ai"
import{ VscGithubAlt} from "react-icons/vsc"
import {BsSend} from 'react-icons/bs'
import photo1 from '../assets/photo1.jpg'

const Middlebar = () => {
  return (
    <div className='flex pl-10'>
    <div className='flex flex-col gap-8 pl-40 pt-60'>
   <AiOutlineInstagram className=' text-xl'/>
     <AiFillLinkedin className=' text-xl'/>
      <VscGithubAlt className=' text-xl'/>
      </div>
     <div className='pt-36 pl-28'>
      <div className='flex flex-col gap-6'>
      <h1 className='font-semibold text-5xl'>Parvat</h1>
      <h1 className='font-semibold text-5xl'>Chhetri 👨‍🎓</h1>
     </div>
     <div className='  flex items-center gap-2 pt-7'>
     <hr className=' border-t border-black w-16'></hr>
    <h1 className=''>Software Engineer</h1>
    </div>
    <p className='pt-3 text-gray-500 w-[350px]'>I'm creative Programmer based in chitwan and I'm very passionate and dedicated to my work. </p>
    <div className='w-[150px] h-[60px] bg-black rounded-2xl mt-11 flex items-center  gap-2 justify-center'>
      <h1 className='font-semibold text-white'>Say Hello</h1>
      <BsSend className=' text-white text-xl'/>
     </div>
     </div>
       <img src={photo1} alt='pp' className='rounded-full w-[300px] h-[300px] mt-44 ml-14 object-cover'/>

     
    </div>
  )
}

export default Middlebar