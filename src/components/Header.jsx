import React from 'react'
import {BiHome  } from 'react-icons/bi'
import {AiOutlineUser } from 'react-icons/ai'

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
        <BiHome className="ml-3"/>
        <div>Home</div>
      </div>

      <div >
        <BiHome className="ml-3"/>
        <div>Home</div>
      </div>

      <div >
        <BiHome className="ml-3"/>
        <div>Home</div>
      </div>

      <div >
        <BiHome className="ml-3"/>
        <div>Home</div>
      </div>
      

      
    </div>
  </div>
);
}

  

export default Header