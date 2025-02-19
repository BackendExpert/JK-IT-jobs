import React from 'react'
import secureLocalStorage from "react-secure-storage";
import AdminDashbaord from './AdminDashbaord';

const DashHome = () => {
    const RoleUser = secureLocalStorage.getItem('loginR')
    const EmailUser = secureLocalStorage.getItem('loginE')
    const Username = secureLocalStorage.getItem('loginU')

  return (
    <div className='my-8'>
        {
            (() => {
                if(RoleUser === "admin"){
                    return (
                        <AdminDashbaord />
                    )
                }
                else if(RoleUser === "company"){
                        
                }
            })()
        }
    </div>
  )
}

export default DashHome