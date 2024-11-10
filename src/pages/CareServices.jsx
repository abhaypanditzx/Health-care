import React from 'react'
import doctorPaitent from '../assets/doctorPaitent.png'
const CareServices = () => {
  return (
    <div className='bg-[#222222] min-h-[500px] max-h-[700px] flex justify-around '>
      <div className=" max-w-[800px]  w-[800px]">
     <h1 className='text-white/50 xl:text-6xl uppercase font-bold  '> Experienced Caregivers for Elderly Seniors</h1>
      
      </div>
    <img src={doctorPaitent} className='max-w-[300px]' alt="" />
    </div>
  )
}

export default CareServices