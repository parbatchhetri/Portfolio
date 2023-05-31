import React from 'react'
import {BiHome,BiBriefcaseAlt2  } from 'react-icons/bi'
import {AiOutlineUser,AiOutlineFileImage,AiOutlineSend } from 'react-icons/ai'
import {BsFileEarmarkRichtext } from 'react-icons/bs'

const Header = () => {
  return (
    <div className=" flex pl-44 pt-5 justify-between mr-80">
    <div className="  font-bold ">Parvat</div>
    <div className="flex gap-8 items-center justify-center">
      <div >
        <BiHome className="ml-3"/>
        <div>Home</div>
      </div>

      <div >
        <AiOutlineUser className="ml-3"/>
        <div>Home</div>
      </div>

      <div >
        <BsFileEarmarkRichtext className="ml-3"/>
        <div>Home</div>
      </div>

      <div >
        <BiBriefcaseAlt2 className="ml-3"/>
        <div>Home</div>
      </div>

      <div >
        <AiOutlineFileImage className="ml-4"/>
        <div>Services</div>
      </div>

      <div >
        <AiOutlineSend className='ml-4'/>
        <div>Portfolio</div>
      </div>
      
      
    </div>
  </div>
);
}

  

export default Header