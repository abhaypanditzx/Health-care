import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
const SelectCity = () => {
    const [ChevronIcon, setChevronIcon] = useState(false);
    const [dorpDownContentVisibility, setDorpDownContentVisibility] = useState('hidden')
    const cityList = [
        { Name: "Delhi" },
        { Name: "Bangalore" },
        { Name: "Pune" },
        { Name: "Mumbai" },
        { Name: "meerut" },
        { Name: "Ahmedabad" },
    ]

    return (
        <div className="relative ">
            <div onClick={() => { setChevronIcon(!ChevronIcon); setDorpDownContentVisibility('flex flex-col ') }} className="flex  items-center border-[1px] gap-x-2 border-black  px-4 py-2 justify-between">
                <p> select city</p> <IoChevronDown className={`duration-300 cursor-pointer ${ChevronIcon === false ? 'rotate-0' : 'rotate-180'}`} />
            </div>
            <ul className={` absolute bg-green-500 duration-300 ${ChevronIcon === false ? ' h-0' : 'flex max-h-[15em] min-h-[10em] flex-col'} overflow-y-scroll`}>
                {
                    cityList.map((e) => {
                        return (
                            <li key={e.Name} className="px-4 py-2 duration-150 hover:bg-black/10   cursor-pointer text-white font-semibold ">
                                <a >{e.Name}</a>
                            </li >
                        )
                    })
                }
            </ul>

        </div>
    )
}
export default SelectCity