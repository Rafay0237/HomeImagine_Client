import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { useSelector } from "react-redux";
import SubNavbar from "./SubNavbar";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const {cartItems}=useSelector((state)=>state.cart)
  const {items}=useSelector((state)=>state.ideabook)
  return (
    <div>
      <div className="navbar">
        <Link to="/">
        <SiHomeadvisor className="h-12 w-12 text-[#4DBC15]" />
        </Link>

        <div className="hidden md:block">
          <SubNavbar />
        </div>

        <SearchBar />

        <Link to="/ideabooks" >
        <div className="flex relative">
          <FaHeart className="text-2xl" />
          {items.length!==0&& <p className="absolute bg-green text-white rounded-full text-[10px] -top-3 -right-2 px-[5px] pt-[1px]">
            {items.length}</p>}
          </div>
        </Link>
        <Link to="/cart" >
          <div className="flex relative">
          <FaShoppingCart className="text-2xl" />
         {cartItems.length!==0&&  <p className="absolute bg-green text-white rounded-full text-[10px] -top-3 -right-2 px-[5px] pt-[1px]">
            {cartItems.length}</p>}
          </div>
        </Link>
        {currentUser ? (
            <Dropdown img={currentUser.user?.profilePicture}/>
        ) : (
          <Link to={location.pathname === "/login"?"sign-up":"/login"} className="btn-dark py-2">
           { location.pathname === "/login" ?"Sign-up" :"Login"}
          </Link>
        )}
      </div>
      <div className="block md:hidden">
        <SubNavbar />
      </div>
    </div>
  );
};

export default Navbar;
