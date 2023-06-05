import React from 'react'

const Cilent = () => {
  return (
    <div>
         <div className="flex flex-col items-center mt-36 gap-2">
        <h1 className="font-bold text-3xl">My Client Say</h1>
        <p className="text-[12px] text-gray-500 text-xs">Testimonial</p>
      </div> 
      <div className="flex gap-10 mt-12 justify-center">
      <div className="w-[300px] h-[200px] bg-white rounded-2xl border-[2px] flex flex-col items-center justify-center gap-3 "></div>
      <div className="w-[300px] h-[200px] bg-white rounded-2xl border-[2px] flex flex-col items-center justify-center gap-3 "></div>
    </div>
    </div>
  )
}

export default Cilent