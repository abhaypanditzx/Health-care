import React from 'react'
import { useContext } from "react"
import UserContext from '../UserContext'
import { LiaChevronLeftSolid } from "react-icons/lia";
import { FaLocationDot, FaCreditCard } from "react-icons/fa6";
import { FaHandHoldingHeart, FaMobile } from "react-icons/fa";
import { GiHealthIncrease } from "react-icons/gi";
import { LuStethoscope, } from "react-icons/lu";
import BookAppointment from '../components/BookAppointment';
import Locations from "../components/Locations";
import CostumerReview from '../components/CostumerReview';
import CommonProcdure from '../components/CommonProcedure';
function Home() {
  const GetStartData = [
    {
      Text: 'Find a Doctor  ',
      icon: <LuStethoscope />
    }, {
      Text: 'Find a Location',
      icon: <FaLocationDot />
    }, {
      Text: 'Online Bill Pay',
      icon: <FaCreditCard />
    }, {
      Text: 'Urgent Care    ',
      icon: <GiHealthIncrease />
    }, {
      Text: 'Same Day Care  ',
      icon: <FaHandHoldingHeart />
    }, {
      Text: 'Virtual Care   ',
      icon: <FaMobile />
    }
  ]

  return (
    <div className='h-full relative   w-full z-0'>
      {/* top section  */}
      <div className='doctor-bg w-screen min-h-[310px] flex justify-center py-[100px]  sm:h-[390px] lg:h-[700px]'>
        <div className='bg-white/60 backdrop-blur-sm md:w-[700px] max-xs:w-[280px] flex flex-col p-5 justify-around md:h-[350px] min-h-[150px]  min-w-[200px]'>
          <div className=" text-6xl max-xs:text-2xl font-bold text-shadow font-roboto ">
            <span className='text-white'> HEALTH CARE</span> <span className='text-black'>YOUR FAMILY DOCTOR</span>
          </div>
          <p className='font-readex'>Our 24/7 Caregiving Services provide round-the-clock care for patients who require continuous assistance. Our team of dedicated caregivers ensures that patients receive the necessary support and supervision at any time of the day or night.</p>
        </div>
      </div>

      <div className='flex flex-col justify-center  items-center p-2 '>
        {/* start here section */}
        <div className="flex w-full  flex-col">
          <div className='mb-[60px]'>
            <h2 className='text-green-500 text-3xl capitalize font-bold'>start here</h2>
            <p className='text-black text-xl font-semibold '>for the safest hospital in your area</p>
          </div>
          <ul className=" grid w-full max-xs:place-items-start xs:place-items-center max-xs:py-5   max-xs:px-5  xs:p-24 max-xs:w-[310px]  bg-green-100 rounded-xl  max-xs:grid-cols-1 xs:grid-cols-2 max-xs:gap-[50px] xs:gap-y-[100px] ">
            {
              GetStartData.map((e, index) => {
                return (
                  <li key={index} className='flex  gap-x-4 items-center font-poppins '>
                    <div className='bg-white p-5 rounded-full max-xs:text-base   text-[#1ED225]  text-2xl '>{e.icon} </div>
                    <p className='text-lg text-start w-max'>  {e.Text}</p>  </li>

                )
              })
            }
          </ul>
          {/* book appointment section */}
        </div>
        <BookAppointment />
        <Locations />
        <CommonProcdure />
        <CostumerReview />
      </div>
    </div>
  )
}

export default Home