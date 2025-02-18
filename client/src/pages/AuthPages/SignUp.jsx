import React, { useState } from 'react'

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
        <div className="xl:py-[10%] xl:px-60 md:px-32 px-4">
            joasdl
        </div>    
    </div>
  )
}

export default SignUp