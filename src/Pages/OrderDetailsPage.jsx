import { useEffect, useState } from "react"
import {getData} from "../APICALLS"
import {useSelector} from "react-redux"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

const OrderDetailsPage = () => {
  const {currentUser}=useSelector(state=>state.user)
  const [loading,setLoading]=useState(false)
  const [orders,setOrders]=useState(null)
  
  useEffect(()=>{
  setLoading(true)
  getData("users/orders/"+currentUser.user._id).then((data)=>{
  if(!data.found){
    toast.error(data.message)
    setLoading(false)
    return
  }
  setOrders(data.orders)
  setLoading(false)
  })
  },[])

  if(loading)return(
    <div className="flex h-[80vh] justify-center items-center text-3xl text-dark-grey font-semibold" >
    Loading...
    </div>
  )
  return (
    <div className="flex justify-center">

      <div className="flex flex-col w-full sm:w-[90%] lg:w-[80%] pt-16 min-h-[70vh] mb-10 ">
        <div  className="flex flex-col gap-3">
        {orders? orders.map((order)=>(
          <div className="flex flex-wrap xs:flex-nowrap justify-evenly items-center px-5 sm:px-[10%] gap-5 sm:gap-[20%] font-lightbold bg-grey py-8"
          key={order._id}>
            <div className="flex  gap-[20%] ">
           <p className="text-xl">Ordered on: {new Date(order.createdAt).toLocaleDateString()} </p>
           <p className="text-xl">Total Products: {order.productsQty}</p>
           </div>
           <div className="flex gap-5 sm:gap-[10%] items-center">
           <p className="text-xl w-[40%] xs:w-full ">Total Amount: Rs. {order.totalAmount}</p>
           <Link to={"/order/"+order._id}>
           <button className="bg-green hover:bg-dark-green p-3 ml-10 xs:ml-0 w-36 sm:w-48 rounded-sm text-white text-sm sm:text-base "
           >View Order Items</button>
           </Link>
           </div>
          </div>
          )):
          <div className="flex justify-center text-3xl mt-28 text-dark-grey">
          No Orders Yet 
          </div>}
        </div>
      
    </div>
      
    </div>
  )
}

export default OrderDetailsPage
