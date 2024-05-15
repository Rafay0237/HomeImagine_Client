import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const BuisnessDetails = ({profile}) => {
  return (
    profile&&
    <div className="py-10 gap-10 border-b border-light-grey">
      <p className="font-lightbold text-2xl py-4">Buisness Details</p>
   
      <div className="flex gap-[30%] my-10">
        <div className='w-2/6 ' >
      <p className="text-xl font-lightbold py-2">Buisness Name</p>
      <p>{profile?.firmName}</p>
        </div>
      
        <div className='w-2/6 '>
      <p className="text-xl font-lightbold py-2">Typical Job Cost</p>
      <p>{profile?.from}Rs - {profile?.to}Rs</p>
      </div>

      </div>

      <div className="flex gap-[30%]">
        <div className='w-2/6 '>
      <p className="text-xl font-lightbold py-2">Phone Number</p>
      <p>{profile.phoneNumber? profile.phoneNumber:"Not Provided" }</p>
        </div>
      
        <div className='w-2/6'>
      <p className="text-xl font-lightbold py-2">Address</p>
      <p>{profile.address? profile.address:"Not Provided" } </p>
      </div>

      </div>

      <div className="flex gap-[30%] my-10">
        <div className='w-2/6 ' >
      <p className="text-xl font-lightbold py-2">Website </p>
      <a href={profile?.website}>
      {profile.website? profile.website:"Not Provided" }</a>
        </div>
      
        <div className='w-2/6'>
      <p className="text-xl font-lightbold py-2">Socials</p>
      <div className='flex gap-4 '>
      <a href={profile?.facebook}>
      <FaFacebook className='h-6 w-6 hover:text-green hover:cursor-pointer '/>
      </a>
      <a href={profile?.insta}>
      <BsInstagram className='h-6 w-6 hover:text-green hover:cursor-pointer '/>
      </a>
      </div>

      </div>

      </div>
      </div>
  )
}

export default BuisnessDetails
