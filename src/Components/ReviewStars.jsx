import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const ReviewStars = ({stars,reviewCount}) => {
    const ratingStars=Array.from({length:5},(elem,index)=>{
    let halfStarCheck=index+0.5
    return(
    <span className="text-yellow " key={index}>
    {
        stars>=index +1 ? <IoIosStar className='h-6 w-6'/>:
        stars>=halfStarCheck ? <IoIosStarHalf className='h-6 w-6'/>:
        <IoIosStarOutline className='h-6 w-6'/>
    }
    </span>
    )
    
    })

  return (
    <div className='flex p-2 '>
        <p className='text-yellow pr-2 font-lightbold text-xl' >{stars}</p>
      {ratingStars}
      <p className='text-dark-grey pl-2 font-lightbold'>{reviewCount} </p>
    </div>
  )
}

export default ReviewStars
