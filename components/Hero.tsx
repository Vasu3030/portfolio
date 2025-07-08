import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { intro } from '../data/index';

const Hero = () => {
  return (
    <section id="home">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>

        <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-(--color-primary)">
            <div
                className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.4)_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-(--color-primary)"/>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Portfolio conçu avec NextJs
                    </h2>

                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Performance et expérience utilisateur : au cœur des applications modernes'
                    />
                        <TypewriterEffectSmooth words={intro} />

                    <a href="#projects">
                        <MagicButton 
                            title="Voir mes projets"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero