import React from 'react'

const DefultTextArea = ({ Icon, name, value, required, placeholder, onChange }) => {
  return (
    <div className="flex">
        <div className="w-auto">
            <div className="px-4 pt-2">
                <Icon className='h-8 w-auto fill-[#0f5a97]'/>
            </div>
        </div>
        <div className="w-full">
            <textarea
                name={name}
                value={value}
                required={!!required}
                onChange={onChange}
                placeholder={placeholder}
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
        </div>
    </div>

  )
}

export default DefultTextArea