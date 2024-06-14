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
    <div className="flex flex-col items-center min-h-[70vh] my-10">
      <div className="flex justify-between w-full md:w-[80%] py-5">
        <p className="text-xl font-lightbold">
          Ordered Items: {order?.productsQty}</p>
        <p className="text-xl font-lightbold">
          Total Amount: Rs. {order?.totalAmount}</p>
        </div>
      <div className=" bg-grey  w-full md:w-[80%] ">
        {order?.cartItems.map((item) => (
          <div key={item._id}
            className="flex flex-col sm:flex-row h-60 sm:h-48 gap-[5%] p-5  justify-between
              border-[#E6E6E6] border-b"
          >
            <div className="flex justify-between items-center w-full sm:w-[55%]">
              <img
                src={item.img}
                className="h-32 w-36 object-scale-down"
                alt="item here"
              />
              <p className="w-[50%] font-lightbold ">
                {item.title.slice(0, 50)}
                {item.title.length > 49 && "..."}
              </p>
            </div>

            <div className="flex items-center justify-between w-full sm:w-[35%]">
              <div className="">
              <p className="font-lightbold text-xl ">Price:</p>
              <p className="font-lightbold text-[18px] ">Rs. {item.price}</p>
              </div>
              <div className=" font-lightbold ">
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
