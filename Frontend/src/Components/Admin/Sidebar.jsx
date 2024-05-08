import React from 'react'
import Logo from '../../../public/Top 5.png'

const Sidebar = () => {
  return (
    <>
    
    <>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
  />
  <div className="min-h-screen fixed flex flex-row bg-gray-100">
    <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
      <div className="flex items-center justify-center h-20">
    <img src={Logo} className='h-20' alt="" />
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-home" />
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-music" />
            </span>
            <span className="text-sm font-medium">Playway</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-drink" />
            </span>
            <span className="text-sm font-medium">Drink</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-shopping-bag" />
            </span>
            <span className="text-sm font-medium">Shopping</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-chat" />
            </span>
            <span className="text-sm font-medium">Chat</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-user" />
            </span>
            <span className="text-sm font-medium">Profile</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-bell" />
            </span>
            <span className="text-sm font-medium">Notifications</span>
            <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
              5
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-log-out" />
            </span>
            <span className="text-sm font-medium">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</>

    
    </>
  )
}

export default Sidebar