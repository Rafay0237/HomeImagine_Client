import React from "react";
import { SiHomeadvisor } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" left-0 bottom-0 bg-[#F0F0F0] w-full p-10  ">
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 px-[5%] ">
        <div className="flex gap-[10%] w-full justify-between md:justify-normal ">
          <div>
            <div className="flex gap-3">
              <SiHomeadvisor className="h-12 w-12 text-[#4DBC15]" />
              <p className="text-[25px] font-semibold">Home Imagine</p>
            </div>
            <p className="p-5">© 2024 Houzz Inc.</p>
          </div>

          <div>
            <p className="font-lightbold pb-6">COMPANY</p>
            <p className="hover:text-green cursor-pointer">About Home Imagine</p>
            <p className="py-6 hover:text-green cursor-pointer">Terms</p>
            <p className="hover:text-green cursor-pointer">Careers</p>
          </div>
        </div>

        <div className="flex gap-[10%] w-full justify-between md:justify-normal">
          <div>
            <p className="font-lightbold pb-6">GET HELP</p>
            <p className="hover:text-green cursor-pointer">Your Orders</p>
            <p className="py-6 hover:text-green cursor-pointer">
              Shipping and delivery
            </p>
            <p className="hover:text-green cursor-pointer">Return Policy</p>
          </div>

          <div>
            <p className="font-lightbold pb-6">CONNECT WITH US</p>
            <div className="flex gap-4">
              <BsInstagram className="h-5 w-5" />
              <p className="hover:text-green cursor-pointer">Instagram</p>
            </div>
            <div className="flex gap-4 py-6">
              <BsFacebook className="h-5 w-5 " />
              <p className="hover:text-green cursor-pointer">Facebook</p>
            </div>
            <div className="flex gap-4">
              <BsYoutube className="h-5 w-5" />
              <p className="hover:text-green cursor-pointer">Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
