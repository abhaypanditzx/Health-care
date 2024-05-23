import { createContext } from "react";
import rajanImg from './assets/costumers/rajan.png'
import lakshayImg from './assets/costumers/lakshay.png'
import suhaniImg from './assets/costumers/suhani.png'

import { IoStar, IoStarOutline ,IoStarHalf} from "react-icons/io5";
const UserContext = createContext();
export const ContextProvider = ({ children }) => {
    const NavLinks = [
        {
            id: 0,
            title: 'Care Services',
            path: '/CareServices'
        },
        {
            id: 1,
            title: 'Join HealthCare',
            path: '/JoinHealthCare'
        },
        {
            id: 2,
            title: 'About us  ',
            path: '/AboutUs'
        },
        {
            id: 3,
            title: 'Contact us',
            path: '/ContactUs'
        },
    ]
    const costumerData = [
        {
            name: 'rajan tiwari',
            ratingIcon:  [<IoStar />  ,<IoStar /> , <IoStar /> , <IoStar /> ],
            rating:'4.0',
            comment: "we are very satisfied with health care services.and we will recommend  ",
            img: rajanImg,
        },
        {
            name: 'suhani yadav',
            ratingIcon: [<IoStar />  ,<IoStar /> , <IoStar /> , <IoStar /> , <IoStar /> ],
            rating:'5.0',
            comment: "we are very satisfied with health care services.and we will recommend  ",
            img: lakshayImg,
        },
        {
            name: 'lakshay choudhary',
            ratingIcon:  [<IoStar />  ,<IoStar /> , <IoStar /> , <IoStar /> ,<IoStarHalf/>],
            rating:'4.5',
            comment: "we are very satisfied with health care services.and we will recommend  ",
            img: suhaniImg,
        }
    ]
    const cityList = [
        { Name: "Delhi" },
        { Name: "Bangalore" },
        { Name: "Pune" },
        { Name: "Mumbai" },
        { Name: "meerut" },
        { Name: "Ahmedabad" },
    ]

    const name = "abhay";
    return (
        <UserContext.Provider value={{ NavLinks, cityList, costumerData }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;
