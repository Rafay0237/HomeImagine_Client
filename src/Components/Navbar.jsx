import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { useSelector } from "react-redux";
import SubNavbar from "./SubNavbar";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
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
          <FaHeart className="text-2xl" />
        </Link>
        <Link to="/cart" >
          <FaShoppingCart className="text-2xl" />
        </Link>
        {currentUser ? (
            <Dropdown img={currentUser.user?.profilePicture}/>
        ) : (
          <Link to="/login" className="btn-dark py-2">
            Login
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
