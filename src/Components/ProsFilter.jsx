import {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const ProsFilter = () => {
  const [rating, setRating] = useState('');
  const [showRatingOptions,setShowRatingOptions]=useState(false)
  
  return (
    <div className='flex  flex-col p-4 h-full relative '>

        <p className='text-xl font-lightbold block'>Location</p>
        <div className='relative w-28 mb-4 mt-2'>
      <input className='rounded-md p-3 border-[#b7b7b7] border  h-15 '
      type='text'
      placeholder='Search City, State'/>
      <IoSearchOutline
          className= "absolute -right-[6.7rem]  top-[1.6rem] -translate-y-1/2 text-[18px] hover:cursor-pointer"
        />
     </div>

     <p className='text-xl font-lightbold block '>Project Type</p>
     <div className='relative w-28 mb-4 mt-2'>
      <input className='rounded-md p-3 border-[#b7b7b7] border  h-15'
      type='text'
      placeholder='Search Project Type'/>
      <IoSearchOutline
          className="absolute -right-[6.7rem]  top-[1.6rem] -translate-y-1/2 text-[18px] hover:cursor-pointer"
        />
      </div>
     
      <div className='flex flex-col  relative mt-4  w-[15rem]'>
      <div className='p-3 rounded-md border border-[#b7b7b7] font-lightbold h-15 '
      onClick={()=>setShowRatingOptions(!showRatingOptions)}>
        Select Rating</div>
       <FaChevronDown className='absolute right-3  top-6 -translate-y-1/2 
       text-xl '/>
      {showRatingOptions&&
      <div className='flex flex-col '>
        <label className='p-3 flex mt-3'>
              <input
                type="radio"
                value="high"
                onChange={(e)=>setRating(e.target.value)}
                />
              <p className='pl-5  font-lightbold'>Only 5 Star </p>
      </label>
        <label className='p-3 flex'>
              <input
                type="radio"
                value="medium"
                onChange={(e)=>setRating(e.target.value)}
                />
              <p className='pl-5  font-lightbold'>4 Star &up </p>
      </label>
        <label className='p-3 flex'>
              <input
                type="radio"
                value="low"
                onChange={(e)=>setRating(e.target.value)}
                />
              <p className='pl-5  font-lightbold'>3 Star &up</p>
      </label>
      
      </div>
      }

    </div>

    </div>
  )
}

export default ProsFilter
