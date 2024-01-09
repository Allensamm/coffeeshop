import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='background'>
        <div className="images flex">
           <img className='' src="/images/logo.png" width={'200px'} alt="" />
        </div>
        <header className=''>
            <h1 className=' text-[128px] font-normal  text-[rgba(255,255,255,0.80)] mb[-140px] coffee--makes '>Coffee Makes Mood</h1>
            <h3 className=' indulge-- font-normal  text-[rgba(255,255,255,0.80)]' >"Indulge in Every Sip: Experience the Richness of Coffee!"</h3>
        </header>
    </div>
  )
}
export default Banner