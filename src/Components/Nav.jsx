import React from 'react'

const Nav = () => {
  return (
    <div className='flex min-h-[5rem] w-full  items-center justify-around shadow-md'>
      <h1>Hcare</h1>
      <select name='select city' className='p-1'>
        <option  className=' p-1' value="select city">Select City</option>
      </select>
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