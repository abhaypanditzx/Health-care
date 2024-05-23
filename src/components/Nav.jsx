import React, { useContext } from 'react';
import SelectCity from "./SelectCity";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
const Nav = () => {
  const { NavLinks } = useContext(UserContext)
  return (
    <div className='flex z-50 bg-white sticky  top-0 min-h-[5rem] w-full  items-center justify-around shadow-md'>
      {/* Logo */}
      <Link to='/'><h1 id="logo" className='text-2xl tracking-wide sigmar-one-regular  '><span className='text-green-400'>H</span>care</h1></Link>

      {/* Select city option */}
      <SelectCity />
      {/* Nav links */}
      <ul className='flex max-md:text-sm text-base  max-xs:hidden  gap-x-10 flex-row  '>
        {
          NavLinks.map((e) => {
            return (
              <li key={e.id}>
                <Link to={e.path}>{e.title} </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Nav