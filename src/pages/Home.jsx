import React from 'react'
import bannerImage from "../assets/circleDoctor.png"
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
  const { name } = useContext(UserContext)
  return (
    <div className='h-full relative   w-full z-0'>
      {/* top section  */}
      <div className='custom-shape  flex flex-row max-xs:h-[450px]  overflow-hidden max-md:justify-start justify-between'>
        <div className="  max-lg:p-[40px] max-xs:p-[10px] lg:p-[60px] max-xs:mt-[30px] w-fit">
          <h1 className="headline-title font-roboto uppercase font-semibold  max-lg:text-5xl  lg:text-6xl  leading-[80px] tracking-[-2px]  ">
            <span className='text-white '> health care </span>
            <span className="text-[#1D1C1C]">your <br /> family doctor</span>
          </h1>
          <h5 className="text-gray-700 py-4  max-md:text-sm max-lg:mx-2  mx-6 text-lg">
            -we care about you and your loved ones.
          </h5>
          <ul className="  mt-10 max-md:hidden text-white">
            <li className='flex gap-x-4 text-lg text-shadow items-center tracking-wide font-semibold font-roboto '><LiaChevronLeftSolid />24/7 Caregiving Services</li>
            <li className='flex gap-x-4 text-lg text-shadow items-center tracking-wide font-semibold font-roboto '><LiaChevronLeftSolid />Medical Checkup At Home</li>
            <li className='flex gap-x-4 text-lg text-shadow items-center tracking-wide font-semibold font-roboto '><LiaChevronLeftSolid />Hospital Attendant Services</li>
          </ul>
        </div>
        <div className='w-fit p-2'>
          <img src={bannerImage} className='min-w-[200px] max-sm:hidden max-sm:w-[300px] p-4 md:w-[500px]  lg:w-[600px]' alt='doctors image banner' />
          <ul className="  mt-10 max-md:block max-sm:hidden md:hidden text-white">
            <li className='flex gap-x-4 text-lg text-shadow items-center tracking-wide font-semibold font-roboto '><LiaChevronLeftSolid />24/7 Caregiving Services</li>
            <li className='flex gap-x-4 text-lg text-shadow items-center tracking-wide font-semibold font-roboto '><LiaChevronLeftSolid />Medical Checkup At Home</li>
            <li className='flex gap-x-4 text-lg text-shadow items-center tracking-wide font-semibold font-roboto '><LiaChevronLeftSolid />Hospital Attendant Services</li>
          </ul>
        </div>
      </div>

      <div className='p-10 max-xs:p-5'> 
        {/* start here section */}
        <div className="flex w-full p-5 flex-col">
          <div className='mb-[60px]'>
            <h2 className='text-green-500 text-3xl capitalize font-bold'>start here</h2>
            <p className='text-black text-xl font-semibold '>for the safest hospital in your area</p>
          </div>
          <ul className=" grid w-full max-xs:place-items-start xs:place-items-center max-xs:py-5 rounded-xl  max-xs:px-10  xs:p-24  bg-green-100  max-xs:grid-cols-1 xs:grid-cols-2 max-xs:gap-[50px] xs:gap-y-[100px] ">
            {
              GetStartData.map((e, index) => {
                return (
                  <li key={index} className='flex  gap-x-4 items-center font-poppins '>
                    <div className='bg-white p-5 rounded-full text-[#1ED225]  text-2xl '>{e.icon} </div>
                    <p className='text-lg text-start w-max'>  {e.Text}</p>  </li>

                )
              })
            }
          </ul>
          {/* book appointment section */}
        </div>
        <BookAppointment />
        <Locations />
        <CostumerReview />
      </div>
    </div>
  )
}

export default Home