import { FaGoogle } from "react-icons/fa";

const OAuth = () => {
  return (
    <button
      type="button"
      className="text-black py-3 w-3/6 hover:opacity-80 font-lightbold rounded-lg mx-auto border border-b-1 border-[#D6D6D6] pl-3 relative"
    >
      <FaGoogle className="absolute left-4 top-1/2 transform -translate-y-1/2 -ml-1 md:ml-0" />
      | Continue with Google
    </button>
  );
};

export default OAuth;
