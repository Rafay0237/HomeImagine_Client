import React from 'react'
import SalesCard from '../Components/SalesCard'

const SalesPage = () => {
  return (
    <div className='bg-[#F4F4F4]  pb-20 border-b border-dark-grey'>
      <div className='w-full md:w-[80%] pt-10  bg-grey mx-auto '>

      <div className='flex flex-col md:flex-row bg-white mb-4 mx-6 md:mx-0'>
      <div className='p-10 w-full md:w-[40%]'>
      <p className='bg-green p-2 text-white w-28 text-sm'>
        Up to 40% Off</p>
      <p className='text-[25px] font-lightbold py-2 pb-4'>
        The Ultimate Vanity Sale</p>
      <p className=''>Give your bathroom a refresh with a vanity in your favorite finish</p>
      </div>

      <div className='w-full md:w-[60%]'>
      <img alt='Sale Product'
      className='  object-contain'
      src='https://st.hzcdn.com/fimgs/09112b8d05de4fe3_8307-w900-h406-b0-p0--home-design.jpg'/>
      
      </div>

      </div>

      <div className=' p-10 bg-white grid grid-cols-2 md:grid-cols-3 gap-6'>
      <SalesCard/>
      <SalesCard/>
      <SalesCard/>
      <SalesCard/>
      <SalesCard/>
      <SalesCard/>
      <SalesCard/>
      

      </div>

      </div>

    </div>
  )
}

export default SalesPage
