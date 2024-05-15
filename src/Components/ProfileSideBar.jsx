import React from 'react'
import {Link} from "react-router-dom"

const ProfileSideBar = () => {
  return (
    <div className='flex-col w-[25%] px-5 gap-3 mt-2 md:flex hidden text-base'>

    <p className='font-lightbold mb-3'>Account</p>

    <p className=' hover:text-green hover:cursor-pointer'>Profile info</p>
    <Link to="/change-username">
    <p className=' hover:text-green hover:cursor-pointer'>Change Username</p>
    </Link>
    <Link to="/change-password">
    <p className=' hover:text-green hover:cursor-pointer'>Change Password</p>
    </Link>

    <hr className='text-dark-grey my-2'/>

    <p className='font-lightbold mb-3'>Shipping Account</p>
    <Link to="/cart">
    <p className=' hover:text-green hover:cursor-pointer'>Biling Info</p>
    </Link>
    <Link to="/cart">
    <p className=' hover:text-green hover:cursor-pointer'>Shipping Adress</p>
    </Link>

    </div>
  )
}

export default ProfileSideBar
