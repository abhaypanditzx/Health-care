import React from 'react'
import SelectCity from "./SelectCity"
const Nav = () => {
  return (
    <div className='flex z-50 bg-white  sticky  top-0 min-h-[5rem] w-full  items-center justify-around shadow-md'>
      <h1>Hcare</h1>
     <SelectCity/>
      <ul className='flex  gap-x-10 flex-row  '>
        <li>Care Services</li>
        <li>Join HealthCare</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Nav