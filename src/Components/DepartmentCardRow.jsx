import { Link } from "react-router-dom";

const DepartmentCardRow = ({ data,  homePage, endPoint }) => {
  return (
    <div className="overflow-x-auto h-52 scrollbar-hide md:scrollbar-show">
      <div className=" flex gap-4 ">
        {data?.map((data) => (
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
    <div className="rounded-md shadow-lg border border-[#F4F4F4] min-w-48  h-[12rem]">
      <img
        alt="Department Item"
        className="h-[8rem] w-full border-b-2 border-[#F4F4F4] object-cover"
        src={data.img}
      />
      <p className="font-lightbold text-center py-4 text-base">{data.title}</p>
    </div>
  );
}


export default DepartmentCardRow;
