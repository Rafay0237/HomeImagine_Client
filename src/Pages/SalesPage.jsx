import SalesCard from '../Components/SalesCard'
import { useQuery } from "react-query";
import { getData } from "../APICALLS";

const SalesPage = () => {

  const getProducts = async () => {
    const data = await getData("products/category/Sale");
    if (data.found === false) return null;
    return data.products;
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("salesProducts", getProducts);

  if (isLoading)
    return (
      <div className="flex h-[80vh] justify-center items-center text-3xl text-dark-grey font-semibold">
        Loading...
      </div>
    );

  if (isError)
    return (
      <div className="flex h-[80vh] justify-center items-center text-3xl text-dark-grey font-semibold">
      {isError}
      </div>
    );


  return (
    <div className='bg-[#F4F4F4]  pb-20 border-b border-dark-grey'>
      <div className='w-full md:w-[80%] pt-10  bg-grey mx-auto '>

      <div className='flex flex-col md:flex-row bg-white mb-4 mx-6 md:mx-0'>
      <div className='p-10 w-full md:w-[40%]'>
      <p className='bg-green p-2 text-white w-28 text-sm'>
        Up to 40% Off</p>
      <p className='text-[25px] font-lightbold py-2 pb-4'>
        The Ultimate Vanity Sale</p>
      <p className=''>Give your bathroom a refresh with a vanity in your favorite finish</p>
      </div>

      <div className='w-full md:w-[60%]'>
      <img alt='Sale Product'
      className='  object-contain'
      src='https://st.hzcdn.com/fimgs/8bc18b630643b1a3_2583-w900-h406-b0-p0--home-design.jpg'/>
      
      </div>

      </div>
      {products?
      <div className='p-5 xs:p-10 pb-20 bg-white grid grid-cols-2 md:grid-cols-3 gap-16 bg-red'>
      { products.map((product=>(
        <SalesCard product={product} key={product._id}/>
      )))}
      </div>
      :
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
      }

      </div>

    </div>
  )
}

export default SalesPage
