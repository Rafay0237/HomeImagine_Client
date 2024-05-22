import { useEffect, useState } from "react";

const ProductDescription = ({ details }) => {
  const [text, setText] = useState();
  const [underline, setUnderline] = useState(1);

  useEffect(()=>{
  setText(details?.desc)
  },[details])

  return (
    <div className="h-[60vh]  pl-5">
      <div className="flex gap-7 py-5">
        <p
          className={"text-[15px] font-lightbold border-green hover:text-green hover:cursor-pointer"
            + (underline===1 &&" border-b-4")}
          onClick={() => {
            setText(details?.desc), setUnderline(1);
          }}
        >
          Product Description
        </p>
        <p
          className={"text-[15px] font-lightbold border-green hover:text-green hover:cursor-pointer"
          + (underline===2 &&" border-b-4")}
          onClick={() => {
            setText(details?.specs), setUnderline(2);
          }}
        >
          Product Specifications
        </p>
        <p
          className={"text-[15px] font-lightbold border-green hover:text-green hover:cursor-pointer"
          + (underline===3 &&" border-b-4")}
          onClick={() => {
            setText(details?.shipping), setUnderline(3);
          }}
        >
          Shipping and Returns
        </p>
      </div>

      <div className="">
        <p className="">
            {text}
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
