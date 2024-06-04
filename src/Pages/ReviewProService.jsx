import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { getData } from "../APICALLS";
import toast from "react-hot-toast";
import { IoIosStar } from "react-icons/io";
import { submitData } from "../APICALLS";
import { useSelector } from "react-redux";
import { FaLock } from "react-icons/fa";


const ReviewProService = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState(null);
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData("contract/payment/" + id).then((data) => {
      if (!data.success) {
        toast.error(data.message);
      } else {
        setPayment(data.payment);
      }
      setLoading(false);
    });
  }, []);

  const ratingStars = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span className="text-[#e5e4e4] " key={index}>
        {
          <IoIosStar
            className={
              "h-12 w-12 hover:text-[#f2c357] " +
              (rating !== null && rating >= index + 1
                ? "text-yellow"
                : "text-[#e5e4e4]")
            }
            onClick={() => setRating(index + 1)}
          />
        }
      </span>
    );
  });

  const handleSubmitReview = async () => {
    if(rating===null){
     toast.error("Rating is required!")
     return
    }
    setLoading(true)
    submitData("contract/review", "POST", {
      paymentId:id,
      userId:currentUser.user._id,
      rating,
      message,
    }).then((data) => {
     if(!data.updated){
      toast(
        <div className="flex items-center gap-3">
          <FaLock className="h-5 w-5 text-red-700" />
          <span >{data.message}</span>
        </div>
      );
     }else{
     toast.success(data.message)
     navigate("/")
     }
     setLoading(false)
    });
  };


if (loading)
    return (
      <div className="flex h-[80vh] justify-center items-center text-3xl text-dark-grey font-semibold">
        Loading...
      </div>
    );

  return (
    <div className="flex justify-center min-h-[80vh] my-5">

      <div className="flex flex-col gap-5  w-full md:w-[40%]  p-10 border-grey border-2 ">
        
        <div className="flex items-center gap-4">
            <img className="h-10 w-10 object-cover rounded-full"
            src={payment?.proDp}
            alt="pro Dp here"/>
          <p className="text-xl sm:text-[22px] font-lightbold">
            {payment?.proName}
          </p>
          </div>

          <div className="flex items-center gap-2">
          <p className="text-base font-lightbold">Amount:</p>
          <p className="text-xl font-semibold">${payment?.totalAmount}</p>
          </div>

          <p className="font-lightbold">
            Tell us what you think about the service provided.
          </p>

          <div className="flex justify-center">{ratingStars}</div>

          <textarea
            placeholder="Keep it short and sweet, or tell use the details!"
            className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2 placeholder:text-dark-grey placeholder:font-lightbold "
            rows="5"
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>

          <button
            className=" bg-green text-white  hover:bg-dark-green
             rounded-md font-lightbold p-4"
            onClick={handleSubmitReview}
          >
            Submit Review
          </button>
        </div>
    </div>
  )
}

export default ReviewProService
