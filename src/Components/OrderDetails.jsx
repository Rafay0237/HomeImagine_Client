import React from "react";

const OrderDetails = ({productsQty,totalAmount}) => {
  return (
    <div className="flex flex-col p-5 gap-5 border-[#E6E6E6] border w-[90%] mt-5 ml-2 ">
      <div className="border-[#E6E6E6] border-b pb-3">
        <p className="text-xl font-lightbold">Order Details</p>
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
          <p className="font-lightbold text-green text-2xl">{totalAmount}</p>
        </div>
        <button className="bg-green text-white font-lightbold p-3 w-full
        rounded-md"
        >
            Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
