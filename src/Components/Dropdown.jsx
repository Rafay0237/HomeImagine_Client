import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { signOut } from '../redux/user/userSlice'
import {  useDispatch } from 'react-redux'


export default function Dropdown({img}) {
  const dispatch=useDispatch()
  const handleSignOut=()=>{
  dispatch(signOut()) 
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex ">
          { <img
        src={img}
        alt="Profile"
        className="h-10 w-10 rounded-full object-cover "
    />}
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
        <Menu.Items className="absolute right-0 z-10 mt-5 w-48 origin-top-right rounded-md
         bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2">
          <div className="py-1">

            <Menu.Item>
                <Link to="/profile">
                <p className='text-dark-grey font-semibold block px-4 py-2 text-sm hover:bg-grey'>
                 Profile
                </p>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/chat">
                <p className='text-dark-grey  font-semibold block px-4 py-2 text-sm hover:bg-grey'>
                 Messages
                </p>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/profile">
                <p className='text-dark-grey font-semibold block px-4 py-2 text-sm hover:bg-grey'>
                 Order
                </p>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/profile">
                <p className='text-dark-grey font-semibold block px-4 py-2 text-sm hover:bg-grey'>
                 Your Ideabooks
                </p>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <p className='text-dark-grey font-semibold block px-4 py-2 text-sm hover:bg-grey'
                onClick={()=>handleSignOut()}>
                 Sign Out
                </p>
            </Menu.Item>

        </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}