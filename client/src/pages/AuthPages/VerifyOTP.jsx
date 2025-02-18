import React, { useState } from 'react'
import bgsignup from '../../assets/bgsignup.png'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import DefultInput from '../../components/Forms/DefultInput'
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import DefaultBtn from '../../components/Buttons/DefaultBtn'
import axios from 'axios'
import { TbNumber123 } from "react-icons/tb";



const VerifyOTP = () => {
    const navigate = useNavigate()
    const [verifyotp, setverifyotp] = useState({ 
        otp: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setverifyotp((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const getemail = localStorage.getItem('email')

    const headlesubmit = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/verifyotp/' + getemail, verifyotp)
            if(res.data.Status === "Success"){
                alert("OTP Verification Success")
                localStorage.setItem("sourcetoken", res.data.Token)
                navigate('/passreset')
            }
            else{
                alert(res.data.Error || "OTP Verifcation failed. Please try again.");
            }
        }

        catch(err){
            console.log(err)
            alert("An error occurred. Please check your network and try again.");
        }
    }

  return (
    <div className='min-h-screen bg-[#c0c7d0]'>
        <div className="xl:py-[10%] md:py-[25%] py-[10%] xl:px-60 md:px-12 px-4">
            <div className="rounded-md shadow-xl md:flex">
                <div className="bg-[#0f5a97] p-4 w-full md:rounded-l-md rounded-t-md bg-cover bg-center md:py-8 py-4">
                    <center><img src={bgsignup} alt="" className='md:h-40 h-16 w-auto rounded'/></center>  
                    <div className="pt-4 text-center text-white">
                        <h1 className="text-xl font-semibold">OTP Verify</h1>
                        <p className=""></p>

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
                    </div>

                    <div className="mt-8">
                        <div className="">
                            <form onSubmit={headlesubmit} method="post">
                                <div className="my-4">
                                    <DefultInput 
                                        icon={TbNumber123}
                                        type={'text'}
                                        name={'otp'}
                                        value={verifyotp.otp}
                                        placeholder={"Enter OTP"}
                                        required={true}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mt-6">
                                    <DefaultBtn 
                                        type={'submit'}
                                        btnvalue={"Verify OTP"}
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

export default VerifyOTP