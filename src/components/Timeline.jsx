import React from 'react'
import{LuGraduationCap} from 'react-icons/lu'
import{BiBriefcaseAlt2,BiCalendar} from 'react-icons/bi'

const Timeline = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-36 gap-2">
        <h1 className="font-bold text-3xl">Qualification</h1>
        <p className="text-[12px] text-gray-500 text-xs">my personal journey</p>
      </div>
      <div className='flex justify-center items-center gap-7 mt-10'>
        <div className='flex justify-center items-center gap-1'>
          <LuGraduationCap className=''/>
          <h1 className='text-lg font-medium '> Education </h1>
            </div>
            <div className='flex justify-center items-center gap-1'>
          <BiBriefcaseAlt2 className=''/>
          <h1 className='text-lg font-medium '> Experience </h1>
            </div>
         </div>

         <div className=''>
          <h1 className='text-sm text-black font-semibold'>Web Design</h1>
          <p className='text-[10px] text-gray-500 font-semibold'>Tribhuvan University</p>
          <div className=''>
            <BiCalendar className=''/>
            <p className=''>2022-Present</p>

          </div>
         </div>


    </div>
  )
}

export default Timeline