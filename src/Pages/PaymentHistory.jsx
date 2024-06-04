import { useState,useEffect } from "react";
import { getData } from "../APICALLS";
import { Link ,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const PaymentHistory = () => {
   const [payments,setPayments]=useState(null)
   const [loading, setLoading] = useState(null);
   const { currentUser } = useSelector((state) => state.user);
   const navigate=useNavigate()

   useEffect(() => {
    setLoading(true);
    getData("contract/payment-history-client/" + currentUser.user._id).then((data) => {
      console.log(data)
      if (data.success) {
        setPayments(data.payments);
      }
    });
    setLoading(false);
  }, []);


  if (loading)
    return (
      <div className="flex h-60 justify-center items-center text-2xl font-lightbold">
        Loading...
      </div>
    );

  return (
    <div className="w-full flex justify-center bg-white min-h-[90vh]">
    <div className="w-[90%] sm:w-[80%]">

      <div className="flex flex-col sm:flex-row justify-between mb-8 py-10">
      <p className="text-3xl font-lightbold ">
            Payment History
          </p>
      </div>

      <div className="flex flex-col gap-16">
          {payments && payments.length!==0 ?payments.map((payment) => (
                <PaymentCard payment={payment}  key={payment._id}/>
              )):
              <div className="flex flex-col bg-grey gap-8 p-[10%] rounded-lg items-center">
              <p className="text-3xl font-lightbold">
                There are no Payments Made Yet
              </p>
              <p className="text-xl font-lightbold">
                Payment history will appear here.
              </p>
              <button
                className="bg-green hover:bg-dark-green w-60 font-lightbold p-2 rounded-3xl px-5 text-white "
                onClick={() => navigate("/contract")}
                >
                Back
              </button>
            </div>
              }
          </div>
      </div>
    </div>
  )
}


const PaymentCard = ({ payment }) => {

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
  
    return (
      <div className="flex justify-between flex-wrap sm:flex-nowrap items-center">
  
        <div className="flex gap-3 items-center ">
          <img className="h-10 w-10 rounded-full object-cover"
          alt="Dp here"
          src={payment.proDp}/>
          <p className="text-dark-grey font-lightbold">{payment.proName}</p>
        </div>
  
        <div className="flex flex-col items-center ">
          <p className="text-dark-grey font-lightbold">Paid At</p>
          <p className=" font-lightbold">{formatDate(payment.createdAt)}</p>
        </div>
  
        <div className="flex flex-col items-center">
          <p className="text-dark-grey font-lightbold">Amount</p>
          <p className="rounded-[15px] px-3 p-[1px] bg-purple text-white font-lightbold">
          ${payment.totalAmount}
          </p>
        </div>
        {payment.ratingGiven ?
        <p className="text-dark-grey w-28 text-xl font-lightbold">Paid</p>
        :
        <Link to={"/pro-review/"+payment._id}>
        <button className="h-10 w-28 bg-green hover:bg-dark-green rounded-md text-white">
          Rate Pro
        </button>
        </Link>}
      </div>
    );
  };

export default PaymentHistory
