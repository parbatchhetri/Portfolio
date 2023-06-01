import React from 'react'
import {BiHome,BiBriefcaseAlt2  } from 'react-icons/bi'
import {AiOutlineUser,AiOutlineFileImage,AiOutlineSend } from 'react-icons/ai'
import {BsFileEarmarkRichtext } from 'react-icons/bs'

const Header = () => {
  return (
    <div className=" flex pl-44 pt-5 justify-between mr-72">
    <div className="  font-semibold text-lg">Parvat</div>
    <div className="flex gap-8 items-center justify-center font-semibold">
      <div className=' flex flex-col items-center ' >
        <BiHome className=""/>
        <div>Home</div>
      </div>

      <div className=' flex flex-col items-center '>
        <AiOutlineUser className=""/>
        <div>About</div>
      </div>

      <div className=' flex flex-col items-center '>
        <BsFileEarmarkRichtext className=""/>
        <div>Skills</div>
      </div>

      <div className=' flex flex-col items-center '>
        <BiBriefcaseAlt2 className=""/>
        <div>Services</div>
      </div>

      <div className=' flex flex-col items-center '>
        <AiOutlineFileImage className=""/>
        <div>Portfolio</div>
      </div>

      <div className=' flex flex-col items-center '>
        <AiOutlineSend className=''/>
        <div>Contact</div>
      </div>
      
      
    </div>
  </div>
);
}

  

export default Header