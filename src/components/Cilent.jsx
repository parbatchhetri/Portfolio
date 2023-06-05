import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ab from '../assets/ab.jpg';
import images from '../assets/images.jpg';
import vff from '../assets/vff.jpg';
import ji from '../assets/ji.jpg';
const Cilent = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-36 gap-2">
        <h1 className="font-bold text-3xl">My Client Say</h1>
        <p className="text-[12px] text-gray-500 text-xs">Testimonial</p>
      </div>


      <Swiper pagination={true} modules={[Pagination]} className="mySwiper  ">
        <SwiperSlide >
          <div className="flex justify-center items-center gap-5 mt-10 mb-14">
            <div className="w-[250px] h-[200px] bg-gray-400 rounded-2xl border-[2px] flex flex-col items-start p-6 gap-2">
              <img src={images} alt="pp" className="rounded-full w-[50px] h-[50px]"/>
              <h1 className="text-lg font-medium">Pradeep Adhikari</h1>
              <p className="text-xs font-normal  w-44">A really good job, all aspects of the project were followed step by step and with good results.</p>
            </div>
            <div className="w-[250px] h-[200px] bg-gray-400 rounded-2xl border-[2px] flex flex-col items-start p-6 gap-2 ">
            <img src={ji} alt="pp" className="rounded-full w-[50px] h-[50px]"/>
              <h1 className="text-lg font-medium">Eliza Magar</h1>
              <p className="text-xs font-normal  w-44">A really good job, all aspects of the project were followed step by step and with good results.</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center gap-5 mt-10 mb-14">
            <div className="w-[250px] h-[200px] bg-gray-400 rounded-2xl border-[2px] flex flex-col items-start p-6 gap-2 ">
            <img src={ab} alt="pp" className="rounded-full w-[50px] h-[50px]"/>
              <h1 className="text-lg font-medium">Manish Thapaliya</h1>
              <p className="text-xs font-normal  w-44">A really good job, all aspects of the project were followed step by step and with good results.</p>
            </div>
            <div className="w-[250px] h-[200px] bg-gray-400 rounded-2xl border-[2px] flex flex-col items-start p-6 gap-2  ">
            <img src={vff} alt="pp" className="rounded-full w-[50px] h-[50px]"/>
              <h1 className="text-lg font-medium">Prince KC </h1>
              <p className="text-xs font-normal  w-44">A really good job, all aspects of the project were followed step by step and with good results.</p>
            </div>
        </div>
        </SwiperSlide>
        
      
       
      </Swiper>
    </div>
  );
};

export default Cilent;
