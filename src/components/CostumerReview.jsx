import ReviewCard from "./ReviewCard"
import { IoStar, IoStarOutline } from "react-icons/io5";

import { useContext } from 'react';
import userContext from "../UserContext"
const CostumerReview = () => {
  const { costumerData } = useContext(userContext)
  return (
    <div className="p-10 ">
      <div className='mt-[200px] max-lg:bg-none bg-red-bg   bg-no-repeat relative  bg-contain min-h-[700px]  h-full w-full py-10'>
        <div className="flex relative top-[100px] flex-wrap justify-around">
          {
            costumerData.map((e, index) => {
              return (
                <div key={index}>

                  <div className='m-2 relative lg:h-[400px] md:h-[300px] lg:w-[300px] sm:w-[200px] h-[400px] bg-white shadow-md '>
                    <div className="relative xs:h-[100px] sm:h-[140px] lg:h-[230px]  w-full max-sm:bg-red-400  ">
                      <img src={e.img} alt="" className='absolute top-[-30px] h-auto w-auto right-[-20px]' />
                    </div>
                    <div className="flex  md:p-2 lg:p-4 flex-col">
                      <b className=' md:text-lg lg:text-xl capitalize '>
                        rajan tiwari
                      </b>
                      <p className='text-gray-700  md:text-lg mt-2  lg:text-xl'>{e.rating}</p>
                      <div className="flex gap-x-2  md:text-lg lg:text-xl  text-[#FFAE34] ">
                        {
                          e.ratingIcon
                        }

                      </div>
                      <span className=" md:text-sm lg:text-base text-gray-600">
                        we are very satisfied with health care services.and we will recommend
                      </span>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default CostumerReview;