import React from 'react'

const DefultTextArea = ({ name, value, required, placeholder, onChange }) => {
  return (
    <textarea
        name={name}
        value={value}
        className='
            h-24 
            bg-white 
            w-full 
            border-b 
            text-[#0f5a97]
            border-[#0f5a97]
            pl-2 
            duration-500 
            focus:outline-none 
            focus:border-[#0f5a97]
            placeholder:text-[#0f5a97]

        '
    >

    </textarea>
  )
}

export default DefultTextArea