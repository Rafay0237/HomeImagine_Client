import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getData } from "../APICALLS";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/user/cartSlice";
import ProductDescription from "../Components/ProductDescription";
import ReviewStars from "../Components/ReviewStars";
import TrendingProducts from "../Components/TrendingProducts"
import toast from "react-hot-toast";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const scrollRef=useRef()

  const getProduct = async () => {
    const data = await getData("products/" + id);
    if (data.found === false) return null;
    return data.product;
  };

  const {
    data: product,
    isLoading,
    isError,
    refetch
  } = useQuery("product", getProduct);

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [product]);

  const handleQtyChange = (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    if (value === "" || (value >= 1 && value <= 47)) {
      setQuantity(value);
    }
  };

  const handleAddToCart=()=>{
    let productToAdd={
      id:product._id,
      title:product.title,
      qty:quantity,
      img:product.img,
      price:product.price
    }
   dispatch(addToCart(productToAdd))
   toast.success("Product Added")
  }

  return (
    <div ref={scrollRef}>
      {isLoading ? (
        <div className="flex justify-center w-full mt-12">
          <p className="text-3xl">Loading...</p>
        </div>
      ) : isError ? (
        <div>
          <div className="flex justify-center w-full mt-12">
            <p className="text-3xl">{isError}</p>
          </div>
        </div>
      ) : (
        <div className="p-5">
          <div className="flex flex-col sm:flex-row ">
            <div className="flex flex-col w-full md:w-[60%] gap-7 pt-10 ">
              <div className="flex justify-end ">
                <img
                  className="object-contain h-[80vh] w-[90%] "
                  src={product.detailImg}
                  alt="display product here"
                />
              </div>

              <ProductDescription details={product.detail} />
            </div>

            <div className="flex flex-col gap-5 h-[80vh] w-full md:w-[40%]  p-10 ">
              <p className="text-2xl sm:text-[25px] font-lightbold">
                {product.title}
              </p>

              <div className="flex  gap-4">
                <ReviewStars
                  stars={product.rating}
                  reviewCount={product.reviewCount}
                />
                {product.reviewCount > 10 && (
                  <p
                    className="text-green bg-[#EDFAF6] p-2 -mt-1 
                    text-sm font-lightbold"
                  >
                    {product.reviewCount} Reviews
                  </p>
                )}
              </div>

              <div className="flex gap-3 items-center">
              <p className="text-2xl text-[#393838] font-semibold">${product.price}</p>
              {product.oldPrice&&
                <p className="text-base text-dark-grey font-lightbold line-through">${product.oldPrice}</p>}
              {product.sale&&
                <p className="text-base text-green font-lightbold">{product.sale}%</p>}
              </div>

              <p className="font-lightbold">Free Shipping </p>
              <p>Est. Delivery: 3-7 Days</p>

              <div className="flex justify-between mt-3 ">

                <div className="flex items-center  gap-3 border border-[#CCCCCC] 
                px-3 rounded-sm font-lightbold text-[#3c3c3c]">
                  <p>Qty:</p>
                  <input
                    className="h-12 w-12 "
                    type="number"
                    onChange={handleQtyChange}
                    placeholder="1"
                    value={quantity}
                  />
                </div>

                <button
                  className="w-[70%] bg-green text-white  hover:bg-dark-green
             rounded-md font-lightbold p-4"
             onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center ">
        <div className="w-[90%]">
      <TrendingProducts/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
