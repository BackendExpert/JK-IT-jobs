import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";


const ViewJob = () => {
    const {id} = useParams()

    const RoleUser = secureLocalStorage.getItem('loginR')
    const EmailUser = secureLocalStorage.getItem('loginE')
    const Username = secureLocalStorage.getItem('loginU')
    const token = localStorage.getItem('login')

    const [alljobs, setalljobs] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/jobs/getcomjobs/' + EmailUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setalljobs(res.data.Result)
            const jobfound = res.data.Result.find(j => j._id === id);

            setalljobs(jobfound)
        })


        .catch(err => console.log(err))
    }, [])
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

        <div className="mt-4">
            <table className='w-full bg-white text-gray-500'>
                <tr className='h-16 border-b border-gray-200'>
                    <td className='font-semibold pl-4'>Job Title</td>
                    <td>{alljobs.jobTitle}</td>
                </tr>
                <tr className='h-16 border-b border-gray-200'>
                    <td className='font-semibold pl-4'>Job Description</td>
                    <td>{alljobs.desc}</td>
                </tr>
                <tr className='h-16 border-b border-gray-200'>
                    <td className='font-semibold pl-4'>Job Qulifications</td>
                    <td>{alljobs.qulification}</td>
                </tr>
                <tr className='h-16 border-b border-gray-200'>
                    <td className='font-semibold pl-4'>Job Skills</td>
                    <td>{alljobs.skills}</td>
                </tr>
                <tr className='h-16 border-b border-gray-200'>
                    <td className='font-semibold pl-4'>Job Salary</td>
                    <td>{alljobs.salary}</td>
                </tr>
                <tr className='h-16 border-b border-gray-200'>
                    <td className='font-semibold pl-4'>Job Closing date</td>
                    <td>{new Date(alljobs.closingdate).toLocaleDateString("en-GB")}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default ViewJob