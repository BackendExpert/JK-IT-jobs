import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import ComapnyLine from '../../components/Charts/ComapnyLine';
import CountUp from 'react-countup'
import ComapnyTable from './ComapnyTable';
import DoughnutChartCompany from '../../components/Charts/DoughnutChartCompany';

const CompanyDashboard = () => {
    const companydatadash = [
        {
            id: 1,
            name: "Total Jobs",
            value: 500,
            icon: BiSolidDashboard,
        },
        {
            id: 2,
            name: "Total Applications",
            value: 500,
            icon: BiSolidDashboard,
        },
        {
            id: 3,
            name: "Total Rejected",
            value: 500, 
            icon: BiSolidDashboard,
        },
        {
            id: 4,
            name: "Total Hired",
            value: 500,
            icon: BiSolidDashboard,
        }
    ]    
  return (
    <div className='my-12 mr-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#0f5a97]">
                    <BiSolidDashboard className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#0f5a97] text-xl pt-1 font-semibold uppercase">Dashboard</h1>
            </div>
        </div>

        <div className="my-8">
            <div className="xl:flex">
                <div className="w-full ">
                    <ComapnyLine />
                </div>
                <div className="w-full xl:ml-4">
                    <div className="grid md:grid-cols-2 gap-8 md:my-4">
                    {
                        companydatadash.map((data, index) => {
                            return (
                                <div className="py-10 rounded-md shadow-xl bg-[#0e80df] text-white px-4" key={index}>
                                    <div className="flex justify-between">
                                        <h1 className="font-semibold">{data.name}</h1>
                                        <p className="">
                                            <data.icon className='h-8 w-auto'/>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="text-2xl font-semibold"><CountUp end={data.value} duration={5} /></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        <div className="my-8">
            <div className="md:flex">
                <div className="xl:w-2/3 w-full xl:mt-4">
                    <ComapnyTable />
                </div>

                <div className="xl:w-1/3 w-full md:ml-6 md:mt-0 mt-4">
                    <DoughnutChartCompany />
                </div>
            </div>
        </div>

    </div>
  )
}

export default CompanyDashboard