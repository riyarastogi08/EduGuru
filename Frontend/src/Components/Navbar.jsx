import React from 'react'
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

const Navbar = () => {
  initMDB({ Dropdown, Collapse });
  return (
    <>
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        data-mdb-collapse-init=""
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="data:image/jpeg;base64,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"
            height={15}
            alt="Top 5 EduGuru"
            loading="lazy"
          />
        </a>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AddPlayway">
              AddPlayway
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AddSchool">
              AddSchool
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AddCollege">
              AddCollege
            </a>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon */}
        <a className="text-reset me-3" href="#">
          <i className="fas fa-shopping-cart" />
        </a>
        {/* Notifications */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init=""
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            aria-expanded="false"
          >
            <i className="fas fa-bell" />
            <span className="badge rounded-pill badge-notification bg-danger">
              1
            </span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
                Some news
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another news
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        {/* Avatar */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init=""
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height={25}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#">
                My profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    
    </> 
  )
}

export default Navbar