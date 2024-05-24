import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import appointment from "../assets/appointment.jpg"
const BookAppointment = () => {
   const [ChevronIcon, setChevronIcon] = useState(false);
   const [dorpDownContentVisibility, setDorpDownContentVisibility] = useState('hidden')
   return (
      <div className="flex flex-wrap mt-[100px] bg-white  items-center">
         <div className="min-w-[200px] min-h-[200px] "> <img src={appointment} alt="" /></div>
         <div className="flex flex-col  p-[10px] justify-start min-w-[250px] max-xs:w-full bg-white items-start min-h-[250px]">
            <h1 className="text-3xl max-xs:text-xl  font-bold p-4 font-roboto">Book Appointment</h1>
            <form className="flex max-xs:mt-[20px] border-l-[1px] border-gray-600 p-5 xs:mt-[20px]  ml-5 flex-col ">
               <div className="grid grid-cols-2 mt-[10px] max-xs:grid-cols-1 max-xs:gap-2 xs:gap-y-4 xs:gap-x-2 py-4">
                  <div className="flex flex-col"> <label className="text-gray-900 max-xs:text-sm py-0.5 " htmlFor="Fname">first name</label>
                     <input className='bg-gray-100 w-fit  max-w-[300px] max-xs:w-[300px] p-2 placeholder:text-gray-500 max-xs:px-2  max-xs:placeholder:text-xs' type="text" placeholder="first name" /></div>
                  <div className="flex flex-col">
                     <label className="text-gray-900 max-xs:text-sm py-0.5 " htmlFor="Lname">last name</label>
                     <input className='bg-gray-100 w-fit max-w-[300px] max-xs:w-[300px] p-2 placeholder:text-gray-500 max-xs:px-2  max-xs:placeholder:text-xs' type="text" placeholder="last name" /></div>
                  <div className="flex flex-col"><label className="text-gray-900 max-xs:text-sm py-0.5 " htmlFor="Lname">email</label>
                     <input className='bg-gray-100 w-fit  max-w-[300px] max-xs:w-[300px] p-2 placeholder:text-gray-500 max-xs:px-2  max-xs:placeholder:text-xs' type="email" placeholder="email" /></div>
                  <div className="flex flex-col">
                     <label className="text-gray-900 max-xs:text-sm py-0.5 " htmlFor="Lname">contact no.</label>
                     <input className='bg-gray-100 w-fit  max-w-[300px] max-xs:w-[300px] p-2 placeholder:text-gray-500 max-xs:px-2  max-xs:placeholder:text-xs' type="tel" placeholder="mobile no." />
                  </div>
               </div>
               <label htmlFor="date" className="font-roboto pb-4  text-gray-900 text-lg max-xs:mt-[10px] mt-[30px] ">Select Schedule</label>
               <input type="date" p id='date' className=" p-2 max-xs:text-xs  max-xs:w-[300px] max-xs:p-2 bg-gray-100 xl:w-[400px]" />
               <div className="mt-[40px] flex flex-col mt">
                  <label htmlFor="appointmentType" className="font-roboto text-lg text-gray-900 "> Appointment Type</label>
                  <select id='appointmentType' className="p-2  text-gray-500 mt-4 max-xs:text-xs max-xs:p-2 max-w-[400px]">
                     <option value="default" className="p-2  text-gray-500">General Check-up or Primary Care Visit</option>
                     <option value="generalCheckup" className="p-2">General Check-up</option>
                     <option value="PrimaryCareVisit" className="p-2">Primary Care Visit</option>
                  </select >
               </div>

               <button type="submit" className="font-semibold text-white place-self-center max-xs:px-4 max-xs:py-1 max-xs:font-medium  bg-green-400 px-8 rounded-md w-fit mt-5  py-2 hover:bg-gray-900 hover">submit</button>

            </form>
         </div>
      </div>
   )
}
export default BookAppointment;