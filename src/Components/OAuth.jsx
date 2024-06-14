import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { submitData } from "../APICALLS";
import { loginSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const OAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        const data = await res.json();
        if (data.email_verified) {
          submitData("users/google-login", "POST", {
            email: data.email,
            userName: data.name,
            photo: data.picture,
          }).then((userData) => {
            if (!userData.success) {
              toast.error(userData.message);
              return
            }
            toast.success(userData.message);
            dispatch(loginSuccess({user:userData.user,token:userData.token}));
            navigate("/");
          });
        } else {
          toast.error("Cannot Login with Google, Try our login for now");
        }
      } catch (err) {
        toast.error(err);
      }
    },
  });

  return (
    <button
      onClick={() => login()}
      type="button"
      className="text-black py-3 px-6 pl-12 hover:opacity-80 font-lightbold rounded-lg mx-auto border border-b-1 border-[#D6D6D6] relative"
    >
      <FaGoogle className="absolute left-4 top-1/2 transform -translate-y-1/2 -ml-1 md:ml-0" />
      | Continue with Google
    </button>
  );
};

export default OAuth;
