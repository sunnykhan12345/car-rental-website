import React from 'react'
import { dummyUserData } from '../../assets'
import { Link } from 'react-router-dom';
import { AsteriskSquare } from 'lucide-react';

const NavbarOwner = () => {
    const user = dummyUserData;
  return (
    <div className='flex items-center justify-baseline px-6 md:px-10 py-4 text-gray-500 border-b border-bordercolor relative transition-all'>
         <Link to="/">
         <AsteriskSquare />
         </Link>
         <p>Welcome, {user.name || "owner"}</p>
    </div>
  )
}

export default NavbarOwner