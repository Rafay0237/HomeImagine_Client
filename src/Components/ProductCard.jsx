import ReviewStars from "./ReviewStars";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToFavItems } from "../redux/user/ideabooks";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
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
    <div className="flex justify-center  hover:shadow-xl w-48 sm:w-56 p-4 rounded-sm relative">
      <div className="max-w-40 sm:max-w-48">
      <Link to={product._id}
      className="hover:cursor-pointer">
        <img
          className="h-40 w-32 sm:h-48 sm:w-40 object-contain"
          src={product.img}
          alt="product here"
        />
        <p className="h-22 sm:h-16 w-full">
          {product.title.length > 60
            ? product.title.slice(0, 60) + "..."
            : product.title}
        </p>
        <div className="py-3">
          <ReviewStars
            stars={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>
        <p className="font-lightbold">Rs. {product.price}</p>
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

export default ProductCard;
