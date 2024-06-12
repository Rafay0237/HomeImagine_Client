import React from 'react'
import {Link} from "react-router-dom"

const ProfileSideBar = () => {
  return (
    <div className='flex flex-col  px-5 gap-3 mt-2  text-base'>

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
    <p className=' hover:text-green hover:cursor-pointer'>Biling Info</p>
    <p className=' hover:text-green hover:cursor-pointer'>Edit Shipping Adress</p>

    </div>
  )
}

export default ProfileSideBar
