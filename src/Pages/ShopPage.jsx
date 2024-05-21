import { Link } from "react-router-dom";
import TrendingProducts from "../Components/TrendingProducts";


const ShopPage = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-auto w-[80%] ">
        <img
          src="https://st.hzcdn.com/fimgs/6d61f17a06460310_4337-w900-h250-b0-p0--.jpg"
          className="h-60 w-full object-contain pt-4"
          alt="home background"
        />

        <div className="flex flex-wrap gap-4 py-4 justify-center">
          {data.map((cat) => (
            <div className="gap-5 " key={cat.title}>
              <div className="relative">
                <Link to={cat.title}>
                  <img
                    className="h-[15rem] w-[21rem] object-contain "
                    src={cat.img}
                    alt="category"
                  />
                  <p className="absolute top-12 left-4 text-base hover:underline font-lightbold">
                    {cat.title}
                  </p>
                </Link>
              </div>
              {cat.categories.map((categoryTitle) => (
                <Link key={categoryTitle}>
                  <p className="text-[17px] pb-1 pl-1">{categoryTitle}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <TrendingProducts/>
        
      </div>
    </div>
  );
};

let data = [
  {
    title: "Furniture",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-12491@2x.jpg",
    categories: [
      "Sofas & Sectionals",
      "Room Tables",
      "Chairs",
      "Bar stools",
      "Beds",
      "Beadboards",
      "Bookcases",
      "Cabinets",
    ],
  },
  {
    title: "Outdoor",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-639@2x.jpg",
    categories: [
      "Lounge furniture",
      "Lining furniture",
      "Chaise",
      "Pillows",
      "Rugs",
      "Lighting",
    ],
  },
  {
    title: "Kitchen",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-468@2x.jpg",
    categories: [
      "dining chairs",
      "dining sets",
      "dining tables",
      "fridges",
      "sinks",
      "dinnerware",
      "cups",
      "wall and floor tile",
    ],
  },
  {
    title: "Home Improvement",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-12509@2x.jpg",
    categories: ["tile", "heating and cooling", "building materials"],
  },
  {
    title: "Lighting",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-579@2x.jpg",
    categories: ["table lamps", "bathroom vanity lighting", "chandeliers"],
  },
  {
    title: "Home Decor",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-489@2x.jpg",
    categories: ["rugs", "mirrors", "wall decor", "pillows and throws"],
  },
  {
    title: "Bedroom",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-538@2x.jpg",
    categories: ["lamps", "dressers", "decor"],
  },
  {
    title: "Storage",
    img: "https://www.houzz.com/jpics/20240519004932/mp-landing/shop-landing-629@2x.jpg",
    categories: ["shelving", "media storage", "office storage"],
  },
];


export default ShopPage;
