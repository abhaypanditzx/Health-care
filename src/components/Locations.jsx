import { useContext } from "react";
import UserContext from "../UserContext";

const Location = () => {
  const {cityList}=useContext(UserContext)
  return (
    <div className=" w-full flex flex-col min-h-[400px] bg-white justify-center items-center mt-[100px] py-10 shadow-md">
      <h1 className="capitalize text-3xl font-bold  ">we are <span className="text-green-400">available</span>  in </h1>
<div>
<ul className="flex flex-wrap justify-around gap-5 mt-[80px] max-w-[600px] items-center">
  {
    cityList.map((e,i)=>{
      return(
        <li key={i} className="text-white cursor-pointer max-xs:w-[110px] hover:bg-black/95  bg-[#272727] xs:w-[150px] text-center px-4 py-2">
         {e.Name}
        </li>
      )
    })
  }
</ul>
</div>
    </div>
  )
}
export default Location;