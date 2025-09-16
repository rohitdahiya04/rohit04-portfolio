import React from 'react';
import { FaRegCircle } from "react-icons/fa";

const ExperienceTop = () => {
  return (
    <div className="h-full py-10 flex flex-wrap items-center justify-center gap-6 sm:gap-20">
      {/* Small circles - Visible only on small screens */}
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-white to-grey items-center justify-center p-2 sm:flex hidden">
        <img src="/images/in.png" alt="Indian Navy" className="w-full h-full object-contain" />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <FaRegCircle className='md:h-[90%] sm:h-[20%] min-h-[110px] w-auto text-orange blur-md animate-[spin_20s_linear_infinite]'/>        
        </div>
      </div>
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-white to-grey items-center justify-center p-2 sm:flex hidden">
        <img src="/images/tcs.png" alt="TCS" className="w-full h-full object-contain" />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <FaRegCircle className='md:h-[90%] sm:h-[20%] min-h-[110px] w-auto text-orange blur-md animate-[spin_20s_linear_infinite]'/>        
        </div>
      </div>
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-white to-grey items-center justify-center p-2 sm:flex hidden">
        <img src="/images/verizon.png" alt="Verizon" className="w-full h-full object-contain" />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <FaRegCircle className='md:h-[90%] sm:h-[20%] min-h-[110px] w-auto text-orange blur-md animate-[spin_20s_linear_infinite]'/>        
        </div>
      </div>
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-white to-grey items-center justify-center p-2 sm:flex hidden">
        <img src="/images/abb.png" alt="ABB" className="w-full h-full object-contain" />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <FaRegCircle className='md:h-[90%] sm:h-[20%] min-h-[110px] w-auto text-orange blur-md animate-[spin_20s_linear_infinite]'/>        
        </div>
      </div>
    </div>
  );
};

export default ExperienceTop;
