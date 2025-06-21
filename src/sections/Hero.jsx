import React from 'react'
import { bestSkills, socialImgs, words } from "../constants/index";
import Button from '../components/Button';
import HeroExperience from '../components/heroModels/HeroExperience';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from '../components/AnimatedCounter';
import { div } from 'three/tsl';


const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text, h1',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
        )
    })
    return (
        <section id='hero' className='relative overflow-hidden' >
            <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.png' alt="background" />
            </div>
            <div className="hero-layout">
                {/* LEFT: HERO CONTENT */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className="hero-text">
                            <h1 className='font2 font-extrabold'>Hi, I am Franklin </h1>
                            <h1>

                                <div className="slide">
                                    <div className="wrapper ">
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                {/* <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' /> */}
                                                <span className='bg-gradient-to-tr from-[#17EAD9] to-[#6078EA] bg-clip-text text-transparent font2'>{word.text}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </h1>

                            <p className='md:text-[20px] text-[16px] font-medium md:font-bold font2 lg:w-[50%] text-white-50'>I’m a Full Stack Developer with hands-on experience in building dynamic, responsive web applications using HTML, CSS, JavaScript, ReactJS, PHP, MySQL, and Tailwind CSS. I thrive in team settings, leveraging strong problem-solving and communication skills to deliver results within demanding timelines.</p>

                        </div>
                        <div className="quick-contact md:flex gap-14 ">
                            <div className='social '>
                                <h3 className='font2 md:text-[20px] text-[16px] font-medium md:font-bold'>Find me on</h3>
                                <div className='flex gap-3'>
                                    {socialImgs.map(({ url, SocialIcon, name }, index) => (
                                        <a
                                            key={index}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="card2 relative h-17 w-17 flex items-center justify-center cursor-pointer md:mt-10 mt-5"
                                            aria-label={name}
                                        >
                                            <SocialIcon className="text-2xl text-white size-6 md:size-8" />
                                        </a>
                                    ))}

                                </div>
                            </div>
                            <div className="best-skill pt-7 md:pt-0">
                                <h3 className='font2 text-2xl md:text-[20px] text-[16px] font-medium md:font-bold'>Best Skill</h3>

                                <div className='flex gap-3'>
                                    {
                                        bestSkills.map(({ name, Icon }, index) => (
                                            <div key={index} className='card2 relative h-17 w-17 flex items-center justify-center md:mt-10 mt-5'>
                                                <Icon className="text-2xl text-white  size-6 md:size-8" />

                                            </div>
                                        ))
                                    }

                                </div>

                            </div>
                        </div>
                        <Button className='md:w-80 md:h-16 w-60 h-12 font-bold' id='button' text='See my Work' />
                    </div>
                </header>
                {/* RIGHT: 3D MODEL */}

                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    )
}

export default Hero