import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './App.css'
import AddPlayway from './Components/Admin/AddPlayway'
import AddSchool from './Components/Admin/AddSchool'
import AddCollege from './Components/Admin/AddCollege'
import PlaywayListing from './Components/PlaywayListing'
import { SnackbarProvider } from 'notistack'
import ViewPlayway from './Components/ViewPlayway'
import SchoolListing from './Components/SchoolListing'
import ManagePlayway from './Components/Admin/ManagePlayway'
import ManageSchool from './Components/Admin/ManageSchool'
import ManageCollege from './Components/Admin/ManageCollege'
import ManageUser from './Components/Admin/ManageUser'
import Contact from './Components/Main/Contact'
import ForgetPassword from './Components/ForgetPassword'
import ViewSchool from './Components/ViewSchool'
import ViewCollege from './Components/ViewCollege'
import { AppProvider } from './Context/UserContext'
import Admin from './Components/Admin/Index'
import Main from './Components/Main/Index'
import College from './Components/Main/College'
import Dashboard from './Components/Admin/Dashboard'
import User from './Components/User/Index'
import Profile from './Components/User/profile'


const App = () => {
  return (
    <div>

      <BrowserRouter>
     
        <SnackbarProvider>
          <AppProvider>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/AddPlayway' element={<AddPlayway />} />
              <Route path='/AddSchool' element={<AddSchool />} />
              <Route path='/PlaywayListing' element={<PlaywayListing />} />
              <Route path='/SchoolListing' element={<SchoolListing />} />
         
              <Route path='/ViewPlayway' element={<ViewPlayway />} />
              <Route path='/ViewSchool' element={<ViewSchool />} />
              <Route path='/ViewCollege' element={<ViewCollege />} />
              <Route path='/ManagePlayway' element={<ManagePlayway />} />
              <Route path='/ManageSchool' element={<ManageSchool />} />
              <Route path='/ManageCollege' element={<ManageCollege />} />
              <Route path='/ManageUser' element={<ManageUser />} />
              <Route path='/ForgetPassword' element={<ForgetPassword />} />


              <Route path='/admin' element={<Admin />}>
              <Route path='AddCollege' element={<AddCollege />} />
              <Route path='dashboard' element={<Dashboard />} />
              </Route>

              <Route path='/user' element={<User />}>
              <Route path='profile' element={<Profile />} />
          
              </Route>

              <Route path='/main' element={<Main />}>
              <Route path='College' element={<College />} />
              <Route path='Contact' element={<Contact />} />        
              </Route>



            </Routes>
          </AppProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App