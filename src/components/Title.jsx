import React from 'react'

const Title = ({title,subTitle,align}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
     <h1 className='font-semibold text-gray-700 text-2xl pb-3'>{title}</h1>
     <p className='text-base font-normal'>{subTitle}</p>
    </div>
  )
}

export default Title
