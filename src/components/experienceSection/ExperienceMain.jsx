import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import SSExperience from './SSExperience'
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="collaborations" className='max-w-[1200px] mx-auto px-4'>
        <motion.div
          variants={fadeIn("down",0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once:false, amount:0}}
        >
          <ExperienceText/>
        </motion.div>
        <motion.div
          variants={fadeIn("right",0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once:false, amount:0.7}} 
          className='sm:hidden lg:block'>
            <ExperienceTop/>
        </motion.div>
        <motion.div 
          variants={fadeIn("right",0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once:false, amount:0}}
          className='sm:block lg:hidden'>
            <SSExperience/>
        </motion.div>
    </div>
  )
}

export default ExperienceMain