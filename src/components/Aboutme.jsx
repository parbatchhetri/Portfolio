import React from 'react'
import photo1 from '../assets/photo1.jpg'
import{BiAward,BiBriefcaseAlt,BiHeadphone} from 'react-icons/bi'

const Aboutme = () => {
  return (
    <div>
    <div className='flex flex-col mt-[135px] items-center gap-1'>
        <h1 className='font-bold text-3xl'>About Me</h1>
        <p className='text-sm text-gray-400'>My Introduction</p>
        <div className='flex'>
        <img src={photo1} alt='pp' className='rounded-lg w-[200px] h-[200px]'/> 
        <div className='w-[120px] h-[120px] bg-red-500 rounded-lg flex flex-col items-center mt-4 ml-10 pt-4 gap-2'>
            <BiAward className='text-xl'/>
            <h1 className='text-lg '>Experience</h1>
            <p className='text-xs'>5 years Working</p>
            </div>

            <div className='w-[120px] h-[120px] bg-red-500 rounded-lg flex flex-col items-center mt-4 ml-10 pt-4 gap-2'>
            <BiBriefcaseAlt className='text-xl'/>
            <h1 className='text-lg'>Completed</h1>
            <p className='text-xs'>5+ projects</p>
            </div>

            <div className='w-[120px] h-[120px] bg-red-500 rounded-lg flex flex-col items-center mt-4 ml-10 pt-4 gap-2'>
            <BiHeadphone className='text-xl'/>
            <h1 className='text-lg'>Support</h1>
            <p className='text-xs'>Online 24/7</p>
            </div>

        </div>

    </div>


     </div>
  )
}

export default Aboutme