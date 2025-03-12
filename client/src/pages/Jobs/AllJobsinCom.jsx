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
    <div>AllJobsinCom</div>
  )
}

export default AllJobsinCom