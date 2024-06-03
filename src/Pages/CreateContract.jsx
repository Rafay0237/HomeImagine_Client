import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { submitData } from "../APICALLS";
import { toast } from "react-hot-toast";
import {useSelector} from "react-redux"
import { useState } from "react";

const CreateContract = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {currentUser}=useSelector((state)=>state.user)
  const [loading,setLoading]=useState(null)
  const defaultValues = {
    proId: currentUser.user._id,
    clientId: id
    }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues});

  const submitContractData = (data) => {
    setLoading(true)
    submitData("contract/create", "POST", data).then((resData) => {
        if(resData.success){
         toast.success(resData.message);
         navigate("/");
        }else{
            toast.error(resData.message)
        }
    });
    setLoading(false)
  };

  return (
    <div className="flex flex-col items-center bg-grey min-h-[70vh]">
        <div className="w-[80%] md:w-[50%]  text-3xl font-lightbold pt-10 pb-3">
         Contract Terms
        </div>
      <div className="w-[80%] md:w-[50%] bg-white p-5 border border-[#CCCCCC] mb-10">
        <form >
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Starting Date</label>
            <input
              type="date"
              className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2"
              {...register("intro.date", {
                required: {
                  value: true,
                  message: "Date is required!",
                },
              })}
            />
            {errors.intro?.date && (
              <span className="text-red text-base">{errors.intro.date.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Introduction Description</label>
            <input
              type="text"
              placeholder="Write Description here"
              className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2"
              {...register("intro.description", {
                required: {
                  value: true,
                  message: "Description is required!",
                },
              })}
            />
            {errors.intro?.description && (
              <span className="text-red text-base">{errors.intro.description.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Deliverables</label>
            <input
              type="text"
              placeholder="List deliverables"
              className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2"
              {...register("deliverables", {
                required: {
                  value: true,
                  message: "Deliverables are required!",
                },
              })}
            />
            {errors.deliverables && (
              <span className="text-red text-base">{errors.deliverables.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Payment Total</label>
            <input
              type="number"
              placeholder="Enter total payment"
              className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2"
              {...register("payment.total", {
                required: {
                  value: true,
                  message: "Total payment is required!",
                },
              })}
            />
            {errors.payment?.total && (
              <span className="text-red text-base">{errors.payment.total.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Payment Schedule</label>
            <input
              type="text"
              placeholder="Enter payment schedule"
              className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2"
              {...register("payment.paymentSchedule", {
                required: {
                  value: true,
                  message: "Payment schedule is required!",
                },
              })}
            />
            {errors.payment?.paymentSchedule && (
              <span className="text-red text-base">{errors.payment.paymentSchedule.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Deadline</label>
            <input
              type="date"
              className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2"
              {...register("deadline", {
                required: {
                  value: true,
                  message: "Deadline is required!",
                },
              })}
            />
            {errors.deadline && (
              <span className="text-red text-base">{errors.deadline.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Termination Conditions</label>
            <input
              type="text"
              placeholder="Enter termination conditions"
              className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2"
              {...register("termination.conditions", {
                required: {
                  value: true,
                  message: "Termination conditions are required!",
                },
              })}
            />
            {errors.termination?.conditions && (
              <span className="text-red text-base">{errors.termination.conditions.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-base text-[#33334D]">Payment on Termination</label>
            <input
              type="text"
              placeholder="Enter payment on termination"
              className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-full my-2"
              {...register("termination.paymentOnTermination", {
                required: {
                  value: true,
                  message: "Payment on termination is required!",
                },
              })}
            />
            {errors.termination?.paymentOnTermination && (
              <span className="text-red text-base">{errors.termination.paymentOnTermination.message}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit(submitContractData)}
            className="bg-green hover:bg-dark-green text-white px-4 py-2 rounded-sm"
          >
            {loading? "Loading..." :"Create Contract"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContract;
