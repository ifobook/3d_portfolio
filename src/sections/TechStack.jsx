import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { backendSkills, frontendSkills, techStackIcons, techStackImgs } from '../constants'
import TechIcon from '../components/models/techLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SkillBar from '../components/SkillBar';


const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }
            }
        )
    }, [])
    return (
        <div id='skills' className='flex-center section-padding'>
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title='Professional Skills' sub='5+ Years of Experience' />

                <div className="flex flex-col md:flex-row gap-10 justify-between mt-16">
                    {/* Frontend */}
                    <div className="w-full md:w-1/2">
                        <h4 className="text-pink-600 text-sm mb-2 font2 font-bold">2017-Date</h4>
                        <h2 className="text-3xl font-black mb-5">Frontend Development</h2>
                        {frontendSkills.map(({ skill, percent }) => (
                            <div className="tech-card font2">
                                <SkillBar key={skill} skill={skill} percent={percent} />
                            </div>
                        ))}
                    </div>

                    {/* Backend */}
                    <div className="w-full md:w-1/2">
                        <h4 className="text-pink-600 text-sm mb-2 font2 font-bold">2017-Date</h4>
                        <h2 className="text-3xl font-black mb-5">Backend Development</h2>
                        {backendSkills.map(({ skill, percent }) => (
                            <div className="tech-card font2">
                                <SkillBar key={skill} skill={skill} percent={percent} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TechStack