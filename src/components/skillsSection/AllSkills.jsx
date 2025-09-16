import React from 'react'
import { FaCss3Alt, FaHtml5, FaReact, FaBootstrap, FaPython, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants";

const skills = [
    {
        skill: 'Python',
        icon: FaPython,
    },
    {
        skill: 'HTML',
        icon: FaHtml5,
    },
    {
        skill: 'CSS',
        icon: FaCss3Alt,
    },
    {
        skill: 'JavaScript',
        icon: IoLogoJavascript,
    },
    {
        skill: 'ReactJS',
        icon: FaReact,
    },
    {
        skill: 'TailwindCSS',
        icon: RiTailwindCssFill,
    },
    {
        skill: 'Bootstrap',
        icon: FaBootstrap,
    },
    {
        skill: 'PHP',
        icon: FaPhp,
    },
];


const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item,index)=>{
                return(
                <motion.div
                    variants={fadeIn("up",`0.${index}`)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:false, amount:0}}
                >
                    <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
                </motion.div> 
            );})}
        </div>
    </div>
  );
}

export default AllSkills