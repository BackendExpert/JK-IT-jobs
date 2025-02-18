import React, { useState } from 'react'
import bgsignup from '../../assets/bgsignup.png'
import logo from '../../assets/logo.png'




const SignUp = () => {
    const [signupdata, setsignupdata] = useState({
        username: '', 
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignupdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlesubmit = (e) => {
        e.preventDefault()
    }


  return (
    <div className='min-h-screen bg-[#c0c7d0]'>
        <div className="xl:py-[10%] md:py-[25%] py-[10%] xl:px-60 md:px-12 px-4">
            <div className="rounded-md shadow-xl md:flex">
                <div className="bg-[#0f5a97] p-4 w-full md:rounded-l-md rounded-t-md bg-cover bg-center md:py-8 py-4">
                    <center><img src={bgsignup} alt="" className='md:h-40 h-16 w-auto rounded'/></center>  
                    <div className="pt-4 text-center text-white">
                        <h1 className="text-xl font-semibold">Welcome to Our Website</h1>
                        <p className="">Create new Account</p>

                        <div className="py-4">
                            <h1 className="">JKITJobs</h1>
                        </div>
                    </div>                                   
                </div>
                <div className="bg-white w-full md:rounded-r-md rounded-b-md xl:p-8 md:p-6 py-6 px-1">
                    <div className="flex justify-between">
                        <div className="flex">
                            <img src={logo} alt="" className='h-8 w-auto'/>
                            <h1 className="uppercase font-semibold text-[#0f5a97] pt-1 xl:block hidden">JKITjobs.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default SignUp