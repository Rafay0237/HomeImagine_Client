import {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const ProsFilter = ({setProProfiles}) => {
  const [showRatingOptions,setShowRatingOptions]=useState(false)
  const [services,setServices]=useState("")

  const handleRatingFilter=(value)=>{
    setProProfiles((prevProfiles) => 
        prevProfiles?.filter(profile => 
        profile.reviews.rating >=value
      )
    );
    setShowRatingOptions(false)
  }

  const handleServiceFilter=()=>{
    setProProfiles((prevProfiles) => 
      prevProfiles?.filter(profile => 
        profile.services.includes(services)
      )
    );
  }

  const handleKeyDownService = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      handleServiceFilter()
    }
  };
  
  return (
    <div className='flex  flex-col p-4 h-full relative '>

        <p className='text-xl font-lightbold block'>Services</p>
        <div className='relative w-28 mb-4 mt-2'>
      <input className='rounded-md p-3 border-[#b7b7b7] border  h-15'
      type='text'
      onKeyDown={handleKeyDownService}
      onChange={(e)=>setServices(e.target.value)}
      placeholder='Enter keywords'/>
      <IoSearchOutline
        onClick={()=>handleServiceFilter}
        className= "absolute -right-[6.7rem]  top-[1.6rem] -translate-y-1/2 text-[18px] hover:cursor-pointer"
        />
     </div>
     
      <div className='flex flex-col  relative mt-4  w-[15rem]'>
      <div className='p-3 rounded-md border border-[#b7b7b7] font-lightbold h-15 hover:cursor-pointer'
      onClick={()=>setShowRatingOptions(!showRatingOptions)}>
        Select Rating</div>
       <FaChevronDown className='absolute right-3  top-6 -translate-y-1/2 
       text-xl '/>
      {showRatingOptions&&
      <div className='flex flex-col '>
        <label className='p-3 flex mt-3'>
              <input
                type="radio"
                onChange={()=>handleRatingFilter(5)}
                />
              <p className='pl-5  font-lightbold'>Only 5 Star </p>
      </label>
        <label className='p-3 flex'>
              <input
                type="radio"
                onChange={()=>handleRatingFilter(4)}
                />
              <p className='pl-5  font-lightbold'>4 Star &up </p>
      </label>
        <label className='p-3 flex'>
              <input
                type="radio"
                onChange={()=>handleRatingFilter(3)}
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
