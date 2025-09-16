import React from 'react'
import ProjectsText from './ProjectsText'
import ProjectsImage from './ProjectsImage'
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants";

const ProjectsMain = () => {
  return (
    <div id="projects" className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
        <motion.div
            variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}}
        >
            <ProjectsText/>
        </motion.div>
        <motion.div
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}}
        >
            <ProjectsImage/>
        </motion.div>
    </div>
  )
}

export default ProjectsMain