import { Link } from "react-router-dom";

let data = [
  {
    img: "https://www.2modern.com/cdn/shop/products/965360_580x.jpg?v=1583281857",
    title: "Bathroom Remodeling",
  },
  {
    img: "https://www.2modern.com/cdn/shop/files/homepage_3_up_farmhouse_b14b43ac-ce71-44f7-8e3a-8062ae58e882_380x.jpg?v=1698336876",
    title: "Kitchen Remodeling",
  },
  {
    img: "https://www.2modern.com/cdn/shop/files/tier1_tile_living_room_desktop_1ad984bc-35ff-45ae-b2c8-813983c6aa16_600x600.jpg?v=1704899089",
    title: "Living Room",
  },
  {
    img: "https://www.2modern.com/cdn/shop/files/Scandi_380x.jpg?v=1704739016",
    title: "Home Remodeling",
  },
  {
    img: "https://www.2modern.com/cdn/shop/files/Lounge_Chair_600x_7c1801aa-12c1-43f4-8764-0b0d913b08a9_480x.jpg?v=1698336486",
    title: "Home Addition",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0265/0083/products/skagerak-between-lines-deck-chair_view-add01_320x.jpg?v=1659667823",
    title: "Deck Building",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0265/0083/products/hinkley-atlantis-15-inch-path-light-view-add01_320x.jpg?v=1673914461",
    title: "Landscape Design",
  },
  {
    img: "https://st.hzcdn.com/fimgs/a8917cdc0209d40d_1284-w585-h390-b0-p0---.jpg",
    title: "Home Construction",
  },
  {
    img: "https://st.hzcdn.com/fimgs/pictures/exteriors/kennesaw-garage-georgia-contractor-group-img~71f196380f9dca80_6673-1-a32b804-w585-h390-b0-p0.jpg",
    title: "General Contracting",
  },
];


const ProsPage = () => {
  return (
    <div className="min-h-[70vh] mb-16 ">
      <div className='mx-auto w-[90%]  md:w-[80%] mt-12  '>
        <p className='font-lightbold text-[22px] mb-4'>Popular Services</p>
      <div className=" flex flex-wrap gap-6  justify-center ">
        {data?.map((data) => (
              <Link
                to={ data.title}
                key={data.title}
              >
                <DepartmentCard data={data} />
              </Link>
            ))}
       </div>
      </div>
      
    </div>
  )
}

  function DepartmentCard({ data }) {
    return (
      <div className="rounded-md shadow-lg border border-[#F4F4F4] min-w-48 w-[14rem] sm:w-[20rem] h-[12rem]">
        <img
          alt="Department Item"
          className="h-[8rem] w-full border-b-2 border-[#F4F4F4] object-cover"
          src={data.img}
        />
        <p className="font-lightbold text-center py-4 text-base">{data.title}</p>
      </div>
    );
  }

export default ProsPage
