import React from 'react'

const ComapnyTable = () => {
  return (
    <div className='w-full bg-white p-4 shadow-xl rounded-md'>
        <h1 className="text-xl font-semibold">Latest Applcations</h1>
        <table className='w-full'>
            <thead>
                <tr className='bg-white h-16 border-b border-gray-300 text-left'>
                    <th>#</th>
                    <th className='xl:table-cell hidden'>Appliction No</th>
                    <th className='xl:table-cell hidden'>Email</th>
                    <th className='xl:table-cell hidden'>Job Post</th>
                    <th className='xl:hidden table-cell'>Application Data</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white xl:h-16 h-24 border-b border-gray-300 text-gray-500'>
                    <td className='font-semibold'>1</td>
                    <td className='xl:table-cell hidden font-semibold'>app001</td>
                    <td className='xl:table-cell hidden '>Jehan Kandy</td>
                    <td className='xl:table-cell hidden '>Lead fullstack developer</td>
                    <td className='xl:hidden table-cell'>
                        <div className="">
                            <p className="">app001</p>
                            <p className="">Jehan Kandy</p>
                            <p className="">Lead fullstack developer</p>
                        </div>
                    </td>
                </tr>
                <tr className='bg-white xl:h-16 h-24 border-b border-gray-300 text-gray-500'>
                    <td className='font-semibold'>1</td>
                    <td className='xl:table-cell hidden font-semibold'>app001</td>
                    <td className='xl:table-cell hidden '>Jehan Kandy</td>
                    <td className='xl:table-cell hidden '>Lead fullstack developer</td>
                    <td className='xl:hidden table-cell'>
                        <div className="">
                            <p className="">app001</p>
                            <p className="">Jehan Kandy</p>
                            <p className="">Lead fullstack developer</p>
                        </div>
                    </td>
                </tr>
                <tr className='bg-white xl:h-16 h-24 border-b border-gray-300 text-gray-500'>
                    <td className='font-semibold'>1</td>
                    <td className='xl:table-cell hidden font-semibold'>app001</td>
                    <td className='xl:table-cell hidden '>Jehan Kandy</td>
                    <td className='xl:table-cell hidden '>Lead fullstack developer</td>
                    <td className='xl:hidden table-cell'>
                        <div className="">
                            <p className="">app001</p>
                            <p className="">Jehan Kandy</p>
                            <p className="">Lead fullstack developer</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        company page, add links, icons etc.....
    </div>
  )
}

export default ComapnyTable