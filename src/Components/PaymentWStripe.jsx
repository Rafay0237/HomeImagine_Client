import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import { clearCart } from "../redux/user/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

const PaymentWStripe = ({ cartItems, currentUser ,setCheckoutPhase}) => {
  const [loading,setLoading]=useState(false)
  const {productsQty,totalAmount}=useSelector(state=>state.cart)
  const dispatch=useDispatch()

  const handlePayment = async () => {
    setLoading(true)
    const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
    try {
      const response = await fetch(
        import.meta.env.VITE_APP_API_URL + "users/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
          body: JSON.stringify({cartItems,userId:currentUser.user._id,productsQty,totalAmount}),
        }
      );
      const res = await response.json();
      setLoading(false)
      if (res.success) {
        stripe.redirectToCheckout({ sessionId: res.id });
      }
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  };

  const handleSaveDeliveryDetails=async()=>{
    setLoading(true)
    try {
      const response = await fetch(
        import.meta.env.VITE_APP_API_URL + "users/order-save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
          body: JSON.stringify({cartItems,userId:currentUser.user._id,productsQty,totalAmount}),
        }
      );
      const res = await response.json();
      if (!res.success) {
        setLoading(false)
        toast.error("Some error occured")
        return
      }
      dispatch(clearCart())
      setLoading(false)
      toast.success("Order Placed")
      setCheckoutPhase(3)
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  }

    return (
    <div className="flex justify-center gap-5 pt-3">
      { !loading ?<>
      <div className="relative border border-black w-1/2 sm:w-[30%] p-6 rounded-md hover:bg-grey hover:cursor-pointer">
        <p
          disabled={loading}
          onClick={() => handlePayment()}
          className="text-black font-lightbold pl-[30%]"
        >
          By Card
        </p>
        <BsFillCreditCard2BackFill className="h-10 w-10 absolute top-[25%]" />
      </div>
      <div className="relative border border-black w-1/2 sm:w-[30%] p-6 rounded-md hover:bg-grey hover:cursor-pointer">
        <p
          disabled={loading}
          onClick={handleSaveDeliveryDetails}
          className="text-black font-lightbold pl-[30%]"
        >
          Cash on Delivery
        </p>
        <MdDeliveryDining className="h-10 w-10 absolute top-[25%]" />
      </div> 
      </>:
      <div className="text-2xl text-dark-grey font-lightbold h-28">
        Loading...
        
      </div>}
    </div>
  );
};

export default PaymentWStripe;
