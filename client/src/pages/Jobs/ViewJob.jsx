import React from 'react'
import { FaEdit } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const ViewJob = () => {
    const {id} = useParams()
  return (
    <div className='my-12 mr-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#0f5a97]">
                    <FaEdit className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#0f5a97] text-xl pt-1 font-semibold uppercase">view job : {id}</h1>
            </div>
        </div>

        <div className="mt-2">
            <a href="/Dashboard/Jobs">
                <button className='bg-[#0f5a97] py-2 px-6 rounded-md text-white'>Back</button>
            </a>
        </div>
    </div>
  )
}

export default ViewJob