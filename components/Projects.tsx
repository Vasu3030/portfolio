import React from 'react'
import { projects } from '@/data'
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from 'react-icons/fa';
import Link from "next/link";
import Image from 'next/image';

const Projects = () => {
    return (
        <section id="projects" className='py-20'>
            <h1 className='text-center font-bold text-4xl'>Mes <span className='text-blue-400'>expériences</span></h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map((project) => (
                    <Link key={project.id} href={`/projects${project.link}?projectId=${project.id}`} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={project.title}>
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt='bg-img'/>
                                </div>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className='z-10 absolute top-0 left-0 w-full h-full object-cover rounded-3xl'
                                />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {project.title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {project.des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {project.iconLists.map((icon, index) => (
                                        <div
                                            key={icon}
                                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                        >
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-blue-400'>
                                        En savoir plus
                                    </p>
                                    <FaLocationArrow className='ms-3' color="#2196F3" />
                                </div>
                            </div>
                        </PinContainer>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Projects