import React from 'react'
import ReviewStars from './ReviewStars'

const SalesCard = () => {
  return (
    <div className='h-[20rem] w-[14rem] md:h-[28rem] md:w-[18rem] '>
      <img alt='Sale Item'
      className='h-[12rem] md:h-[18rem]'
      src='https://st.hzcdn.com/fimgs/6a6115d9037242ba_2917-w200-h200-b1-p0--.jpg'/>
      <p className='p-2 pt-4 text-base md:text-xl '>The Nova Bathroom Vanity, Black, 60, Single Sink Free, Standing</p>
     <ReviewStars stars={4.2} reviewCount={43}/>
    </div>
  )
}

export default SalesCard
