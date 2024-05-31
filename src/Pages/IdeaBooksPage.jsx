import { useSelector,useDispatch } from "react-redux"
import ReviewStars from "../Components/ReviewStars"
import { Link } from "react-router-dom"
import { removeItem, clearItems} from "../redux/user/ideabooks"
import { addToCart } from "../redux/user/cartSlice"
import toast from "react-hot-toast"
import { MdDelete } from "react-icons/md";

const IdeaBooksPage = () => {
  const {items}= useSelector((state)=>state.ideabook)
  const dispatch =useDispatch()

  return (
    <div className='flex flex-col items-center min-h-[80vh] '>

      <div className="flex w-[80%] justify-between pt-10">
        <p className="text-2xl ">Your Ideabook</p>
      {items && items.length!==0 &&
          <p className="p-3 mr-10 rounded-md text-base font-lightbold
          text-red-700 hover:cursor-pointer hover:text-red"
          onClick={()=>dispatch(clearItems())}>
            Delete All
            </p>}
          </div>

      <div className='flex flex-wrap gap-10 w-[80%] pb-10 '>
      {items.length!==0 ? items.map((item)=>(
        <ProductCard product={item} key={item._id}/>
      ))
      : 
      <div className="flex items-center justify-center h-[60vh] w-full">
       <p className="text-3xl text-[#cbcaca] font-lightbold">
        Ideabook is empty, nothing to show here.</p>
        </div>
      }
      </div>
    </div>
  )
}

const ProductCard = ({product}) => {
  const dispatch =useDispatch()
  
  const handleAddToCart=()=>{
    let productToAdd={
      id:product._id,
      title:product.title,
      qty:1,
      img:product.img,
      price:product.price
    }
   dispatch(addToCart(productToAdd))
   toast.success("Product Added")
   dispatch(removeItem(product._id))
  }
  
  return (
    <div className="flex justify-center   w-48 sm:w-56 p-4 rounded-sm hover:shadow-md ">
        <div className="min-w-40 sm:min-w-48 relative" key={product.title}>
          <Link className="bg-black"
           to={"/shop/ideabooks/saved/"+product._id}>
          <img
            className="h-40 w-32 sm:h-48 sm:w-40 object-contain"
            src={product.img}
            alt="product here"
            />
          <p className="h-14 hover:underline">{product.title}</p>
          <div className="py-3">
            <ReviewStars
              stars={product.rating}
              reviewCount={product.reviewCount}
              />
          </div>
          <p className="font-semibold">{product.price}</p>
              </Link>
          <button className="w-full p-2 my-2 rounded-sm text-white font-lightbold bg-green hover:bg-dark-green"
          onClick={handleAddToCart}>
            Add to Cart</button>

            <MdDelete className="absolute top-0 right-0 h-6 w-6 hover:cursor-pointer hover:text-red-700"
              onClick={()=>dispatch(removeItem(product._id))}/>
        </div>
      </div>    
  )
}

export default IdeaBooksPage
