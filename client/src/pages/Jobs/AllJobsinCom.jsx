import axios from 'axios'
import React, { useEffect, useState } from 'react'
import secureLocalStorage from "react-secure-storage";

const AllJobsinCom = () => {
    const RoleUser = secureLocalStorage.getItem('loginR')
    const EmailUser = secureLocalStorage.getItem('loginE')
    const Username = secureLocalStorage.getItem('loginU')

    const [alljobs, setalljobs] = useState([])
    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/jobs/getcomjobs/' + EmailUser)
        .then(res => setalljobs(res.data.Result))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <table>
            <thead>
                <tr>
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
                            <tr className="" key={index}>
                                <td>{jobs._id}</td>
                                <td>{jobs.jobTitle}</td>
                                <td>24</td>
                                <td>{jobs.closingdate}</td>
                                <td></td>
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