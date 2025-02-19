import { BiSolidDashboard } from "react-icons/bi";
import { FaUsers, FaChalkboardTeacher, FaChartLine  } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BsGearFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { PiExamFill } from "react-icons/pi";

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
        icon: FaUsers,
        link: '#'
    },
    {
        id: 3,
        name: "Companies",
        icon: FaChalkboardTeacher,
        link: '#'
    },
    {
        id: 4,
        name: "My Companies",
        icon: ImBooks,
        link: '#'
    },
    {
        id: 5,
        name: "Applicants",
        icon: PiExamFill,
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