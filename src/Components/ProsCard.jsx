import React from 'react'
import { MdLocalPostOffice } from "react-icons/md";

const ProsCard = ({profile}) => {
  
    return (
    <div className='flex flex-col md:flex-row gap-3 border-b  border-[#b7b7b7] mx-20 md:mx-0 mb-2'>

        <img className='h-full w-72 lg:w-80 object-contain  '
        src={profile.bgImg}
        alt="Wallpaper"/>

      <div className='block md:flex'>

      <div className=' card-part-1  w-full md:w-[280px] lg:w-[300px]  pt-6 overflow-hidden '>
        <div className='flex gap-4'>
       <img className='h-10 w-10 object-cover rounded-full '
       src={profile.logo}
       alt="Logo"/>
       <p className='text-xl font-lightbold hover:text-green'>
        {profile.firmName}
       </p>
        </div>
       <p className='pl-10 py-2 '>Rating: 5.0</p>
       <p className='border lg:border-0 border-[#b7b7b7] p-4 rounded-md 
        w-full h-32 xs:h-24 '>{profile.desc.slice(0,100)+'...'}</p>
       <p className='pt-5 text-right text-green  font-lightbold'>Read More &gt;</p>
      </div>

      <div className=' card-part-2 p-2 w-52 '>
      
      <div className='relative mt-4'>
    <button className='p-2 pl-12 pr-4 text-green border-green rounded-md border-[1.5px] font-semibold'>
        Send Message
    </button>
    <MdLocalPostOffice className='absolute h-7 w-7 text-green left-4 top-1/2 
    transform -translate-y-1/2 '/>
    </div>

      <p className='py-4 text-dark-grey'>{profile.address}</p>
      </div>
      </div>
    </div>
  )
}

export default ProsCard
