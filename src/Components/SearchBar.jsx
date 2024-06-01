import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchVisibility, setSearchVisibility] = useState(false);
    const [search,setSearch]=useState("")
    const navigate=useNavigate()

    const handleSearch=()=>{
      if(search==="")
      return
      navigate("/shop/search/"+search)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        handleSearch()
      }
    };

  return (
    <>
      <div className={`absolute bg-white left-0 w-full top-full 
      mt-0.5 border-b border-grey py-4 px-[5vw] 
      md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show "
    +${searchVisibility ? " show " : " hide "}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full  lg:w-[120%] bg-grey p-4  pl-6 pr-[12%] md:pr-6 rounded-full h-full 
          placeholder:text-gray-800 md:pl-12"
          onKeyDown={handleKeyDown}
          onChange={(e)=>setSearch(e.target.value)} 
        ></input>
        
        <IoSearchOutline
          className="absolute right-[10%] md:left-5 top-1/2 -translate-y-1/2 text-xl  hover:cursor-pointer"
          onClick={handleSearch}
          />
      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto ">
        <button
          className="md:hidden bg-grey w-12 h-12 rounded-full
        flex items-center justify-center"
          onClick={() => setSearchVisibility(!searchVisibility)}
        >
          <IoSearchOutline className="text-xl hover:cursor-pointer"/>
        </button>
      </div>
    </>
  )
}

export default SearchBar
