import React from 'react'

const DefaultBtn = ({ type, btnvalue, onClick }) => {
  return (
    <button className='
        bg-[#0f5a97]
        text-white
        rounded-md
        py-4
        duration-500
        hover:shadow-xl
        w-full
    '>
        {btnvalue}
    </button>
  )
}

export default DefaultBtn