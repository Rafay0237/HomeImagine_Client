import {useState} from 'react'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Slider = ({images}) => {
    const [currentImage,setCurrentImage]=useState(0)

  return (
    <div className='flex relative '>

        <button className='rounded-full bg-white shadow-md  p-2 absolute left-0 sm:left-5 top-[45%] '
      onClick={()=>currentImage===0?setCurrentImage(images.length-1):setCurrentImage(currentImage-1)}
      ><GrFormPrevious className='text-3xl text-dark-grey'/></button>

      {images?.map(img=>(
          <img 
          className={'object-contain h-[25vh] sm:h-[35vh] lg:h-[55vh] w-[90%] mx-auto rounded-md shadow-lg'
          +(images[currentImage]!=img&&" hidden")}
          src={img} alt='Project Wallparers'
          key={img} />
          ))}

      <button className='rounded-full bg-white  p-2 shadow-lg absolute right-0 sm:right-5  top-[45%] '
      onClick={()=>currentImage===images.length-1?setCurrentImage(0):setCurrentImage(currentImage+1)}
      ><GrFormNext className='text-3xl text-dark-grey'/></button>

      </div>
  )
}

export default Slider
