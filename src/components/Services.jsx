import React from 'react'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import{BsArrowRightShort} from 'react-icons/bs'
import {BiCode} from 'react-icons/bi'
import {RxPencil2} from 'react-icons/rx'
const Services = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-36 gap-2">
        <h1 className="font-bold text-3xl">Services</h1>
        <p className="text-[12px] tex-white">what i offer</p>
      </div>
      <div className="flex gap-10 mt-12 justify-center">
        <div className="w-[200px] h-[200px] bg-white  shadow-lg ">
          <MdOutlineSpaceDashboard className='text-2xl mt-14 ml-8'/>
          <h1 className='w-10 ml-8 mt-4 text-base font-semibold'>Product Designer</h1>
          <div className='flex mt-2'>
          <p className='text-xs ml-8'>View More</p>
          <BsArrowRightShort className='text-sm'/>
          </div>
          </div>

          <div className="w-[200px] h-[200px] bg-white  shadow-lg ">
          <BiCode className='text-2xl mt-14 ml-8'/>
          <h1 className='w-10 ml-8 mt-4 text-base font-semibold'>Ui/Ux Designer</h1>
          <div className='flex mt-2'>
          <p className='text-xs ml-8'>View More</p>
          <BsArrowRightShort className='text-sm'/>
          </div>
            </div>

        <div className="w-[200px] h-[200px] bg-white shadow-lg">
        <RxPencil2 className='text-2xl mt-14 ml-8'/>
          <h1 className='w-10 ml-8 mt-4 text-base font-semibold'>Visual Designer</h1>
          <div className='flex mt-2'>
          <p className='text-xs ml-8'>View More</p>
          <BsArrowRightShort className='text-sm'/>
          </div>
        </div>

    </div>
    </div>
  );
};

export default Services ;