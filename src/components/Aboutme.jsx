import React from "react";
import photo1 from "../assets/photo1.jpg";
import { BiAward, BiBriefcaseAlt, BiHeadphone,BiFile } from "react-icons/bi";

const Aboutme = () => {
  return (
    <div>
      <div className="flex flex-col mt-[135px] items-center gap-1">
        <h1 className="font-bold text-3xl">About Me</h1>
        <p className="text-sm text-gray-400">My Introduction</p>
      </div>
      <div className="flex justify-center mt-11">
        <img src={photo1} alt="pp" className="rounded-3xl w-[350px] h-[350px] mt-3" />

        <div className="mt-4 ml-20">
          <div className="flex gap-4">
            <div className="w-[120px] h-[120px] border-[1px] rounded-lg flex flex-col items-center pt-4">
              <BiAward className="text-xl" />
              <h1 className="text-lg ">Experience</h1>
              <p className="text-xs">5 years Working</p>
            </div>

            <div className="w-[120px] h-[120px] border-[1px] rounded-lg flex flex-col items-center pt-4 ">
              <BiBriefcaseAlt className="text-xl" />
              <h1 className="text-lg">Completed</h1>
              <p className="text-xs">5+ projects</p>
            </div>

            <div className="w-[120px] h-[120px] border-[1px] rounded-lg flex flex-col items-center pt-4 ">
              <BiHeadphone className="text-xl" />
              <h1 className="text-lg">Support</h1>
              <p className="text-xs">Online 24/7</p>
            </div>
          </div>
          <h1 className=" w-[350px] font-medium text-gray-500 pt-4">
            Frontend developer, I create web pages with best user interfaces, I
            have years of experience and many client are happy with the project
            carried out.
          </h1>
          <div className='w-[150px] h-[50px] bg-black rounded-2xl mt-8 flex items-center  gap-1 justify-center'>
          <h1 className='font-semibold text-white'>Download CV</h1>
         <BiFile className=' text-white text-2xl '/>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutme;
