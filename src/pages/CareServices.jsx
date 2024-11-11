import React from 'react'
import doctorPaitent from '../assets/doctorPaitent.png'
const CareServices = () => {
  return (
    <div className='bg-[#222222] min-h-[400px] sm:h-[400px] lg:h-[550px]  max-h-[800px] flex justify-around '>
     <div className=" max-w-[800px] h-full p-5 space-y-4">
       <h1 className='text-white sm:text-4xl xl:text-6xl uppercase tracking-wide font-bold  '> Experienced Caregivers & Doctors for Your Family</h1>
       <ul className='text-green-400 capitalize font-semibold list-disc text-2xl '>
          <li className='ml-7 py-1'>fast services</li>
          <li className='ml-7 py-1'>reasonable price</li>
          <li className='ml-7 py-1'>health advice</li>
        </ul>
        <h3 className='text-white text-4xl '>100k+ costumers</h3>
      </div>

         <div className='sm:w-[70%] xl:w-[40%] overflow-hidden '>
           <img src={doctorPaitent} className='self-place-bottom w-[400px]'  alt="" />
         </div>
    </div>
  )
}

export default CareServices