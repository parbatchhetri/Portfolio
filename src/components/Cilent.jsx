import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Cilent = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-36 gap-2">
        <h1 className="font-bold text-3xl">My Client Say</h1>
        <p className="text-[12px] text-gray-500 text-xs">Testimonial</p>
      </div>


      <Swiper pagination={true} modules={[Pagination]} className="mySwiper  ">
        <SwiperSlide >
          <div className="flex justify-center items-center gap-5 mt-10">
            <div className="w-[250px] h-[150px] bg-white rounded-2xl border-[2px] flex flex-col items-center justify-center gap-3 "></div>
            <div className="w-[250px] h-[150px] bg-black rounded-2xl border-[2px] flex flex-col items-center justify-center gap-3 "></div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center gap-5 mt-10">
            <div className="w-[250px] h-[150px] bg-white rounded-2xl border-[2px] flex flex-col items-center justify-center gap-3 "></div>
            <div className="w-[250px] h-[150px] bg-black rounded-2xl border-[2px] flex flex-col items-center justify-center gap-3 "></div>
        </div>
        </SwiperSlide>
        
      
       
      </Swiper>
    </div>
  );
};

export default Cilent;
