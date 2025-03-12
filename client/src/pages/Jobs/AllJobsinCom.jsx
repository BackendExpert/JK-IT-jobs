import axios from 'axios'
import React, { useEffect, useState } from 'react'
import secureLocalStorage from "react-secure-storage";

const AllJobsinCom = () => {
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
        .then(res => setalljobs(res.data.Result))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='bg-white'>
        <table className='w-full'>
            <thead>
                <tr className='h-12 border-b border-gray-300'>
                    <th>Job ID</th>
                    <th>Job Title</th>
                    <th>Applications</th>
                    <th>Closing Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    alljobs.map((jobs, index) => {
                        return (
                            <tr className="border-b border-gray-300 h-16 text-gray-500 text-center" key={index}>
                                <td className='font-semibold'>{jobs._id}</td>
                                <td>{jobs.jobTitle}</td>
                                <td>24</td>
                                <td>{jobs.closingdate}</td>
                                <td>
                                    <a href={`/Dashboard/ViewJob/${jobs._id}`}>
                                        <button className='bg-[#0f5a97] py-2 px-6 rounded-md text-white'>View Job</button>
                                    </a>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default AllJobsinCom