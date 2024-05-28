import { SiHomeadvisor } from "react-icons/si";
import { Link } from "react-router-dom";
import OrderDetails from "../Components/OrderDetails";
import EditShippingAddress from "../Components/EditShippingAddress";
import { useState } from "react";
import { useSelector } from "react-redux";
import PaymentWStripe from "../Components/PaymentWStripe";
import { getData } from "../APICALLS";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const {cartItems}= useSelector(state=>state.cart)
  const {currentUser}=useSelector(state=>state.user)
  const [showEdit, setShowEdit] = useState(false);
  const [checkoutPhase, setCheckoutPhase] = useState(1);
  const [loading, setLoading] = useState(false);

  const checkShippingAddressExists=async()=>{
    setLoading(true)
    getData("products/shipping-address/"+currentUser.user._id).then((data)=>{
      if(!data.found){
      toast.error(data.message)
      setLoading(false)
      }else{
        setLoading(false)
        setCheckoutPhase(2)
      }
    })
  }

  return (
    <div className="mb-10">
      <div
        className="flex h-[65px]  justify-between px-[5%]
       border-[#e9e8e8] border-b"
      >
        <div className="flex gap-5 items-center">
          <SiHomeadvisor className="h-12 w-12 text-[#4DBC15]" />
          <p className="text-[22px] font-[590]">Home Imagine</p>
          <p className="text-[18px] font-lightbold">Checkout</p>
        </div>

        <div className="flex items-center underline hover:cursor-pointer">
          <Link to="/cart">Back to Cart</Link>
        </div>
      </div>

      <div className="flex flex-col  items-center">
        <div className="flex flex-col lg:flex-row pt-5 w-[90%] ">

         <div className="w-full lg:w-2/3 p-2">
         { cartItems.length!==0 &&
            <div className="flex flex-col gap-5">
              <div className=" border-[#e9e8e8] border-b pb-5">
                <div className={"flex gap-3 "+(checkoutPhase===1? "text-black":"text-light-grey ")}>
                  <p
                    className={"flex justify-center items-center h-10 w-10  text-2xl font-lightbold rounded-full border " +(checkoutPhase===1? "border-black":"border-light-grey ")}
                  >
                    1
                  </p>
                  <p className="text-2xl font-lightbold"> Shipping Address</p>
                </div>

                {checkoutPhase===1 && 
                <>
                {showEdit ? (
                  <EditShippingAddress setShowEdit={setShowEdit} setCheckoutPhase={setCheckoutPhase}/>
                ) : (
                  <div className="flex justify-end gap-3 my-4">
                    <button
                      onClick={() => setShowEdit(true)}
                      className="border-green  w-[30%] border p-3 px-5 text-green font-lightbold rounded-md hover:bg-[#fafafa]"
                    >
                      Edit/Add New Address
                    </button>
                    <button
                      disabled={loading}
                      onClick={checkShippingAddressExists}
                      className="bg-green w-[20%] p-3 px-5 text-white font-lightbold rounded-md hover:bg-dark-green"
                    >
                     {!loading? "Continue" :"Loading..."}
                    </button>
                  </div>
                )}
                </>}
              </div>

              <div className=" border-[#e9e8e8] border-b pb-5">
            
                <div className={"flex gap-3 "+(checkoutPhase===2? "text-black":"text-light-grey")}>
                  <p
                    className={"flex justify-center items-center h-10 w-10  text-2xl font-lightbold rounded-full border " +(checkoutPhase===2? "border-black":"border-light-grey ")}
                  >
                    2
                  </p>
                  <p className="text-2xl font-lightbold"> Payment Method</p>
                </div>

                {checkoutPhase===2&&
                <PaymentWStripe cartItems={cartItems} currentUser={currentUser} setCheckoutPhase={setCheckoutPhase}/>
                }
              </div>

              <div className=" border-[#e9e8e8] border-b pb-5">
            
                <div className={"flex gap-3 "+(checkoutPhase===3? "text-black":"text-light-grey")}>
                  <p
                    className={"flex justify-center items-center h-10 w-10  text-2xl font-lightbold rounded-full border " +(checkoutPhase===2? "border-black":"border-light-grey ")}
                  >
                    3
                  </p>
                  <p className="text-2xl font-lightbold"> Delivery Details</p>
                </div>

                {checkoutPhase===3&&
                <div className="flex flex-col gap-3 items-center pt-5 ">
                 <p className="text-2xl">Your order will be received in 3-7 days</p>
                 <p>Check you Email for further details</p>
                 <Link to="/shop">
                 <button className="bg-green text-white p-3 rounded-md w-60 hover:bg-dark-green">
                  Continue Shopping</button>
                 </Link>
                  </div>
                }
              </div>

            </div>}
          </div>
          <div className="w-full lg:w-1/3 ">
            <OrderDetails showCheckoutBtn={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
