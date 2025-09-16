import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown'>
        <p>Creative Designs</p>
        <p className=' md:block sm:hidden'>Details Master</p>
        <p className=' md:block sm:hidden'>Team Work</p>
    </div>
  )
}

export default SubHeroSection