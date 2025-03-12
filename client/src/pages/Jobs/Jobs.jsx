import React from 'react'
import { MdWork } from "react-icons/md";
import AllJobsinCom from './AllJobsinCom';

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

        <div className="mt-2">
            <a href="/Dashboard/CreateJob">
                <button className='bg-[#0f5a97] py-2 px-6 rounded-md text-white'>Create Job</button>
            </a>
        </div>

        <div className="mt-4">
            <AllJobsinCom />
        </div>
    </div>
  )
}

export default Jobs