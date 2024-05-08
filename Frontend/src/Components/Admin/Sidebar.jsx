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
          <a className=" text-blue-900 font-bold text-xl "
            href="#"
            classname="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-home" />
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
        </li>
        <li>
          <a classname="text-blue-900 font-bold text-xl "
            href="/Admin/AddPlayway"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-music" />
            </span>
            <span className="text-sm font-medium">Playway</span>
          </a>
        </li>
        <li>
          <a classname="text-blue-900 font-bold text-xl"
            href="/Admin/AddSchool"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-drink" />
            </span>
            <span className="text-sm font-medium">School</span>
          </a>
        </li>
        <li>
          <a classname="text-blue-900 font-bold text-xl"
            href="/Admin/AddCollege"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-shopping-bag" />
            </span>
            <span className="text-sm font-medium">College</span>
          </a>
        </li>
        <li>
          <a classname="text-blue-900 fon-bold text-xl"
            href="/Admin/ManagePlayway"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-chat" />
            </span>
            <span className="text-sm font-medium">Manage Playways</span>
          </a>
        </li>
        <li>
          <a classname="text-blue-900 fon-bold text-xl"
            href="/Admin/ManageSchool"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-user" />
            </span>
            <span className="text-sm font-medium">Manage Schools</span>
          </a>
        </li>
        <li>
          <a classname="text-blue-900 fon-bold text-xl"
            href="/Admin/ManageCollege"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-bell" />
            </span>
            <span className="text-sm font-medium">Manage Colleges</span>
            <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
              
            </span>
          </a>
        </li>
        <li>
          <a classname="text-blue-900 fon-bold text-xl"
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
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