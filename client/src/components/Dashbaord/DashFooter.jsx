import React from 'react'

const DashFooter = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className='text-gray-500'>&copy; The JkITJobs.com | {currentYear} | Allright Reserved | Developed and Maintained by <a className='text-[#0f5a97]' href="https://github.com/BackendExpert" target='_blank'>jehankandy</a></div>
  )
}

export default DashFooter