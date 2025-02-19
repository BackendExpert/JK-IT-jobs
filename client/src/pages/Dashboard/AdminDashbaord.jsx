import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";

const AdminDashbaord = () => {
    const admindashdata = [
        {
            id: 1,
            name: "Total Companies",
            value: 500,
            icon: "",
        },
        {
            id: 2,
            name: "Total Jobs",
            value: 500,
            icon: "",
        },
        {
            id: 3,
            name: "Total Opening Jobs",
            value: 500,
            icon: "",
        },
        {
            id: 4,
            name: "Total Opening Jobs",
            value: 500,
            icon: "",
        }
    ]
  return (
    <div className='my-12 mr-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#0f5a97]">
                    <BiSolidDashboard className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#0f5a97] text-xl pt-1 font-semibold uppercase">Dashboard</h1>
            </div>
        </div>
    </div>
  )
}

export default AdminDashbaord