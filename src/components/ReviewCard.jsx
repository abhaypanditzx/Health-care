import { IoStar, IoStarOutline } from "react-icons/io5";
import rajanimg from '../assets/costumers/rajan.png'
const ReviewCard = () => {
    return (
        <div className='min-h-[400px] relative m-2 min-w-[300px] sm:w-[200px] h-[400px] bg-white shadow-md '>
            <div className="relative  min-h-[250px] w-full ">
                <img src={rajanimg} alt="" className='absolute top-[-30px] right-[-20px]' />
            </div>
            <div className="flex p-4 flex-col">
                <b className='text-xl capitalize '>
                    rajan tiwari
                </b>
                <p className='text-gray-700  mt-2  text-xl'>4.0</p>
                <div className="flex gap-x-2 text-xl text-[#FFAE34] ">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarOutline />

                </div>
                <span className="text-base text-gray-600">
                    we are very satisfied with health care services.and we will recommend
                </span>
            </div>
        </div>
    )
}
export default ReviewCard;