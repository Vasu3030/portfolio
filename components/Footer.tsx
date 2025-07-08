import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'motion/react-client'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">

        <div className='flex mt-16 flex-col justify-center items-center'>
            <p className='md:text-base text-dash md:font-normal font-light'>Copyright © 2025 Vassou AROUN</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a href={profile.link} target='_blank' key={profile.id} className='w-8 h-8 cursor-pointer flex justify-center items-center backdrop:filter backdrop:blur-lg saturate-180 bg-opacity-75 bg-[#0d1a34] rounded-lg border border-[#608190]'>
                        <img src={profile.img} alt={profile.img}  width={20} height={20}/>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer