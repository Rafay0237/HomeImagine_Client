import {  useSelector } from "react-redux";
import { submitData } from "../APICALLS";
import { useState } from "react";
import toast from "react-hot-toast";

const SendProposal = (userId) => {
  const {currentUser}=useSelector(state=>state.user)
  const {email,userName}=currentUser.user
  const [formData, setformData] = useState({
    email,userName
  });
 
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handeSubmit=async()=>{
    let data={...formData,senderId:currentUser.user._id,userId:userId.userId}
    if(data.email.length<6||data.userName.length<4)
    data={...data,email,userName}
    if(!data.message)
    {
      return toast.error('message cannot be empty');
    }
    const response = await submitData("proposal/send", "POST", data);
    toast.success(response.message)
  }

  return (
    <div className="w-[90%] md:w-[27%] block md:fixed p-4 border border-light-grey 
    rounded-md mx-auto md:mx-0 bg-white ">
      <p className="font-[590] text-lg w-full my-3 ">
        Contact The Baldwin Architectural Group
      </p>

      <input
        type="text"
        id="email"
        className={`p-1.5  border border-light-grey  rounded-sm w-full my-1 
        ${email?"placeholder:text-black": +" placeholder:text-dark-grey"}`}
        placeholder={email? email:"email"}
        onChange={handleChange}
      />

      <input
      id="userName"
        type="text"
        className={`p-1.5  border border-light-grey  rounded-sm w-full my-1 
        ${userName?"placeholder:text-black": +" placeholder:text-dark-grey"}`}
        placeholder={userName?userName:"Your Name"}
        onChange={handleChange}
      />

      <input
      id="contactNumber"
        type="text"
        className="p-1.5 placeholder:text-dark-grey border border-light-grey rounded-sm w-full my-1"
        placeholder="Contact Number(optional)"
        onChange={handleChange}
      />

      <textarea
        className="border border-light-grey placeholder:text-dark-grey rounded-sm p-1.5 w-full my-1"
        rows="4"
        cols="30"
        id="message"
        placeholder="Message"
        onChange={handleChange}
      ></textarea>

      <button className="bg-green text-white font-bold p-3 my-2 w-full rounded-[4px]"
      onClick={handeSubmit}>
        Send Message
      </button>
    </div>
  );
};

export default SendProposal;