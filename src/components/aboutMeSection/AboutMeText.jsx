import React from 'react'
import {Link} from 'react-scroll';

export const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan md-10'>About Me</h2>
        <p className='text-white text-lg'>
        <br/>I am Rohit Dahiya, a passionate web developer specializing in front-end development with a keen eye for modern, modular, and future-proof designs. My expertise lies in crafting visually appealing, highly responsive, and performance-optimized web applications that align with clients’ visions and business goals. I stay ahead of the latest industry trends and technologies to ensure that every project I work on is not only innovative but also scalable and efficient.

        <br/>Beyond coding, I am deeply committed to continuous learning and knowledge sharing, helping businesses and individuals turn their ideas into reality with cutting-edge web solutions. My approach is centered on understanding client needs, offering tailored solutions, and delivering high-quality results that drive engagement and growth.

        <br/>In addition to my development work, I run a YouTube channel – "Rohit Dahiya", where I share informative travel content to help people explore their dream destinations more efficiently. My passion for travel and technology fuels my creativity, enabling me to bring fresh perspectives to web development.

        <br/>Whether you're a startup looking for a strong digital presence, an entrepreneur seeking a sleek web solution, or an established business aiming to enhance user experience, I can help you build a high-performing web application that meets your needs. Let’s collaborate and bring your vision to life!  

        </p>
        <Link
            to="projects"
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
        >
          <button className='border border-orange rounded-full py-2 px-4 flex items-center mt-10 hover:bg-gradient-to-r from-cyan to-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white'>
            My Projects
          </button>
        </Link>
        
    </div>
  )
}
