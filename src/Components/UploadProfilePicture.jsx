import { useRef, useState, useEffect } from "react";
import { updateProfilePicture } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { IoIosAddCircle } from "react-icons/io";

const UploadProfilePicture = ({ user }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(undefined);
  const [imageError, setImageError] = useState({});
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  const uploadImage = async (image) => {
    if (image.size > 3097152) {
      setImageError({ success: false, message: "Image Size limit is 3MB!" });
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("id", user._id);

    const res = await fetch(import.meta.env.VITE_APP_API_URL + "upload-img/dp", {
      method: "POST",
      body: formData,
    })
      await res.json().then((data) => {
      if (data.success) {
        dispatch(updateProfilePicture(data.url));
        setLoading(false);
        setImageError({
          success: true,
          message: "Image Uploaded Successfully!",
        });
      } else {
        setLoading(false);
        setImageError({ success: false, message: data.error });
      }
    });
  };

  useEffect(() => {
    if (image) {
      uploadImage(image);
    }
  }, [image]);

  return (
    <>
      <input
        type="file"
        ref={fileRef}
        hidden
        onChange={(e) => setImage(e.target.files[0])}
      ></input>
      <div className="block">
      <div className="relative ">
        <img
          className="h-20 w-20 object-cover rounded-full md:h-32 md:w-32 self-center cursor-pointer "
          src={user.profilePicture}
          alt="Profile " onClick={()=>fileRef.current.click()}
        />
        <IoIosAddCircle onClick={()=>fileRef.current.click()}
        className="absolute md:right-3 md:bottom-3 right-1 lg:right-0 bottom-1 rounded-full h-5 w-5 sm:h-7 sm:w-7 cursor-pointer
          text-green  text-2xl bg-white"/>
        </div>
        <div className="text-center mt-2  w-20 md:w-32 ">
          {loading ? (
            <p className="text-dark-grey font font-semibold">loading...</p>
          ) : imageError.success ? (
            <p className="text-green text-sm sm:text-base">{imageError.message}</p>
          ) : (
            <p className="text-red-700 text-sm sm:text-base">{imageError.message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadProfilePicture;
