import React from 'react'
import { abilities } from '../constants'
import { div } from 'three/tsl'
import TitleHeader from '../components/TitleHeader'
import Divider from '../components/Divider'

const FeatureCards = () => {
  return (
    <div>
      <Divider />

      <div className='w-full padding-x-lg  relative'>
        <TitleHeader title="What i Do" sub='Core Competencies' />
        <div className='max-auto grid-3-cols mt-17'>
          {abilities.map(({ AbilityIcon, title, desc }) => (
            <div key={title} className='card-border rounded-xl p-8 gap-4 flex flex-col card2'>
              <div className="size-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#17EAD9] to-[#6078EA] text-white">
                <AbilityIcon className="size-8" />
              </div>

              <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
              <p className='text-white-50 text-lg'>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>

  )
}

export default FeatureCards