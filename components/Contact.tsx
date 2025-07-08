import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>Êtes-vous intéressé pour <span className='text-blue-400'>collaborer</span> ensemble ?</h1>
                <p className='text-shadow-indigo-200 md:mt-10 my-5 text-center'>
                    Contactez moi et discutons sur comment atteindre votre objectif.
                </p>
                <a href="mailto:arnvassou@gmail.com">
                    <MagicButton 
                        title='Envoyer un mail'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
  )
}

export default Contact