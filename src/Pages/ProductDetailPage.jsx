import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getData } from "../APICALLS";
import ProductDescription from "../Components/ProductDescription";
import ReviewStars from "../Components/ReviewStars";

const ProductDetailPage = () => {
  const { id } = useParams();

  const getProducts = async () => {
    const data = await getData("products/" + id);
    if (data.found === false) return null;
    return data.product;
  };

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery("profiles", getProducts);

  return (
    <div>
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
                  className="object-cover h-[80vh] w-[90%] "
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

              <p className="text-2xl font-semibold">{product.price}</p>

              <p className="font-lightbold">Free Shipping </p>
              <p>Est. Delivery:3-7 Days</p>

            {/* // addto cart */}



            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
