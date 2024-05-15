import { Link } from "react-router-dom";

const DepartmentCardRow = ({ data, sales, homePage, endPoint }) => {
  return (
    <div className="overflow-x-auto h-52 scrollbar-hide md:scrollbar-show">
      <div className=" flex gap-4  ">
        {sales
          ? data?.map((data) => <SalesCard key={data.title} data={data} />)
          : data?.map((data) => (
              <Link
                to={homePage ? endPoint + data.title : data.title}
                key={data.title}
              >
                <DepartmentCard data={data} />
              </Link>
            ))}
      </div>
    </div>
  );
};

function DepartmentCard({ data }) {
  return (
    <div className="rounded-md shadow-lg border border-[#F4F4F4] min-w-48  h-[10.6rem]">
      <img
        alt="Department Item"
        className="h-28 w-48 border-b-2 border-[#F4F4F4] object-contain"
        src={data.img}
      />
      <p className="font-lightbold text-center py-4 text-base">{data.title}</p>
    </div>
  );
}

function SalesCard({ data }) {
  return (
    <div className=" min-w-[18rem]  h-[10.6rem]">
      <img
        alt="Sales Item"
        className="h-36 w-[18rem]  object-contain "
        src="https://st.hzcdn.com/fimgs/73218cc305d6734f_3042-w238-h120-b0-p0--.jpg"
      />
      <p className="font-lightbold  pt-2 text-sm text-green">Up to 40% Off</p>
      <p className="font-lightbold  text-base">{data.title}</p>
    </div>
  );
}

export default DepartmentCardRow;
