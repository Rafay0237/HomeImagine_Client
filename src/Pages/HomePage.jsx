import React from 'react'
import DepartmentCardRow from '../Components/DepartmentCardRow'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-[80vh] '>

      <div className='flex flex-col md:flex-row relative p-2'>
        <img
        src='https://www.2modern.com/cdn/shop/files/06-05_Portable-Lamps-Sale_Desktop_1440x.jpg?v=1717594780'
        alt='Room design'
        className='object-contain '
        />
        
        <div className='flex flex-col md:absolute md:top-0 md:left-0 lg:left-[10%] md:w-[70%] lg:w-[50%] p-8 md:p-12 sm:p-20 gap-5 bg-white items-center'>
        <p className='text-3xl sm:text-5xl text-center font-inter'>Exclusive Vanity Products Sale</p>
        <p className='text-xl font-inter'>Get your glo on the glow, indoor and out.</p>
        <Link to="/sales"
        className='w-1/3 '>
        <button className='bg-[#6D5E68] p-3 w-full  text-white font-lightbold hover:opacity-95'>
          Shop Now
          </button>
        </Link>
        </div>
      </div>

      <div className='w-[80%] mx-auto mt-16  '>
        <p className='font-lightbold text-[22px] mb-4'>Shop by Department</p>
        <DepartmentCardRow data={dataCat}  homePage={true} 
        endPoint={"/shop/"}/>
      </div>

      <div className='w-[80%] mx-auto mt-12  '>
        <p className='font-lightbold text-[22px] mb-4'>Contact a Local Professional</p>
        <DepartmentCardRow data={dummyDataPro} homePage={true} endPoint={"/pros/"}/>
      </div>

      <div className='flex flex-col lg:flex-row  p-2 w-full my-10 '>
        
        <div className='flex flex-col w-full lg:w-[35%]  p-8 md:p-12 sm:p-20 gap-5 bg-grey items-center'>
        <p className='text-xl font-inter'>STAYCATION STYLES</p>
        <p className='text-5xl font-inter'>Sofas</p>
        <p className='text-base font-inter text-justify'>Boasting contemporary designs with resort-worthy appeal, our collection offers an extensive range of sofas that effortlessly upgrade any outdoor setting. Our sofas add elegance to your outdoor living area, transforming gardens into stylish oases.</p>
        <Link to="/shop/Furniture/Sofas & Sectionals"
        className='w-1/3 '>
        <button className='bg-[#6D5E68] p-3 w-full  text-white font-lightbold hover:opacity-95'>
          Shop Now
          </button>
        </Link>
        </div>

        <img
        src='https://www.2modern.com/cdn/shop/files/06-05_Vondom_720x@2x.jpg?v=1717594780'
        alt='Room design'
        className='object-contain w-full lg:w-[65%] '
        />
      </div>

    </div>
  )
}

let dummyDataPro = [
  {
    img: "https://st.hzcdn.com/fimgs/2a0140f308f8fdee_2947-w154-h102-b0-p0---.jpg",
    title: "Bathroom Remodeling",
  },
  {
    img: "https://st.hzcdn.com/fimgs/2ed1254808f8fdcc_2914-w154-h102-b0-p0---.jpg",
    title: "Home Remodeling",
  },
  {
    img: "https://st.hzcdn.com/fimgs/ba015ce408f8fdb9_2895-w154-h102-b0-p0---.jpg",
    title: "Kitchen Remodeling",
  },
  {
    img: "https://st.hzcdn.com/fimgs/pictures/exteriors/untitled-project-andrew-snow-photography-img~e74120660647b6d0_7193-1-7a19646-w154-h102-b0-p0.jpg",
    title: "General Contracting",
  },
  {
    img: "https://st.hzcdn.com/fimgs/7361d44608093f2b_1016-w154-h102-b0-p0---.jpg",
    title: "New Home Construction",
  },
  {
    img: "https://st.hzcdn.com/fimgs/9eb14df708f8fdc9_2912-w154-h102-b0-p0---.jpg",
    title: "Interior Design",
  },
  {
    img: "https://st.hzcdn.com/fimgs/pictures/exteriors/my-houzz-multi-generational-living-lucy-call-img~58618b1f064ccbfe_2634-1-56b9e69-w154-h102-b0-p0.jpg",
    title: "Home Addition",
  },
  {
    img: "https://st.hzcdn.com/fimgs/d2f1399508f8fdd8_2927-w154-h102-b0-p0---.jpg",
    title: "Deck Building",
  },
  {
    img: "https://st.hzcdn.com/fimgs/pictures/landscapes/landscape-and-pool-design-joe-a-gayle-and-associates-img~b19129e6000d6235_6730-1-979772b-w154-h102-b0-p0.jpg",
    title: "Landscape Design",
  },
];

let dataCat = [
  {
    title: "Furniture",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-12491@2x.jpg",
  },
  {
    title: "Outdoor",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-639@2x.jpg",
  },
  {
    title: "Kitchen",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-468@2x.jpg",
  },
  {
    title: "Home Improvement",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-12509@2x.jpg",
  },
  {
    title: "Lighting",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-579@2x.jpg",
  },
  {
    title: "Home Decor",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-489@2x.jpg",
  },
  {
    title: "Bedroom",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-538@2x.jpg",
  },
  {
    title: "Storage",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-629@2x.jpg",
  },
];

export default HomePage
