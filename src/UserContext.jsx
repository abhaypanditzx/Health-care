import { createContext } from "react";
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

    const name = "abhay";
    return (
        <UserContext.Provider value={{ NavLinks }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;
