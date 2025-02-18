import React, { useState } from 'react'
import bgsignup from '../../assets/bgsignup.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import DefultInput from '../../components/Forms/DefultInput'
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import DefaultBtn from '../../components/Buttons/DefaultBtn'



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
                <div className="bg-white w-full md:rounded-r-md rounded-b-md xl:p-8 md:p-6 py-6 px-2">
                    <div className="flex justify-between">
                        <div className="flex">
                            <img src={logo} alt="" className='h-8 w-auto xl:block hidden'/>
                            <h1 className="uppercase font-semibold text-[#0f5a97] pt-1 xl:block hidden">jobs.com</h1>
                        </div>
                        <div className="flex">
                            <p className="text-gray-500 md:block hidden">Already have an Account ? </p>
                            <Link to={'/signup'}><p className='text-[#0f5a97] pt-1 font-semibold text-sm'>Sign Up</p></Link>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="">
                            <form onSubmit={headlesubmit} method="post">
                                <div className="my-4">
                                    <DefultInput 
                                        icon={FaUser}
                                        type={'text'}
                                        name={'username'}
                                        value={signupdata.username}
                                        placeholder={"Enter Username"}
                                        required={true}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="my-4">
                                    <DefultInput 
                                        icon={FaEnvelope}
                                        type={'email'}
                                        name={'email'}
                                        value={signupdata.email}
                                        placeholder={"Enter Email Address"}
                                        required={true}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="my-4">
                                    <DefultInput 
                                        icon={FaLock}
                                        type={'password'}
                                        name={'password'}
                                        value={signupdata.password}
                                        placeholder={"Enter Password"}
                                        required={true}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mt-6">
                                    <DefaultBtn 
                                        type={'submit'}
                                        btnvalue={"Create New Account"}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default SignUp