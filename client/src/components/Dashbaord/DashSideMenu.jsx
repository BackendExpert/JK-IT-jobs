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
        name: "Stundets",
        icon: FaUsers,
        link: '/Dashboard/Studnets'
    },
    {
        id: 3,
        name: "Staff",
        icon: FaChalkboardTeacher,
        link: '#'
    },
    {
        id: 4,
        name: "Questions",
        icon: ImBooks,
        link: '/Dashboard/Questions'
    },
    {
        id: 5,
        name: "Exams",
        icon: PiExamFill,
        link: '#'
    },
    {
        id: 6,
        name: "User Activities",
        icon: FaChartLine,
        link: '/Dashboard/UserActivities'
    },
    {
        id: 7,
        name: "My Exams",
        icon: GiBookshelf,
        link: '#'
    },
    {
        id: 8,
        name: "My Status",
        icon: FaChartPie,
        link: '#'
    },
    {
        id: 9,
        name: "Settings",
        icon: BsGearFill,
        link: '/Dashboard/Settings'
    },
]

export {sidemenu}