import React from "react";
import { useSelector } from "react-redux";
import ProfileSideBar from "../Components/ProfileSideBar";
import { Link } from "react-router-dom";
import UploadProfilePicture from "../Components/UploadProfilePicture";
import { signOut } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { deleteData } from "../APICALLS";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDeleteAccount = async () => {
    deleteData("users/delete-account/"+currentUser.user._id,currentUser.token).then((data) => {
      if (!data.success) {
        toast.error(data.message);
        return;
      }
      toast.success("Account Deleted");
      dispatch(signOut());
    });
  };
  return (
    <div className="">
      <div className=" mt-5 md:mt-16 max-w-lg md:max-w-[80%] mx-auto bg-white px-10 md:px-0">
        <div className="flex gap-10">
          <UploadProfilePicture user={currentUser.user} />
          <p className="text-2xl font-bold md:pt-10 pt-5">
            {currentUser.user.userName}
          </p>
        </div>

        <div className="flex gap-10 mt-10 ">
          <p
            className="text-dark-grey font-lightbold border-b-2 border-white 
     hover:border-b-2 hover:border-black hover:cursor-pointer"
          >
            Ideabooks
          </p>
          <Link to="/chat">
            <p className="text-dark-grey font-lightbold hover:border-b-2 border-black hover:cursor-pointer">
              Messages
            </p>
          </Link>
          <p className="text-dark-grey font-lightbold hover:border-b-2 border-black hover:cursor-pointer">
            Orders
          </p>
        </div>

        <div className="flex mt-12 mb-32 gap-8 md:gap-0">
          <ProfileSideBar />

          <div className="flex flex-col w-full md:w-[65%] px-3 gap-2 ">
            <h1 className="text-bold text-3xl mb-8">Account Information</h1>

            <p className="font-lightbold ">Email :</p>
            <p className=" mb-3 px-4 p-4 ">{currentUser.user.email}</p>

            <p className="font-lightbold ">Username :</p>
            <p className="mb-3 px-4 p-4 ">{currentUser.user.userName}</p>
            <Link to="/change-username">
              <div className=" bg-grey p-3 rounded-lg w-[80%] mt-6 mx-auto">
                <h1 className="font-semibold text-dark-grey text-center hover:cursor-pointer">
                  Change User Name
                </h1>
              </div>
            </Link>
            <Link to="/change-password">
              <div className=" bg-grey p-3 rounded-lg w-[80%] mt-6 mx-auto">
                <h1 className="font-semibold text-dark-grey text-center hover:cursor-pointer">
                  Change Password
                </h1>
              </div>
            </Link>
            <div className="flex justify-between p-5 mt-5">
              <p
                className="text-red-700 hover:cursor-pointer font-lightbold"
                onClick={() => dispatch(signOut())}
              >
                Sign out
              </p>
              <p
                className="text-red-700 hover:cursor-pointer font-lightbold"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
