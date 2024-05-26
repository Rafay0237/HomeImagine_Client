import { useState } from "react"
import { useSelector } from "react-redux"
import {submitData} from "../APICALLS"
import toast from "react-hot-toast"

const EditShippingAddress = ({setShowEdit,setCheckoutPhase}) => {

  const {currentUser}=useSelector(state=>state.user)
  const {email,userName,_id}=currentUser.user
  const [loading,setLoading]=useState(false)
  const [formData, setformData] = useState({
    email,fullName:userName
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSumbit=async()=>{
    setLoading(true)
    let data={...formData,userId:_id}
    submitData("products/shipping-address","POST",data).then((data)=>{
    if(!data.success){
    toast.error(data.message)
    setLoading(false)
    }else{
      toast.success(data.message)
      setShowEdit(false)
      setLoading(false)
      setCheckoutPhase(2)
    }
    })
  }

  return (
    <div className="flex flex-col py-5 gap-1">
        <p className="font-lightbold  ">Edit Address</p>

        <div className="flex gap-2">
        <input
        className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-1/2 my-2"
        placeholder="full name"
        value={formData.fullName}
        type="text"
        id="fullName"
        onChange={handleChange}
        />
        <input
        className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-1/2 my-2"
        placeholder="city"
        type="text"
        id="city"
        onChange={handleChange}
        />
        </div>

        <div className="flex gap-2">
        <input
        className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-1/2 my-2"
        placeholder="email"
        value={formData.email}
        type="text"
        id="email"
        onChange={handleChange}
        />
        <input
        className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-1/2 my-2"
        placeholder="Phone Number"
        type="text"
        id="phoneNu"
        onChange={handleChange}
        />
        </div>
        
        <div className="flex gap-2">
        <input
        className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-[70%] my-2"
        placeholder="Address"
        type="text"
        id="address"
        onChange={handleChange}
        />
        <input
        className="border-[#CCCCCC] border rounded-sm p-1.5 px-3 w-[30%] my-2"
        placeholder="House Number"
        type="text"
        id="houseNu"
        onChange={handleChange}
        />
        </div>
        <div className="flex justify-end gap-3 mt-2">
        <button onClick={()=>setShowEdit(false)}
        className="border-green border p-3 px-5 text-green font-lightbold rounded-md hover:bg-[#fafafa]">
          Cancel
        </button>
        <button onClick={handleFormSumbit}
        disabled={loading}
        className="bg-green p-3 px-5 text-white font-lightbold rounded-md hover:bg-dark-green">
          {loading? "Loading..." :"Save and Continue"}
        </button>
        </div>
        </div>
  )
}

export default EditShippingAddress
