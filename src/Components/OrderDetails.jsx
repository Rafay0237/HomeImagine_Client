import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderDetails = ({showCheckoutBtn}) => {
  const { totalAmount,productsQty } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col p-5 gap-5 border-[#E6E6E6] border w-[90%] mt-5 ml-2 ">
      <div className="flex justify-between border-[#E6E6E6] border-b pb-3">
        <p className="text-xl font-lightbold">Order Details</p>
        <p className="text-[13px] underline">{productsQty} items</p>
      </div>

      <div className="flex flex-col gap-4 border-[#E6E6E6] border-b pb-3">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="font-lightbold">{totalAmount}</p>
        </div>

        <div className="flex justify-between">
          <p>Shipping</p>
          <p className="font-lightbold">Free</p>
        </div>

        <div className="flex justify-between">
          <p>Estimated Tax</p>
          <p className="font-lightbold">--</p>
        </div>

        <p className="underline">Add Code or Gift Card</p>
      </div>

      <div>
        <div className="flex justify-between pb-4">
          <p className="font-lightbold text-green text-2xl">Total</p>
          <p className="font-lightbold text-green text-2xl">Rs. {totalAmount}</p>
        </div>
        {showCheckoutBtn && productsQty>0 &&
        <Link to="/checkout">
        <button className="bg-green text-white font-lightbold p-3 w-full
        rounded-md hover:bg-dark-green"
        >
            Proceed to Checkout
        </button>
          </Link>
          }
      </div>
    </div>
  );
};

export default OrderDetails;
