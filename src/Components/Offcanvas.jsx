import {useState} from 'react'
import { IoFilterOutline } from "react-icons/io5";
import ProsFilter from './ProductsFilter';


const Offcanvas = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='mx-14 mb-4'>
      <div className='flex gap-2'>
      <IoFilterOutline className='h-10 w-10 cursor-pointer'
      onClick={()=>setIsOpen(!isOpen)}/>
      <p className='text-xl font-lightbold border-b-2 border-[#b7b7b7] max-w-60 px-4'
      >Filter Search Results </p>
      </div>
    {
    isOpen&&
    <div className='flex  '>
     <ProsFilter/>
    </div>
    }
    </div>
  )
}

export default Offcanvas

