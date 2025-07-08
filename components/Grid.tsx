import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
    return (
        <section id="hero" className='py-20'>
            <BentoGrid>
                {gridItems.map
                (({id , title, description, className, img}) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid