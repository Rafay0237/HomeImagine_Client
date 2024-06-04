import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData,submitData,deleteData } from "../APICALLS";
import {toast} from "react-hot-toast"
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewContractPage = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const {currentUser} =useSelector((state)=>state.user)
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData("contract/" + id).then((data) => {
      if(data.success) {
        setContract(data.contract);
      }
    });
    setLoading(false);
  }, []);

  const handleAcceptContract=async()=>{
    setLoading(true)
    submitData("contract/"+contract._id,"PUT").then((data)=>{
    if(data.success) {
      toast.success(data.message)
      navigate("/contract")
    }else{
      toast.success(data.message)
    }
  })
   setLoading(false)
  }

  const handleDeleteContract=async()=>{
    setLoading(true)
    deleteData("contract/"+contract._id,currentUser.token).then((data)=>{
    if(data.deleted){
      toast.success(data.message)
      navigate("/contract")
    }else{
      toast.success(data.message)
    }
  })
   setLoading(false)
  }

  const handlePayment = async () => {
    setLoading(true)
    let userId=currentUser.user._id
    const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
    try {
      const response = await fetch(
        import.meta.env.VITE_APP_API_URL + "users/pro-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
          body: JSON.stringify({proId:currentUser.user._id,totalAmount:contract.payment.total,
            contractId:contract._id,userId}),
        }
      );
      const res = await response.json();
      setLoading(false)
      if (res.success) {
        stripe.redirectToCheckout({ sessionId: res.id });
      }
    } catch (err) {
      setLoading(false)
      toast.error(err.message)
    }
  };


  if (loading)
    return (
      <div className="flex h-[80vh] justify-center items-center text-2xl font-lightbold">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col items-center bg-[#fefefe] min-h-[70vh]">
      <div className="w-[80%] md:w-[50%] text-3xl font-lightbold pt-10 pb-3">
        Contract Terms
      </div>

     <ContractComponent contract={contract} />

     {!contract?.accepted ? 
     <div className="flex gap-10 w-[80%] md:w-[50%] mb-16">
      <button className=" p-2 bg-green hover:bg-dark-green w-48 rounded-md text-white"
      onClick={handleAcceptContract}
      disabled={loading}>
       Accept Contract
      </button>
      <button className=" p-2 bg-red-700 hover:bg-[#b33e3e] w-48 rounded-md text-white"
      onClick={handleDeleteContract}
      disabled={loading}>
       Delete Contract
      </button>
      </div>
      :
      <div className="flex gap-10 w-[80%] md:w-[50%] mb-16">
      <button className=" p-2 bg-green hover:bg-dark-green w-48 rounded-md text-white"
      onClick={handlePayment}
      disabled={loading}>
       Pay Now
      </button>
      <button className=" p-2 bg-red-700 hover:bg-[#b33e3e] w-48 rounded-md text-white"
      onClick={handleDeleteContract}
      disabled={loading}>
       Terminate Contract
      </button>
      </div>}
    </div>
  );
};

const ContractComponent=({contract})=>{

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
  <div className="w-[80%] md:w-[50%] bg-white p-5 border border-[#CCCCCC] mb-10">
        <div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Starting Date</label>
            <p className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2">
              {formatDate(contract?.intro.date)}
            </p>
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">
              Introduction Description
            </label>
            <p className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2">
              {contract?.intro.description}
            </p>
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Deliverables</label>
            <p className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2">
              {contract?.deliverables}
            </p>
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Payment Total</label>
            <p className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2">
              {contract?.payment.total}
            </p>
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Payment Schedule</label>
            <p className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2">
              {contract?.payment.paymentSchedule}
            </p>
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Deadline</label>
            <p className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2">
              {formatDate(contract?.deadline)}
            </p>
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">
              Termination Conditions
            </label>
            <p className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2">
              {contract?.termination.conditions}
            </p>
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">
              Payment on Termination
            </label>
            <p className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2">
              {contract?.termination.paymentOnTermination}
            </p>
          </div>
        </div>
      </div>
    )
}

export default ViewContractPage;
