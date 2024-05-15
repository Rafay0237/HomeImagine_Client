import { useRef, useState, useEffect } from "react";
import { updateProfilePicture } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { submitData } from "../APICALLS";

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
    submitData("upload-img/dp", "POST", formData).then((data) => {
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
            alt="Profile "
            onClick={() => fileRef.current.click()}
          />
          <p
            onClick={() => fileRef.current.click()}
            className="absolute md:right-3 md:bottom-3 right-1 bottom-1 rounded-full h-6 w-6 cursor-pointer
         bg-green text-white  text-2xl flex justify-center items-center"
          >
            +
          </p>
        </div>
        <div className="text-center mt-2">
          {loading ? (
            <p className="text-dark-grey font font-semibold">loading...</p>
          ) : (
            ""
          )}
          {imageError.success ? (
            <p className="text-green ">{imageError.message}</p>
          ) : (
            <p className="text-red-700 ">{imageError.message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadProfilePicture;
