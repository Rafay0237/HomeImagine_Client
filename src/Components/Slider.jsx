import {useState} from 'react'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Slider = ({images}) => {
    const [currentImage,setCurrentImage]=useState(0)

  return (
    <div className='flex relative '>

        <button className='rounded-full bg-white shadow-md  p-2 absolute left-5 top-[50%] '
      onClick={()=>currentImage===0?setCurrentImage(3):setCurrentImage(currentImage-1)}
      ><GrFormPrevious className='text-3xl text-dark-grey'/></button>

      {images.map(img=>(
          <img 
          className={'object-contain w-[90%] mx-auto rounded-md shadow-lg'
          +(images[currentImage]!=img&&" hidden")}
          src={img} alt='Project Wallparers'
          key={img} />
          ))}

      <button className='rounded-full bg-white  p-2 shadow-lg absolute right-5  top-[50%] '
      onClick={()=>currentImage===3?setCurrentImage(0):setCurrentImage(currentImage+1)}
      ><GrFormNext className='text-3xl text-dark-grey'/></button>

      </div>
  )
}

export default Slider
