import axios from 'axios'
import React, { useEffect, useState } from 'react'
import secureLocalStorage from "react-secure-storage";
import DefultInput from '../../components/Forms/DefultInput';

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

    const today = new Date()
    const [searchTerm, setSearchTerm] = useState(""); 

    const filteredJobs = alljobs.filter(job => 
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className='bg-white'>
        <input
            type="text"
            placeholder="Search by Job Title..."
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className='w-full'>
            <thead>
                <tr className='h-12 border-b border-gray-300'>
                    <th>Job ID</th>
                    <th>Job Title</th>
                    <th>Closing Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                filteredJobs.map((jobs, index) => {
                    const closingDate = new Date(jobs.closingdate); 
                    const today = new Date(); 

                    if (closingDate > today) { 
                        return (
                            <tr className="border-b border-gray-300 h-16 text-gray-500 text-center" key={index}>
                                <td className="font-semibold">{jobs._id}</td>
                                <td>{jobs.jobTitle}</td>
                                <td>{closingDate.toLocaleDateString("en-GB")}</td>
                                <td>
                                    <a href={`/Dashboard/ViewJob/${jobs._id}`}>
                                        <button className="bg-[#0f5a97] py-2 px-6 rounded-md text-white">
                                            View Job
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        );
                    }
                    else{
                        return (
                            <tr className="border-b border-gray-300 h-16 text-red-500 text-center" key={index}>
                                <td className="font-semibold">{jobs._id}</td>
                                <td>{jobs.jobTitle}</td>
                                <td className='font-semibold'>{closingDate.toLocaleDateString("en-GB")}</td>
                                <td>
                                    <a href={`/Dashboard/ViewJob/${jobs._id}`}>
                                        <button className="bg-[#0f5a97] py-2 px-6 rounded-md text-white">
                                            View Job
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        );
                    }

                    return null; 
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default AllJobsinCom