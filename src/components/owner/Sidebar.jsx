import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { dummyUserData } from '../../assets'
import { Edit } from 'lucide-react';
const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation()
  const[image,setImage] = useState('')

  const updateImage = async() =>{
    user.image = URL.createObjectURL(image)
    setImage('')
  }
  return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-bordercolor text-sm'>
       <div className='group relative'>
         <label htmlFor='image'>
          <img src={image ? URL.createdObjectURL(image) : user?.image ||
            "https://www.google.com/search?q=user+image&oq=user+image&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIKCAEQABixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU1OTlqMGo3qAIIsAIB8QUXevAIyhRfwA&sourceid=chrome&ie=UTF-8"
          } alt=''/>
          <input type='file' id='image' accept='image/*' hidden onChange={e => setImage(e.target.files[0])}/>
          <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
            <Edit />
          </div>
         </label>
       </div>
       {
        image &&(
          <button className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10
          text-primary cursor-pointer'>Save</button>
        )
       }
       <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

       <div className='w-full'>
       
       </div>
    </div>
  )
}

export default Sidebar