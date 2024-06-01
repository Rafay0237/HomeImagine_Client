import ProductsFilter from "../Components/ProductsFilter";
import Offcanvas from "../Components/Offcanvas";
import ProductCard from "../Components/ProductCard";
import TrendingProducts from "../Components/TrendingProducts";
import { useEffect, useState } from "react";
import { getData } from "../APICALLS";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(null);
  const { search } = useParams();

  useEffect(() => {
    setLoading(true);
    getData("products/search/" + search).then((data) => {
      if (data.found) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    });
    setLoading(false);

  }, [search]);

  if (loading)
    return (
      <div className="flex h-60 justify-center items-center text-2xl font-lightbold">
        Loading...
      </div>
    );

  return (
    <div className="p-5 min-h-[70vh]">
      <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 gap-4 ">
        <div className="w-1/4  mx-auto lg:mx-0  hidden lg:block ">
          <p className="text-xl font-lightbold border-b-2 border-[#b7b7b7] max-w-60 px-4">
            Filter Search Results
          </p>
          <ProductsFilter setProducts={setProducts}  />
        </div>
        <div className="max-w-sm  block lg:hidden  ">
          <Offcanvas />
        </div>
        <div className="w-full lg:w-3/4   ">
          {products&& products.length !== 0 ? (
            <div className="flex  flex-row gap-5 pt-8  px-0 sm:px-4 flex-wrap">
              {products?.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          ) : (
            <div className="pl-5 pt-10">
              <p className="text-2xl font-lightbold ">
                We couldn't find any results
              </p>
              <p className="text-2xl font-lightbold py-3">
                Tips for better results:
              </p>
              <li className="text-base">
                Try removing a filter to see more results
              </li>
            </div>
          )}
        </div>
      </div>

      <img
        className="w-full p-10 py-16 hover:cursor-pointer"
        src="https://st.hzcdn.com/static/shop-houzz/furniture/trending_banner_living-room-furniture_dweb.png"
        alt="sofa sale"
      />

      <TrendingProducts />
    </div>
  );
};

export default SearchResultsPage;
