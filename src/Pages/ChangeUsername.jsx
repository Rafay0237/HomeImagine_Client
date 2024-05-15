import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
    updateUsername,
    signOut
  } from "../redux/user/userSlice";
  import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ChangeUsername = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [successMessage, setSuccessMessage] = useState({});
    const [newName,setnewName]=useState("")
    const {currentUser}=useSelector((state)=>state.user)

  const changeUserName = async () => {
        if (newName.length < 8 || newName === "") {
          setSuccessMessage({
            message: "Username should be atleast 8 characters!",
            success: false,
          });
          return;
        }
        const res = await fetch('http://localhost:5000/'+"users/change-username", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
          body: JSON.stringify({
            userName: newName,
            email: currentUser.user.email,
          }),
        });
        console.log(currentUser.token)
        const data = await res.json();
        if(data.expired===true)
        {
        dispatch(signOut)
        }
        if (data.success) {
          dispatch(updateUsername(newName));
          setSuccessMessage({ message: data.message, success: true });
          navigate('/profile')
        } else {
          setSuccessMessage({ message: data.message, success: false });
        }
      };

  return (
    <div className="flex flex-col p-3 max-w-sm sm:max-w-lg mx-auto  mt-10 gap-7 mb-32">
       <input
            className="p-3 bg-grey rounded-lg 
            font-lightbold  mt-40 sm:mt-20 "
            onChange={(e)=>setnewName(e.target.value)}
            id="userName"
            type="text"
            placeholder=" New username "
          />
        <p className='font-semibold text-dark-grey -mt-3 p-2'>
        You'll be able to change your username back 
        to {currentUser.user.userName} for another 14 days.</p>
          <button
            className="bg-green text-white text-sm rounded-md
       p-3 w-3/5 mx-auto"
            onClick={changeUserName}
          >
            Change
          </button>
          <p className={successMessage.success? "text-green h-5 -mt-3":
          " text-red-700 h-5 -mt-3"}>
          {successMessage.message?successMessage.message :''}</p>
    </div>
  )
}

export default ChangeUsername
