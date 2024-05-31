import { useSelector ,useDispatch} from "react-redux";
import OrderDetails from "../Components/OrderDetails";
import { incrementQty,decrementQty,removeItem,
  clearCart,calculateTotal } from "../redux/user/cartSlice";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch=useDispatch()

  useEffect(()=>{
  dispatch(calculateTotal(cartItems))
  },[cartItems])

  return (
    <div className="flex flex-col  items-center">
      <div className="flex flex-col lg:flex-row pt-5 w-[90%] mb-10 ">

        <div className="w-full lg:w-2/3 p-2">
          <div className="flex justify-between pb-3">
          <p className="text-[24px] font-lightbold">Your Cart</p>
        {cartItems && cartItems.length!==0 &&
          <p className="p-3 mr-10 rounded-md text-base font-lightbold
           text-red-700 hover:cursor-pointer hover:text-red"
          onClick={()=>dispatch(clearCart())}>
            Delete All
            </p>}
          </div>
        {cartItems && cartItems.length>0 ?
          <div className="flex flex-col  border-[#E6E6E6] border w-[95%] ">
          {cartItems.map((item)=>(
            <div className="flex flex-col sm:flex-row h-60 sm:h-48 gap-[5%] p-5  justify-between
              border-[#E6E6E6] border-b relative"
            key={item.title}>

             <div className="flex justify-between w-full sm:w-[55%]">
              <img
                src={item.img}
                className="h-32 w-36 object-scale-down"
                alt="item here"
              />
              <p className="w-[50%] font-lightbold mt-5">
                {item.title.slice(0,50)}
                {item.title.length>49 &&"..." }
              </p>
              </div>

              <div className="flex justify-between w-full sm:w-[35%]">
              <p className="font-lightbold text-2xl mt-7">${item.price}</p>

              <div className="flex gap-3 font-lightbold mt-7">
                <p onClick={()=>dispatch(decrementQty(item.id))}
                className="text-2xl bg-red-700 h-9 px-3  rounded-xl text-white hover:cursor-pointer hover:bg-red">
                  -
                </p>
                <p className="text-xl pt-1">{item.qty}</p>
                <p onClick={()=>dispatch(incrementQty(item.id))}
                 className="text-2xl bg-green h-9 px-3  rounded-xl text-white hover:cursor-pointer hover:bg-dark-green">
                  +
                </p>
              </div>
            </div>
        
              <MdDelete className="absolute top-2 right-2 h-6 w-6 hover:cursor-pointer hover:text-red-700"
              onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
            ))
          }
          </div>
          :<div className="flex h-[40vh] w-[95%] justify-center items-center">
          <p className="text-3xl text-dark-grey">
            Cart is Empty 
          </p>
          </div>
          }
          
        </div>

        <div className="w-full lg:w-1/3 ">
          <OrderDetails showCheckoutBtn={true} />
        </div>

      </div>

    </div>
  );
};

export default CartPage;
