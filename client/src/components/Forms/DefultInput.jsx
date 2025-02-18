import React from 'react'

const DefultInput = ({
    icon: Icon,
    type,
    name,
    value,
    onChange,
    placeholder,
    required
}) => {
    
  return (

    <div className="flex">
      <div className="w-auto">
        <div className="px-4 pt-2">
          <Icon className='h-8 w-auto fill-[#0f5a97]'/>
        </div>
      </div>
      <div className="w-full">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={!!required}

          className='
              h-12 
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
      />
      </div>
    </div>

  )
}

export default DefultInput