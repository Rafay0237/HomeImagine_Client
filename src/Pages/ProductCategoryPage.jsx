import { useParams, Link } from "react-router-dom";
import TrendingProducts from "../Components/TrendingProducts";

const ProductCategoryPage = () => {
  const { category } = useParams();
  return (
    <div className="flex justify-center">
      <div className="mx-auto w-[90%] sm:w-[80%] pt-20 ">
        <p className="text-3xl font-lightbold">{category}</p>
        <div>
          {furnitureData.subCategories.map((cat) => (
            <div key={cat.title}>
              <p className="text-2xl font-lightbold py-3">{cat.title}</p>
              <div className="flex flex-wrap gap-5 ">
                {cat.items.map((item) => (
                  <div className="relative w-[10rem] xs:w-[12rem] sm:w-[17rem] bg-grey " key={item.title}>
                    <Link to={item.title}>
                      <div className="flex justify-end text-end">
                        <img
                          src={item.img}
                          className="w-[10rem] xs:w-[12rem]  sm:w-[14rem] h-[13rem] sm:h-[15rem] object-contain "
                        />
                      </div>

                      <p className="absolute top-4 left-3  w-32 hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <TrendingProducts />
      </div>
    </div>
  );
};

let furnitureData = {
  title: "Furniture",
  subCategories: [
    {
      title: "Living Room Furniture",
      items: [
        {
          title: "Sofas & Sectionals",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12494-12495@2x.jpg",
        },
        {
          title: "Room Tables",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12494-533@2x.jpg",
        },
        {
          title: "Chairs",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12494-526@2x.jpg",
        },
      ],
    },
    {
      title: "Kitchen & Dining Furniture",
      items: [
        {
          title: "Bar Stools & Counter Stools",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12493-430@2x.jpg",
        },
        {
          title: "Dining Tables",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12493-452@2x.jpg",
        },
        {
          title: "Dining Chairs",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12493-969@2x.jpg",
        },
      ],
    },
    {
      title: "Bedroom Furniture",
      items: [
        {
          title: "Beds",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12492-547@2x.jpg",
        },
        {
          title: "Headboards",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12492-549@2x.jpg",
        },
        {
          title: "Dressers",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12492-551@2x.jpg",
        },
      ],
    },
    {
      title: "Home Office Furniture",
      items: [
        {
          title: "Desks",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12496-580@2x.jpg",
        },
        {
          title: "Office Chairs",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12496-581@2x.jpg",
        },
        {
          title: "Filing Cabinets",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12496-585@2x.jpg",
        },
      ],
    },
    {
      title: "Outdoor Furniture",
      items: [
        {
          title: "Outdoor Lounge Furniture",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-675-15073@2x.jpg",
        },
        {
          title: "Outdoor Dining Furniture",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-675-15279@2x.jpg",
        },
        {
          title: "Outdoor Chaise Lounges",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-675-680@2x.jpg",
        },
      ],
    },
    {
      title: "Bathroom Storage & Vanities",
      items: [
        {
          title: "Bathroom Vanities",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-467-469@2x.jpg",
        },
        {
          title: "Bathroom Cabinets",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-467-466@2x.jpg",
        },
        {
          title: "Bathroom Shelves",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-467-30522@2x.jpg",
        },
      ],
    },
    {
      title: "Storage Furniture",
      items: [
        {
          title: "Bookcases",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12524-1055@2x.jpg",
        },
        {
          title: "Buffets & Sideboards",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12524-456@2x.jpg",
        },
        {
          title: "Media Storage",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12524-625@2x.jpg",
        },
      ],
    },
    {
      title: "Entryway Furniture",
      items: [
        {
          title: "Benches",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12497-531@2x.jpg",
        },
        {
          title: "Console Tables",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12497-1052@2x.jpg",
        },
        {
          title: "Coat Racks",
          img: "https://www.houzz.com/jpics/20240519004932/mp-landing/department-landing-12497-627@2x.jpg",
        },
      ],
    },
  ],
};

export default ProductCategoryPage;
