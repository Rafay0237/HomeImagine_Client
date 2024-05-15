import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiDotsVertical } from "react-icons/hi";
import {deleteData} from "../APICALLS"
import {toast} from "react-hot-toast"


export default function ChatBarDropdown({conversationId}) {

  const handleClearChat=async()=>{
    deleteData("chat/messages/"+conversationId).then((data)=>{
    if(!data.deleted){
    toast.error(data.message)
    return
    }
    toast.success("Chat has been cleared")
    // after chat ?

    })
  }

  const handleRemoveFreind=async()=>{
    deleteData("chat/conversation/"+conversationId).then((data)=>{
      if(!data.deleted){
      toast.error(data.message)
      return
      }
      toast.success("Freind Removed")
    })
  }
 
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex ">
        <HiDotsVertical className=' h-8 w-8 mt-5 mr-2 sm:mr-6 text-dark-grey'/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-5 z-10 mt-5 w-60 origin-top-right rounded-md
         bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2">
          <div className="py-1">

            <Menu.Item >
                <p className='text-dark-grey font-semibold block px-4 py-2 text-sm hover:bg-grey'>
                Start Contract
                </p>
            </Menu.Item>
            <Menu.Item onClick={handleClearChat}>
                <p className='text-dark-grey  font-semibold block px-4 py-2 text-sm hover:bg-grey'>
                Clear Chat
                </p>
            </Menu.Item>
            <Menu.Item onClick={handleRemoveFreind}>
                <p className='text-dark-grey font-semibold block px-4 py-2 text-sm hover:bg-grey'>
                 Remove User
                </p>
            </Menu.Item>
            

        </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}