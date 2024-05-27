import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/user/cartSlice";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const dispatch =useDispatch()
  
  useEffect(()=>{
  dispatch(clearCart())
  },[])

  return (
    <div class=" flex flex-col justify-center bg-[#EFEFEF] h-[100vh]">
      <div class="bg-white p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div class="text-center">
          <h3 class="md:text-2xl text-base text-dark-grey font-semibold text-center">
            Payment Successful!
          </h3>
          <p class=" my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div class="py-10 text-center">
            <Link
            to="/"
              class="px-12 bg-purple hover:bg-[#8542c9] text-white font-semibold py-3 rounded-sm"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
