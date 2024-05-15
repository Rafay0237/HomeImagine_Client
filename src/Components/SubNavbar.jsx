import { FaUserTie } from "react-icons/fa6";
import { MdChair } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import {Link} from "react-router-dom"

const SubNavbar = () => {
  return (
    <div className="flex border-b-2 border-grey md:border-none ">
        <div className="flex mx-auto gap-28 md:gap-12  font-lightbold py-5 ">
        <Link to="/shop">
        <div className="md:flex block gap-2">
         <MdChair className="text-2xl mx-auto md:max-0 md:hidden lg:block xl:block"/>
         <p> Shop </p>
        </div>
        </Link>
        <Link to="/pros">
        <div className="md:flex block gap-2 ">
         <FaUserTie className="text-2xl mx-auto md:max-0 md:hidden lg:block xl:block"/>
         <p> Find Pros</p>
        </div>
        </Link>
        <Link to="/sales">
        <div className="md:flex block gap-2">
         <FaGift className="text-2xl mx-auto md:max-0 md:hidden lg:block xl:block"/>
         <p className="">Sales</p>
        </div>
        </Link>

      </div>
      </div>
  )
}

export default SubNavbar
