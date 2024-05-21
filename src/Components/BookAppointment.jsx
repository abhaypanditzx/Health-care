import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import appointment from "../assets/appointment.jpg"
const BookAppointment = () => {
   const [ChevronIcon, setChevronIcon] = useState(false);
   const [dorpDownContentVisibility, setDorpDownContentVisibility] = useState('hidden')
   return (
      <div className="flex flex-wrap mt-[100px] bg-white items-center">
         <div className="min-w-[200px] min-h-[200px]"> <img src={appointment} alt="" /></div>
         <div className="flex flex-col  p-[10px] justify-start min-w-[250px] max-xs:w-full bg-white items-start min-h-[250px]">
            <h1 className="text-3xl max-xs:text-xl  font-bold p-4 font-roboto">Book Appointment</h1>
            <form className="flex max-xs:mt-[20px] xs:mt-[40px]  ml-5 flex-col ">
               <label htmlFor="date" className="font-roboto pb-4  text-[#4d4d4d] text-lg mt-[10px] ">Select Schedule</label>
               <input type="date" id='date' className=" p-2 max-xs:text-xs bg-gray-100 xl:w-[300px]" />
               <div className="pt-4 flex flex-col mt">
                  <label htmlFor="appointmentType" className="font-roboto text-lg text-[#4d4d4d]  "> Appointment Type</label>
                  <select id='appointmentType' className="p-4  text-gray-500 mt-4 max-xs:text-xs max-xs:p-2 max-w-[400px]">
                     <option value="default" className="p-2  text-gray-500">General Check-up or Primary Care Visit</option>
                     <option value="generalCheckup" className="p-2">General Check-up</option>
                     <option value="PrimaryCareVisit" className="p-2">Primary Care Visit</option>
                  </select >
               </div>
               <div className=" flex flex-col mt-[40px]">
                  < label htmlFor="user Info" className=" font-roboto  text-lg  ">
                     user info
                  </label>
                  <div className="grid grid-cols-2 max-xs:grid-cols-1 max-xs:gap-2 xs:gap-4 py-4">
                     <input className='bg-gray-100 w-fit px-4 py-2 placeholder:text-gray-500 max-xs:px-2  max-xs:placeholder:text-xs' type="text" placeholder="first name" />
                     <input className='bg-gray-100 w-fit px-4 py-2 placeholder:text-gray-500 max-xs:px-2  max-xs:placeholder:text-xs' type="text" placeholder="last name" />
                     <input className='bg-gray-100 w-fit px-4 py-2 placeholder:text-gray-500 max-xs:px-2  max-xs:placeholder:text-xs' type="email" placeholder="email" />
                     <input className='bg-gray-100 w-fit px-4 py-2 placeholder:text-gray-500 max-xs:px-2  max-xs:placeholder:text-xs' type="tel" placeholder="mobile no." />
                  </div>
                  <button type="submit" className="font-semibold text-white bg-green-400 px-8 rounded-md w-fit mt-5  py-2 hover:bg-gray-900 hover">submit</button>
               </div>
            </form>
         </div>
      </div>
   )
}
export default BookAppointment;