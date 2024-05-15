import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword ,signOut} from "../redux/user/userSlice";


const ChangePassword = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const changePassword = async () => {
    if (
      formData.confirmPassword == null ||
      formData.password == null ||
      formData.newPassword == null
    ) {
      setSuccessMessage({
        message: "Password feilds can not be left Empty! ",
      });
      return;
    }
    if (formData.confirmPassword !== formData.newPassword) {
      setSuccessMessage({
        message: "New Password do not match,Confirm your New Password. ",
      });
      return;
    }
    if (formData.confirmPassword.length < 8) {
      setSuccessMessage({
        message: "New Password Length can't be less than 8",
      });
      return;
    }
    setLoading(true);
    const sendObj = {
      password: formData.password,
      newPassword: formData.newPassword,
      email: currentUser.user.email,
    };
    const res = await fetch('http://localhost:5000/'+"users/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${currentUser.token}`,
      },
      body: JSON.stringify(sendObj),
    });
    const data = await res.json();
    if(data.expired===true)
        {
        dispatch(signOut)
        }
    if (data.success) {
      dispatch(updatePassword(sendObj.newPassword));
      setLoading(false);
      setSuccessMessage({ message: data.message, success: true });
      navigate('/profile')
    } else {
      setLoading(false);
      setSuccessMessage({ message: data.message, success: false });
    }
  };
  
  return (
    <div className="p-3 mx-auto mt-10 max-w-sm sm:max-w-lg mb-28">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold my-5 text-center text-3xl">
          Change Password
        </h1>

        <p className="my-2 font-semibold  text-dark-grey">Your password should have at least 8 characters
          with at least one symbol and one number. </p>

        <input
          className="p-3 bg-grey rounded-lg "
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Password"
        />

        <input
          className="p-3 bg-grey rounded-lg "
          onChange={handleChange}
          type="password"
          id="newPassword"
          placeholder="New Password"
        />

        <input
          className="p-3 bg-grey rounded-lg font-lightbold"
          onChange={handleChange}
          type="password"
          id="confirmPassword"
          placeholder="Confirm New Password"
        />
        
          <p className={successMessage.success? "text-green h-5 -mt-3":
          " text-red-700 h-5 -mt-3"}>
          {successMessage.message?successMessage.message :''}</p>

        <button
          className="bg-green text-white 
        p-3 rounded-lg hover:opacity-80 mt-2 mx-auto w-3/6 "
          disabled={loading}
          onClick={changePassword}
        >
          {loading ? "Loading..." : "Update Password"}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
