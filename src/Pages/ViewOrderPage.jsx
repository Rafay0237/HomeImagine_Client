import { useParams } from "react-router-dom";
import { getData } from "../APICALLS";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ViewOrderPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData("users/order-detail/" + id).then((data) => {
      if (!data.found) {
        toast.error(data.message);
      } else {
        setOrder(data.order);
      }
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="flex h-[80vh] justify-center items-center text-3xl text-dark-grey font-semibold">
        Loading...
      </div>
    );

  return (
    <div className="flex justify-center min-h-[70vh] ">
      <div className="bg-grey pt-5 w-full md:w-[80%] ">
        {order?.cartItems.map((item) => (
          <div
            className="flex flex-col sm:flex-row h-60 sm:h-48 gap-[5%] p-5  justify-between
              border-[#E6E6E6] border-b "
            key={item.id}
          >
            <div className="flex justify-between w-full sm:w-[55%]">
              <img
                src={item.img}
                className="h-32 w-36 object-scale-down"
                alt="item here"
              />
              <p className="w-[50%] font-lightbold mt-5">
                {item.title.slice(0, 50)}
                {item.title.length > 49 && "..."}
              </p>
            </div>

            <div className="flex justify-between w-full sm:w-[35%]">
              <p className="font-lightbold text-2xl mt-7">${item.price}</p>

              <div className=" font-lightbold mt-0 sm:mt-7">
                <Link to={"/order-review/" + item.id}>
                  <button className="bg-[#f47e2f] hover:bg-[#ea792e] p-3 w-32 rounded-sm text-white ">
                    Add a Review
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOrderPage;
