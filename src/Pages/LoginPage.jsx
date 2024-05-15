import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Start,
  Failure,
  loginSuccess,
} from '../redux/user/userSlice';
import { submitData } from "../APICALLS";
import OAuth from "../Components/OAuth";

const Login = () => {
  const [formData, setformData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmitData = async (e) => {
    if(formData.password.length<6 || formData.email.length<10){
      dispatch(Failure({message:"invalid credentials"}))
      return
    }
   
    e.preventDefault();
    dispatch(Start());
      submitData("users/login","POST",formData).then(data=>{
        console.log(data)
        if (data.success === false) {
          dispatch(Failure(data));
          return;
        }
        dispatch(loginSuccess(data));
        navigate("/");
      })
    
  };
  
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl font-semibold text-center my-7 mt-40 sm:mt-20">
        Login</h1>
      <form onSubmit={handleSubmitData} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          id="email"
          className="p-3 bg-grey rounded-lg md:w-full w-[85%] mx-auto "
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          id="password"
          className="p-3 bg-grey rounded-lg md:w-full w-[85%] mx-auto"
        />
        <button
          className="bg-green text-white 
        p-3 rounded-lg hover:opacity-80 mt-2 mx-auto w-3/6
        "
        >
          {loading ? "Loading..." : "Login"} 
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-4 mt-7 ml-8 md:ml-0">
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500 font-semibold">SignUp</span>
        </Link>
      </div>
      <p className="text-red-700 mt-3">{error? error.message || "Something went wrong!":''}</p>
    </div>
  );
};

export default Login;
