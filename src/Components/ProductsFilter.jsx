import {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const ProductsFilter = ({setProducts}) => {
  const [showRatingOptions,setShowRatingOptions]=useState(false)
  const [price,setPrice]=useState(0)
  const [title,setTitle]=useState("")

  const handleRatingFilter=(value)=>{
    setProducts((prevProducts) => 
      prevProducts?.filter(product => 
        parseFloat(product.rating) >=value
      )
    );
    setShowRatingOptions(false)
  }

  const handlePriceFilter=()=>{
    setProducts((prevProducts) => 
      prevProducts?.filter(product => 
        parseInt(product.price) <=price
      )
    );
  }
  
  const handleKeyDownPrice = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      handlePriceFilter()
    }
  };
  
  const handleTitleFilter=()=>{
    setProducts((prevProducts) => 
      prevProducts?.filter(product => 
        product.title.includes(title)
      )
    );
  }

  const handleKeyDownTitle = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      handleTitleFilter()
    }
  };

  return (
    <div className='flex  flex-col p-4 h-full relative '>

        <p className='text-xl font-lightbold block'>keywords</p>
        <div className='relative w-28 mb-4 mt-2'>
      <input className='rounded-md p-3 border-[#b7b7b7] border  h-15'
      type='text'
      onKeyDown={handleKeyDownTitle}
      onChange={(e)=>setTitle(e.target.value)}
      placeholder='Search in Title'/>
      <IoSearchOutline
        onClick={()=>handleTitleFilter}
        className= "absolute -right-[6.7rem]  top-[1.6rem] -translate-y-1/2 text-[18px] hover:cursor-pointer"
        />
     </div>

     <p className='text-xl font-lightbold block '>Max Price</p>
     <div className='relative w-28 mb-4 mt-2'>
      <input className='rounded-md p-3 border-[#b7b7b7] border '
      type='text'
      onKeyDown={handleKeyDownPrice}
      onChange={(e)=>{setPrice(e.target.value)}}
      placeholder='Price lower than'/>
      <IoSearchOutline
          onClick={()=>handlePriceFilter}
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

export default ProductsFilter
