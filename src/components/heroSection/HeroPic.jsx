import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div 
      variants={fadeIn("down",0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount:0}}
      className='h-full flex items-center justify-center'> 
        <img src="../images/logo_main.png" 
            alt="Rohit Dahiya" 
            className='max-h-[500px] w-auto'
        />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[550px] w-auto text-cyan blur-md animate-[spin_30s_linear_infinite]'/>        
        </div>
    </motion.div>
  )
}

export default HeroPic
