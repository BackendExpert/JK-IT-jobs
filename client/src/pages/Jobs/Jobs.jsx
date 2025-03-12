import React from 'react'
import { MdWork } from "react-icons/md";

const Jobs = () => {
  return (
    <div className='my-12 mr-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#0f5a97]">
                    <MdWork className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#0f5a97] text-xl pt-1 font-semibold uppercase">jobs</h1>
            </div>
        </div>
    </div>
  )
}

export default Jobs