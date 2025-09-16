import React from 'react'

export const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[30px] relative'>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
            <img src="../../public/images/aboutme.png" alt="about me image"
                className='h-full w-auto object-cover'
            />
        </div>
        <div className='h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 '></div>
    </div>
  )
}
