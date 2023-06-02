import React from 'react'

const Services = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-36 gap-2">
        <h1 className="font-bold text-3xl">Services</h1>
        <p className="text-[12px] tex-white">what i offer</p>
      </div>
      <div className="flex gap-10 mt-14 justify-center">
        <div className="w-[300px] h-[220px] bg-black rounded-2xl border-[2px] "></div>
        <div className="w-[300px] h-[220px] bg-white rounded-2xl border-[2px] "></div>
    </div>
    </div>
  );
};

export default Services ;