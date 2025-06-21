import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'
import Divider from '../components/Divider'

const Testimonials = () => {
    return (
        <div>
            <Divider />

            <section id='testimonials' className='flex w-full  setion-padding xl:px-0 '>
                <div className="w-full h-full md:px-20 px-5">

                    <TitleHeader title='Testimonial' sub='What Clients Say' />

                    <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                        {testimonials.map(({ imgPath: ImgPath, name, mentions, review }, index) => (
                            <GlowCard key={index} card={{ review }}>
                                <div className='flex items-center gap-3'>
                                    <div >
                                        <ImgPath size={17} className='font-bold' />
                                    </div>
                                    <div>
                                        <p className='font-bold'></p>{name}
                                        <p className='text-white-50'>{mentions}</p>
                                    </div>
                                </div>
                            </GlowCard>
                        ))}
                    </div>
                </div>

            </section>
        </div>

    )
}

export default Testimonials