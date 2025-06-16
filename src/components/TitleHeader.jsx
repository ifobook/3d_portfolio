import React from 'react'

const TitleHeader = ({title, sub}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='hero-badge'>
        <p className='bg-gradient-to-tr from-[#17EAD9] to-[#6078EA] bg-clip-text text-transparent '>{sub}</p>
        </div>
        <div className='font-semibold md:text-5xl text-3xl text-center font2'>
            {title}
        </div>
    </div>
  )
}

export default TitleHeader