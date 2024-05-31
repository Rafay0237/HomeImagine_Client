import ReviewStars from "../Components/ReviewStars";
import { getData } from "../APICALLS";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToFavItems } from "../redux/user/ideabooks";
import { useState, useEffect } from "react";

const TrendingProducts = () => {
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
          <TrendingProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};

const TrendingProductCard = ({ product }) => {
  const { items } = useSelector((state) => state.ideabook);
  const [inFav, setInFav] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let found = items.some((item) => item._id === product._id);
    if (found) {
      setInFav(true);
    }
  }, [items]);

  return (
    <div className="flex justify-center hover:shadow-xl min-w-60 p-4 rounded-sm relative"
    >
      <div className=" max-w-48 px-4">
        <Link to={"/shop/trending/trending products/" + product._id}
        className="hover:cursor-pointer ">
        <img
          className="h-40 w-36 object-contain"
          src={product.img}
          alt="product here"
        />
          <p className="h-16">{product.title}</p>
          <div className="py-3 ">
            <ReviewStars
              stars={product.rating}
              reviewCount={product.reviewCount}
            />
          </div>
          <p className="font-semibold">{product.price}</p>
        </Link>
      </div>
      <div className="flex items-center justify-center h-8 w-8 hover:cursor-pointer hover:h-9 hover:w-9 absolute top-2 right-2 rounded-full bg-grey">
        <FaHeart
          onClick={() => dispatch(addToFavItems(product))}
          className={"h-5 w-5 " + (inFav ? "text-green" : "text-dark-grey ")}
        />
      </div>
    </div>
  );
};

export default TrendingProducts;
