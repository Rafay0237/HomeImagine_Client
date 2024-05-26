import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";

const PaymentWStripe = ({ cartItems, token ,setCheckoutPhase}) => {
  const handlePayment = async () => {
    setCheckoutPhase(3)
    return;
    const stripe = await loadStripe("");
    try {
      const response = await fetch(
        import.meta.env.VITE_APP_API_URL + "users/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cartItems),
        }
      );
      const res = await response.json();
      if (res.success) {
        stripe.redirectToCheckout({ sessionId: res.id });
      }
    } catch (err) {
      console.log(err);
    }
  };
    // post orderDetails with nodemailer . both btns
  return (
    <div className="flex justify-center gap-5 pt-3">
      <div className="relative border border-black w-1/2 sm:w-[30%] p-6 rounded-md hover:bg-grey hover:cursor-pointer">
        <p
          onClick={() => handlePayment()}
          className="text-black font-lightbold pl-[30%]"
        >
          By Card
        </p>
        <BsFillCreditCard2BackFill className="h-10 w-10 absolute top-[25%]" />
      </div>
      <div className="relative border border-black w-1/2 sm:w-[30%] p-6 rounded-md hover:bg-grey hover:cursor-pointer">
        <p
          onClick={() => setCheckoutPhase(3)}
          className="text-black font-lightbold pl-[30%]"
        >
          Cash on Delivery
        </p>
        <MdDeliveryDining className="h-10 w-10 absolute top-[25%]" />
      </div>
    </div>
  );
};

export default PaymentWStripe;
