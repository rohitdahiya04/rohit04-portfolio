import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMain = () => {
  return (
    <div className='pt-40 pb-16'>
        <div className='flex flex-wrap max-w-[1200px] mx-auto justify-between items-center px-4'>
            <HeroText/>
            <HeroPic/>
        </div>
    </div>
  )
}

export default HeroMain