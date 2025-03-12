import React, { useState } from 'react'
import { FaBriefcaseMedical, FaMoneyBills } from "react-icons/fa6";
import DefultInput from '../../components/Forms/DefultInput';
import { MdTitle, MdDateRange, MdDescription } from "react-icons/md";
import DefultTextArea from '../../components/Forms/DefultTextArea';
import { BsBookmarkStarFill, BsPersonFillGear } from "react-icons/bs";
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from 'react-router-dom';


const CreateJobs = () => {
    const navigate = useNavigate()
    const RoleUser = secureLocalStorage.getItem('loginR')
    const EmailUser = secureLocalStorage.getItem('loginE')
    const Username = secureLocalStorage.getItem('loginU')
    const token = localStorage.getItem('login')
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

    const headleCreateJob = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/jobs/createjob/' + EmailUser, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("New Job Created Success")
                    navigate('/Dashboard/Jobs')
                }
                else{
                    alert(res.data.Error)
                }
            })
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
                <div className="my-4">
                    <DefultTextArea 
                        Icon={MdDescription}
                        name={'jobdesc'}
                        value={createjob.jobdesc}
                        placeholder={"Job Description"}
                        required={true}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="my-4">
                    <DefultTextArea 
                        Icon={BsBookmarkStarFill}
                        name={'qulifications'}
                        value={createjob.qulifications}
                        placeholder={"Job Qulifications (use , to separate qulifications)"}
                        required={true}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="my-4">
                    <DefultTextArea 
                        Icon={BsPersonFillGear}
                        name={'skills'}
                        value={createjob.skills}
                        placeholder={"Job Skills (use , to separate Skills)"}
                        required={true}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="my-4">
                    <DefultInput 
                        icon={FaMoneyBills}
                        type={'number'}
                        name={'salary'}
                        value={createjob.salary}
                        placeholder={"Job Title"}
                        required={true}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mt-4">
                    <div className="">
                        <button type='submit' className='bg-[#0f5a97] py-2 px-6 rounded-md text-white'>Create New Job</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateJobs