import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <div>
      <h1 className='text-3xl font-medium'>{title}</h1>
      <p className='text-ms md:text-base text-gray-500/90 mt-2 max-w-156'>{subTitle}</p>
    </div>
  );
}

export default Title