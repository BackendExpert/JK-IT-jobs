import { BiSolidDashboard } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { FaBuildingShield } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";


const sidemenu = [
    {
        id: 1,
        name: "Dashboard",
        icon: BiSolidDashboard,
        link: '/Dashboard/Home'
    },
    {
        id: 2,
        name: "Jobs",
        icon: MdWork,
        link: '#'
    },
    {
        id: 3,
        name: "Companies",
        icon: BiBuildings,
        link: '#'
    },
    {
        id: 4,
        name: "My Company",
        icon: FaBuildingShield,
        link: '#'
    },
    {
        id: 5,
        name: "Applicants",
        icon: FaUsers,
        link: '#'
    },
    {
        id: 6,
        name: "Settings",
        icon: BsGearFill,
        link: '#'
    },
]

export {sidemenu}