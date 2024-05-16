import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

const RenderSendImage = ({ renderImage, image, setMessages, currentChat, setShowImage,socket }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const handleSendImage = async () => {
    if (image.size > 3097152) {
      toast.error("Image Size limit is 3MB!");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("id", currentUser.user._id);
    formData.append("conversationId", currentChat._id);
    const res = await fetch("http://localhost:5000/" + "upload-img/chat", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      setLoading(false);
      let message = {
        sender: currentUser.user._id,
        conversationId:currentChat._id,
        img: data.img,
      };
      setMessages((prevMessages) => [...prevMessages, message]);

      const receiverId=currentChat.members.find((user)=>user!==currentUser.user._id,)
        socket.current.emit("sendImage",{
          senderId:currentUser.user._id,
          receiverId,
          img: data.img
        })

      setShowImage(false);
    } else {
      setLoading(false);
      toast.error(data.error);
    }
  };

  return (
    <div className="bg-grey absolute h-[70%] sm:w-[65%] top-[22%]">
      {!loading ? (
        <>
          <img className="h-[90%] w-[90%] pt-[5%] pl-[5%]" src={renderImage} />

          <div className=" absolute bottom-2 right-5 rounded-full bg-[#4DBC15] h-12 w-12 pl-1 ">
            <IoSend
              disabled={loading}
              onClick={() => handleSendImage(image)}
              className="p-2 rounded-lg h-10 w-10 hover:cursor-pointer text-white  mt-1"
            />
          </div>

          <div className=" absolute -top-2 -left-2  pl-1 ">
            <MdCancel
              onClick={() => {
                setShowImage(false);
              }}
              className="p-2 rounded-lg h-16 w-16 hover:cursor-pointer text-black mt-1"
            />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div
            className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderSendImage;
