import React from 'react'

const AdminTableCom = () => {
  return (
    <div className='w-full bg-white p-4 shadow-xl rounded-md'>
        <table className='w-full'>
            <thead>
                <tr className='w-full bg-white h-16 border-b border-gray-300 text-left'>
                    <th>#</th>
                    <th className='xl:table-cell hidden'>Name</th>
                    <th className='xl:table-cell hidden'>Email</th>
                    <th className='xl:table-cell hidden'>Rank</th>
                    <th className='table-cell xl:hidden'>Company Data</th>
                </tr>
            </thead>
            <tbody>
                <tr className='xl:h-16 h-24 border-b border-gray-300 text-gray-500'>
                    <td className='font-semibold'>1</td>
                    <td className='xl:table-cell hidden'>IT Solutaions</td>
                    <td className='xl:table-cell hidden'>its@12.com</td>
                    <td className='xl:table-cell hidden'>1</td>
                    <td className='table-cell xl:hidden'>
                        <div className="">
                            <p className="">IT Solutaions</p>
                            <p className="">its@12.com</p>
                            <p className="">1</p>
                        </div>
                    </td>
                </tr>
                <tr className='xl:h-16 h-24 border-b border-gray-300 text-gray-500'>
                    <td className='font-semibold'>1</td>
                    <td className='xl:table-cell hidden'>IT Solutaions</td>
                    <td className='xl:table-cell hidden'>its@12.com</td>
                    <td className='xl:table-cell hidden'>1</td>
                    <td className='table-cell xl:hidden'>
                        <div className="">
                            <p className="">IT Solutaions</p>
                            <p className="">its@12.com</p>
                            <p className="">1</p>
                        </div>
                    </td>
                </tr>
                <tr className='xl:h-16 h-24 border-b border-gray-300 text-gray-500'>
                    <td className='font-semibold'>1</td>
                    <td className='xl:table-cell hidden'>IT Solutaions</td>
                    <td className='xl:table-cell hidden'>its@12.com</td>
                    <td className='xl:table-cell hidden'>1</td>
                    <td className='table-cell xl:hidden'>
                        <div className="">
                            <p className="">IT Solutaions</p>
                            <p className="">its@12.com</p>
                            <p className="">1</p>
                        </div>
                    </td>
                </tr>
                <tr className='xl:h-16 h-24 border-b border-gray-300 text-gray-500'>
                    <td className='font-semibold'>1</td>
                    <td className='xl:table-cell hidden'>IT Solutaions</td>
                    <td className='xl:table-cell hidden'>its@12.com</td>
                    <td className='xl:table-cell hidden'>1</td>
                    <td className='table-cell xl:hidden'>
                        <div className="">
                            <p className="">IT Solutaions</p>
                            <p className="">its@12.com</p>
                            <p className="">1</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AdminTableCom