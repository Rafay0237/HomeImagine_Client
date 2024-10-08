import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getData } from "../APICALLS";
import ProductsFilter from "../Components/ProductsFilter";
import Offcanvas from "../Components/Offcanvas";
import ProductCard from "../Components/ProductCard";
import TrendingProducts from "../Components/TrendingProducts"
import { useEffect, useState ,useRef} from "react";

const ProductsPage = () => {
  const { subCategory } = useParams();
  const [products,setProducts]=useState(null)
  const scrollRef=useRef()

  const getProducts = async () => {
    const data = await getData("products/category/" + subCategory);
    if (data.found === false) return null;
    return data.products;
  };

  const {
    data,
    isLoading,
    isError,
  } = useQuery("products", getProducts);

  useEffect(()=>{
    if(data){
      setProducts(data)
    }
  },[data])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [products]);

  return (
    <div className="p-5" ref={scrollRef}>

      <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 gap-4 ">
        <div className="w-1/4  mx-auto lg:mx-0  hidden lg:block ">
          <p className="text-xl font-lightbold border-b-2 border-[#b7b7b7] max-w-60 px-4">
            Filter Search Results
          </p>
          <ProductsFilter setProducts={setProducts} />
        </div>
        <div className="max-w-sm  block lg:hidden  ">
          <Offcanvas />
        </div>
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
          <div className="w-full lg:w-3/4   ">
            {products&& products.length!==1 ? (
              <div className="flex  flex-row gap-5 pt-8  px-0 sm:px-4 flex-wrap ">
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
        )}
      </div>

    <img
    className="hidden sm:block p-10 py-16 hover:cursor-pointer object-contain"
    src="https://st.hzcdn.com/static/shop-houzz/furniture/trending_banner_living-room-furniture_dweb.png"
    alt="sofa sale"
    />

   <TrendingProducts/>

    </div>
  );
};

export default ProductsPage;
