import { useEffect, useState } from 'react'
import {GoDotFill} from "react-icons/go"
import { getData } from '../APICALLS';
import ChatBarDropdown from './ChatBarDropdown';

const FreindProfileChatBar = ({onlineUsers, currentChat,userId}) => {
  const [online,setOnline]=useState(false)
  const [freind,setFreind]=useState(null)


    useEffect(()=>{
        let freindId=currentChat.members.find(id=>id!==userId)
      onlineUsers?.some(user=>user.userId===freindId) && setOnline(true)

      getData("pro/get-chatBarData/"+freindId).then(data=>{
        setFreind(data)
      })
    },[currentChat])

    
  return (
  <div className='fixed w-full sm:w-[69%] pr-0 sm:pr-4'>
        <div className='flex justify-between  h-[60px] bg-[#F0F2F5] '>
    <div className='flex gap-6 p-4 '>

    <div className='relative '>
    <img src={freind?.profilePicture}
     alt='Profile'
     className='h-10 w-10 rounded-full object-cover '/>
     {online &&
    <GoDotFill className="text-[#65c654] absolute -bottom-2 right-0"/>}
     </div>

     <div>
  <p className=' text-base font-lightbold  pt-2'>
    {freind?.userName}
  </p>
  <p className="text-[10px] text-dark-grey font-lightbold "
    >{online&&"Online"}</p>
     </div>
     </div>

     <div  >
      <ChatBarDropdown conversationId={currentChat._id}/>
     </div>
 </div>
    </div>
  )
}

export default FreindProfileChatBar
