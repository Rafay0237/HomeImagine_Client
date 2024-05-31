import { useEffect, useState } from 'react';
import ReviewStars from './ReviewStars'
import { FaHeart } from "react-icons/fa";
import {useSelector,useDispatch} from "react-redux"
import { addToFavItems } from '../redux/user/ideabooks';
import { Link } from 'react-router-dom';

const SalesCard = ({product}) => {
  const {items} =useSelector((state)=>state.ideabook)
  const [inFav,setInFav]= useState(false)
  const dispatch=useDispatch()

  useEffect(()=>{
  let found=items.some(item=>item._id===product._id)
  if(found){
    setInFav(true)
  }
  },[items])

  return (
    <div className='relative h-[20rem] w-[14rem] md:h-[28rem] md:w-[18rem] '>

      <img alt='Sale Item'
      className='h-[12rem] md:h-[18rem]'
      src={product.img}/>

      <Link to={"/shop/sales/vanity/"+product._id}>
      <p className='h-20 p-2 pt-4 text-base md:text-xl hover:underline'>{product.title}</p>
     <ReviewStars stars={product.rating} reviewCount={product.reviewCount}/>
     <p className='text-white bg-green p-1 px-2 font-lightbold w-[46px] text-sm my-2'>SALE</p>
     
     <div className='flex items-center gap-2'>
     <p className="text-[18px] text-[#393838] font-lightbold">${product.price}</p>
     <p className="text-[14px] text-dark-grey font-lightbold line-through">${product.oldPrice}</p>
     </div>
     </Link>

    <div className='flex items-center justify-center h-8 w-8 hover:cursor-pointer hover:h-9 hover:w-9 absolute top-2 right-2 rounded-full bg-grey'>
    <FaHeart 
    onClick={()=>dispatch(addToFavItems(product))}
    className={'h-5 w-5 '+ (inFav ? "text-green": "text-dark-grey ")}/>
    </div>
    </div>
  )
}

export default SalesCard
