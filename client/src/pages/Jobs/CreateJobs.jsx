import React, { useState } from 'react'
import { FaBriefcaseMedical } from "react-icons/fa6";
import DefultInput from '../../components/Forms/DefultInput';
import { MdTitle, MdDateRange  } from "react-icons/md";

const CreateJobs = () => {
    const [createjob, setcreatejob] = useState({
        jobtitle: '',
        jobdesc: '',
        salary: '',
        qulifications: '',
        skills: '',
        closingdate: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setcreatejob((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headleCreateJob = (e) => {
        e.preventDefault()
        try{

        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div className='my-12 mr-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#0f5a97]">
                    <FaBriefcaseMedical className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#0f5a97] text-xl pt-1 font-semibold uppercase">Create New Job</h1>
            </div>
        </div>

        <div className="mt-2">
            <a href="/Dashboard/Jobs">
                <button className='bg-[#0f5a97] py-2 px-6 rounded-md text-white'>Back</button>
            </a>
        </div>

        <div className="py-4">
            <form onSubmit={headleCreateJob} method="post">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="">
                        <DefultInput 
                            icon={MdTitle}
                            type={'text'}
                            name={'jobtitle'}
                            value={createjob.jobtitle}
                            placeholder={"Job Title"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <DefultInput 
                            icon={MdDateRange}
                            type={'date'}
                            name={'closingdate'}
                            value={createjob.closingdate}
                            placeholder={"Job Title"}
                            required={true}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="">
                    
                </div>

            </form>
        </div>
    </div>
  )
}

export default CreateJobs