import ReviewStars from "../Components/ReviewStars";
import { getData } from "../APICALLS";
import { useQuery } from "react-query";
import { Link ,useNavigate} from "react-router-dom";

const TrendingProducts = () => {
  const navigate=useNavigate()
  const getTrendingProducts = async () => {
    const data = await getData("products/category/trending%20products");
    if (data.found === false) return null;
    return data.products;
  };

  const {
    data: trendingProducts,
    isLoading,
    isError,
  } = useQuery("trendingProducts", getTrendingProducts);

  if (isLoading)
    return (
      <div className="flex h-60 justify-center items-center text-2xl font-lightbold">
        Loading...
      </div>
    );

  if (isError)
    return (
      <div className="flex h-60 justify-center items-center text-2xl font-lightbold">
        {isError.message}
      </div>
    );

  return (
    <div className="gap-5  overflow-x-auto  scrollbar-hide md:scrollbar-show">
      <div className="flex  h-16 gap-5 py-10">
        <p className="font-lightbold text-2xl ">Trending Products</p>
        <p className="text-sm font-lightbold text-green bg-[#EDFAF6] h-10 p-2 px-4">
          BEST SELLER
        </p>
      </div>

      <div className="flex  gap-5 p-4">
        {trendingProducts.map((product) => (
          <div
            key={product.title}
            className="flex justify-center hover:shadow-dark-xl max-w-48 p-4
            hover:cursor-pointer rounded-sm"
          >
            <div className=" max-w-36  "
            onClick={()=>navigate("/shop/trending/trending products/"+product._id)}
            >
              <img
                className="h-40 w-36 object-contain"
                src={product.img}
                alt="product here"
              />
              <p>{product.title}</p>
              <div className="py-3 ">
                <ReviewStars
                  stars={product.rating}
                  reviewCount={product.reviewCount}
                />
              </div>
              <p className="font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TrendingProducts;
